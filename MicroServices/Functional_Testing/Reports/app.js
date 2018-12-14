var app = angular.module('reportingApp', []);

//<editor-fold desc="global helpers">

var isValueAnArray = function (val) {
    return Array.isArray(val);
};

var getSpec = function (str) {
    var describes = str.split('|');
    return describes[describes.length - 1];
};
var checkIfShouldDisplaySpecName = function (prevItem, item) {
    if (!prevItem) {
        item.displaySpecName = true;
    } else if (getSpec(item.description) !== getSpec(prevItem.description)) {
        item.displaySpecName = true;
    }
};

var getParent = function (str) {
    var arr = str.split('|');
    str = "";
    for (var i = arr.length - 2; i > 0; i--) {
        str += arr[i] + " > ";
    }
    return str.slice(0, -3);
};

var getShortDescription = function (str) {
    return str.split('|')[0];
};

var countLogMessages = function (item) {
    if ((!item.logWarnings || !item.logErrors) && item.browserLogs && item.browserLogs.length > 0) {
        item.logWarnings = 0;
        item.logErrors = 0;
        for (var logNumber = 0; logNumber < item.browserLogs.length; logNumber++) {
            var logEntry = item.browserLogs[logNumber];
            if (logEntry.level === 'SEVERE') {
                item.logErrors++;
            }
            if (logEntry.level === 'WARNING') {
                item.logWarnings++;
            }
        }
    }
};

var defaultSortFunction = function sortFunction(a, b) {
    if (a.sessionId < b.sessionId) {
        return -1;
    }
    else if (a.sessionId > b.sessionId) {
        return 1;
    }

    if (a.timestamp < b.timestamp) {
        return -1;
    }
    else if (a.timestamp > b.timestamp) {
        return 1;
    }

    return 0;
};


//</editor-fold>

app.controller('ScreenshotReportController', function ($scope, $http) {
    var that = this;
    var clientDefaults = {};

    $scope.searchSettings = Object.assign({
        description: '',
        allselected: true,
        passed: true,
        failed: true,
        pending: true,
        withLog: true
    }, clientDefaults.searchSettings || {}); // enable customisation of search settings on first page hit

    var initialColumnSettings = clientDefaults.columnSettings; // enable customisation of visible columns on first page hit
    if (initialColumnSettings) {
        if (initialColumnSettings.displayTime !== undefined) {
            // initial settings have be inverted because the html bindings are inverted (e.g. !ctrl.displayTime)
            this.displayTime = !initialColumnSettings.displayTime;
        }
        if (initialColumnSettings.displayBrowser !== undefined) {
            this.displayBrowser = !initialColumnSettings.displayBrowser; // same as above
        }
        if (initialColumnSettings.displaySessionId !== undefined) {
            this.displaySessionId = !initialColumnSettings.displaySessionId; // same as above
        }
        if (initialColumnSettings.displayOS !== undefined) {
            this.displayOS = !initialColumnSettings.displayOS; // same as above
        }
        if (initialColumnSettings.inlineScreenshots !== undefined) {
            this.inlineScreenshots = initialColumnSettings.inlineScreenshots; // this setting does not have to be inverted
        } else {
            this.inlineScreenshots = false;
        }
    }

    this.showSmartStackTraceHighlight = true;

    this.chooseAllTypes = function () {
        var value = true;
        $scope.searchSettings.allselected = !$scope.searchSettings.allselected;
        if (!$scope.searchSettings.allselected) {
            value = false;
        }

        $scope.searchSettings.passed = value;
        $scope.searchSettings.failed = value;
        $scope.searchSettings.pending = value;
        $scope.searchSettings.withLog = value;
    };

    this.isValueAnArray = function (val) {
        return isValueAnArray(val);
    };

    this.getParent = function (str) {
        return getParent(str);
    };

    this.getSpec = function (str) {
        return getSpec(str);
    };

    this.getShortDescription = function (str) {
        return getShortDescription(str);
    };

    this.convertTimestamp = function (timestamp) {
        var d = new Date(timestamp),
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),
            dd = ('0' + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),
            ampm = 'AM',
            time;

        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh === 0) {
            h = 12;
        }

        // ie: 2013-02-18, 8:35 AM
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;

        return time;
    };


    this.round = function (number, roundVal) {
        return (parseFloat(number) / 1000).toFixed(roundVal);
    };


    this.passCount = function () {
        var passCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.passed) {
                passCount++;
            }
        }
        return passCount;
    };


    this.pendingCount = function () {
        var pendingCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.pending) {
                pendingCount++;
            }
        }
        return pendingCount;
    };


    this.failCount = function () {
        var failCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (!result.passed && !result.pending) {
                failCount++;
            }
        }
        return failCount;
    };

    this.passPerc = function () {
        return (this.passCount() / this.totalCount()) * 100;
    };
    this.pendingPerc = function () {
        return (this.pendingCount() / this.totalCount()) * 100;
    };
    this.failPerc = function () {
        return (this.failCount() / this.totalCount()) * 100;
    };
    this.totalCount = function () {
        return this.passCount() + this.failCount() + this.pendingCount();
    };

    this.applySmartHighlight = function (line) {
        if (this.showSmartStackTraceHighlight) {
            if (line.indexOf('node_modules') > -1) {
                return 'greyout';
            }
            if (line.indexOf('  at ') === -1) {
                return '';
            }

            return 'highlight';
        }
        return true;
    };

    var results = [
    {
        "description": "Should Open The Website|Should Add A New Client",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 17240,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.110"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://login.microsoftonline.com/favicon.ico - Failed to load resource: the server responded with a status of 404 (Not Found)",
                "timestamp": 1544090114820,
                "type": ""
            }
        ],
        "screenShotFile": "00f80024-00f3-00d1-0063-0038009c00cf.png",
        "timestamp": 1544090090569,
        "duration": 24245
    },
    {
        "description": "Should Login To The Page and perform Add client functionality|Should Add A New Client",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 17240,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.110"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://hearwebapp-qa.azurewebsites.net/manifest.json - Manifest: found icon with no valid size.",
                "timestamp": 1544090151408,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://hearwebapp-qa.azurewebsites.net/assets/fonts/fontawesome-webfont.woff2?v=4.6.3 - Failed to load resource: net::ERR_FAILED",
                "timestamp": 1544090158456,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://hearwebapp-qa.azurewebsites.net/assets/fonts/fontawesome-webfont.woff?v=4.6.3 - Failed to load resource: net::ERR_FAILED",
                "timestamp": 1544090159009,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://hearwebapp-qa.azurewebsites.net/main.1eaf6b3aee90c1623839.bundle.js 0:1388854 \"Cannot read property 'status' of null\"",
                "timestamp": 1544090174949,
                "type": ""
            }
        ],
        "screenShotFile": "00b4007d-0090-007c-00bd-0038000800b9.png",
        "timestamp": 1544090116605,
        "duration": 81166
    },
    {
        "description": "Should Open The Website|Should Add A New Client",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11836,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.110"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://login.microsoftonline.com/favicon.ico - Failed to load resource: the server responded with a status of 404 (Not Found)",
                "timestamp": 1544090339462,
                "type": ""
            }
        ],
        "screenShotFile": "001b00dc-0086-00f8-0093-00db00a10017.png",
        "timestamp": 1544090322320,
        "duration": 17139
    },
    {
        "description": "Should Login To The Page and perform Add client functionality|Should Add A New Client",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11836,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.110"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://hearwebapp-qa.azurewebsites.net/manifest.json - Manifest: found icon with no valid size.",
                "timestamp": 1544090372585,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://hearwebapp-qa.azurewebsites.net/assets/fonts/fontawesome-webfont.woff2?v=4.6.3 - Failed to load resource: net::ERR_FAILED",
                "timestamp": 1544090377281,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://hearwebapp-qa.azurewebsites.net/assets/fonts/fontawesome-webfont.woff?v=4.6.3 - Failed to load resource: net::ERR_FAILED",
                "timestamp": 1544090377595,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://hearwebapp-qa.azurewebsites.net/main.1eaf6b3aee90c1623839.bundle.js 0:1388854 \"Cannot read property 'status' of null\"",
                "timestamp": 1544090393493,
                "type": ""
            }
        ],
        "screenShotFile": "0065007c-000f-00ab-00fc-00a90058002e.png",
        "timestamp": 1544090340612,
        "duration": 75742
    },
    {
        "description": "Should Open The Website|Should Add A New Client",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 16784,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.110"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://login.microsoftonline.com/favicon.ico - Failed to load resource: the server responded with a status of 404 (Not Found)",
                "timestamp": 1544440996445,
                "type": ""
            }
        ],
        "screenShotFile": "004500e6-0090-00b2-0023-00eb007a00f1.png",
        "timestamp": 1544440983970,
        "duration": 12473
    },
    {
        "description": "Should Login To The Page and perform Add client functionality|Should Add A New Client",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 16784,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.110"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://hearwebapp-qa.azurewebsites.net/manifest.json - Manifest: found icon with no valid size.",
                "timestamp": 1544441018297,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://hearwebapp-qa.azurewebsites.net/assets/fonts/fontawesome-webfont.woff2?v=4.6.3 - Failed to load resource: net::ERR_FAILED",
                "timestamp": 1544441042636,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://hearwebapp-qa.azurewebsites.net/assets/fonts/fontawesome-webfont.woff?v=4.6.3 - Failed to load resource: net::ERR_FAILED",
                "timestamp": 1544441042921,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://hearwebapp-qa.azurewebsites.net/main.2ebf78c63355f112e71a.bundle.js 0:1518000 \"Cannot read property 'status' of null\"",
                "timestamp": 1544441052357,
                "type": ""
            }
        ],
        "screenShotFile": "008f00d1-0093-008b-0053-009e0021003f.png",
        "timestamp": 1544440997781,
        "duration": 65349
    },
    {
        "description": "Should Open The Website|Should Add A New Client",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10548,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.110"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://login.microsoftonline.com/favicon.ico - Failed to load resource: the server responded with a status of 404 (Not Found)",
                "timestamp": 1544442181442,
                "type": ""
            }
        ],
        "screenShotFile": "00f800db-000a-00c0-0059-006600b30000.png",
        "timestamp": 1544442170398,
        "duration": 13881
    },
    {
        "description": "Should Login To The Page and perform Add client functionality|Should Add A New Client",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10548,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.110"
        },
        "message": [
            "Failed: locator is not defined"
        ],
        "trace": [
            "ReferenceError: locator is not defined\n    at getKeyword.getReference (D:\\MicroServices\\Functional_Testing\\FrameWork\\ReadingFromJson\\keywordDriven\\keyword.js:32:32)\n    at getKeywordBasedOnValues.getKeyword (D:\\MicroServices\\Functional_Testing\\FrameWork\\ReadingFromJson\\keywordDriven\\getKeywordBasedOnValues.js:10:44)\n    at run (D:\\MicroServices\\Functional_Testing\\FrameWork\\ReadFromJson.js:13:44)\n    at UserContext.<anonymous> (D:\\MicroServices\\Functional_Testing\\FrameWork\\ReadFromJson.js:31:9)\n    at C:\\Users\\chicharles\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\chicharles\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\chicharles\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\chicharles\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\chicharles\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\chicharles\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\nFrom: Task: Run it(\"Should Login To The Page and perform Add client functionality\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\chicharles\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\chicharles\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\chicharles\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\chicharles\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\chicharles\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\chicharles\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\chicharles\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\chicharles\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\chicharles\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\chicharles\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\MicroServices\\Functional_Testing\\FrameWork\\ReadFromJson.js:29:1)\n    at addSpecsToSuite (C:\\Users\\chicharles\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\chicharles\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\chicharles\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\MicroServices\\Functional_Testing\\FrameWork\\ReadFromJson.js:8:1)\n    at Module._compile (module.js:652:30)\n    at Object.Module._extensions..js (module.js:663:10)\n    at Module.load (module.js:565:32)\n    at tryModuleLoad (module.js:505:12)"
        ],
        "browserLogs": [],
        "screenShotFile": "002b008b-0078-00a6-00f3-00fe00270077.png",
        "timestamp": 1544442185115,
        "duration": 0
    },
    {
        "description": "Should Open The Website|Should Add A New Client",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 18140,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.110"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://login.microsoftonline.com/favicon.ico - Failed to load resource: the server responded with a status of 404 (Not Found)",
                "timestamp": 1544442269054,
                "type": ""
            }
        ],
        "screenShotFile": "00610092-006f-0018-0010-006400fd00b6.png",
        "timestamp": 1544442256413,
        "duration": 12637
    },
    {
        "description": "Should Open The Website|Should Add A New Client",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 12452,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.110"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://login.microsoftonline.com/favicon.ico - Failed to load resource: the server responded with a status of 404 (Not Found)",
                "timestamp": 1544442420814,
                "type": ""
            }
        ],
        "screenShotFile": "00b800c3-0016-00b8-0060-0058004900b1.png",
        "timestamp": 1544442408541,
        "duration": 12269
    },
    {
        "description": "Should Login To The Page and perform Add client functionality|Should Add A New Client",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 12452,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.110"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://hearwebapp-qa.azurewebsites.net/manifest.json - Manifest: found icon with no valid size.",
                "timestamp": 1544442442575,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://hearwebapp-qa.azurewebsites.net/assets/fonts/fontawesome-webfont.woff2?v=4.6.3 - Failed to load resource: net::ERR_FAILED",
                "timestamp": 1544442444956,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://hearwebapp-qa.azurewebsites.net/assets/fonts/fontawesome-webfont.woff?v=4.6.3 - Failed to load resource: net::ERR_FAILED",
                "timestamp": 1544442445231,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://hearwebapp-qa.azurewebsites.net/main.2ebf78c63355f112e71a.bundle.js 0:1518000 \"Cannot read property 'status' of null\"",
                "timestamp": 1544442453649,
                "type": ""
            }
        ],
        "screenShotFile": "00a70001-0053-0028-0078-009c0052002c.png",
        "timestamp": 1544442421780,
        "duration": 43844
    },
    {
        "description": "Should Open The Website|Should Add A New Client",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 17688,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.110"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://login.microsoftonline.com/favicon.ico - Failed to load resource: the server responded with a status of 404 (Not Found)",
                "timestamp": 1544443000454,
                "type": ""
            }
        ],
        "screenShotFile": "00a200e5-007d-009c-0098-00e0004e00b2.png",
        "timestamp": 1544442986097,
        "duration": 14357
    }
];

    this.sortSpecs = function () {
        this.results = results.sort(function sortFunction(a, b) {
    if (a.sessionId < b.sessionId) return -1;else if (a.sessionId > b.sessionId) return 1;

    if (a.timestamp < b.timestamp) return -1;else if (a.timestamp > b.timestamp) return 1;

    return 0;
});
    };

    this.loadResultsViaAjax = function () {

        $http({
            url: './combined.json',
            method: 'GET'
        }).then(function (response) {
                var data = null;
                if (response && response.data) {
                    if (typeof response.data === 'object') {
                        data = response.data;
                    } else if (response.data[0] === '"') { //detect super escaped file (from circular json)
                        data = CircularJSON.parse(response.data); //the file is escaped in a weird way (with circular json)
                    }
                    else
                    {
                        data = JSON.parse(response.data);
                    }
                }
                if (data) {
                    results = data;
                    that.sortSpecs();
                }
            },
            function (error) {
                console.error(error);
            });
    };


    if (clientDefaults.useAjax) {
        this.loadResultsViaAjax();
    } else {
        this.sortSpecs();
    }


});

app.filter('bySearchSettings', function () {
    return function (items, searchSettings) {
        var filtered = [];
        if (!items) {
            return filtered; // to avoid crashing in where results might be empty
        }
        var prevItem = null;

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.displaySpecName = false;

            var isHit = false; //is set to true if any of the search criteria matched
            countLogMessages(item); // modifies item contents

            var hasLog = searchSettings.withLog && item.browserLogs && item.browserLogs.length > 0;
            if (searchSettings.description === '' ||
                (item.description && item.description.toLowerCase().indexOf(searchSettings.description.toLowerCase()) > -1)) {

                if (searchSettings.passed && item.passed || hasLog) {
                    isHit = true;
                } else if (searchSettings.failed && !item.passed && !item.pending || hasLog) {
                    isHit = true;
                } else if (searchSettings.pending && item.pending || hasLog) {
                    isHit = true;
                }
            }
            if (isHit) {
                checkIfShouldDisplaySpecName(prevItem, item);

                filtered.push(item);
                prevItem = item;
            }
        }

        return filtered;
    };
});

