var getKeyword = function () {

        this.getReference = function (fileName) {

                const properties = require('../Properties')
                const fs = require('fs');
                // read the file into raw data
                const path = require("path");
                var pathOfFile = "../TestCases/" + fileName + ".json"
                const rawdata = fs.readFileSync(path.resolve(__dirname, pathOfFile));
                // parse the raw data into meaningful JSON format
                let contents = JSON.parse(rawdata);

                var Keyword = contents['Keyword']



                for (var i = 0; i < Keyword.length; i++) {
                        var Keywords = Keyword[i]
                        properties.ObjectReference.push(Keywords['ObjectReference'])

                        //Adding ObjectType
                        if (Keywords.hasOwnProperty("ObjectType")) {
                                properties.ObjectType.push(Keywords['ObjectType'])
                        }
                        else {
                                properties.ObjectType.push("")
                        }

                        //Adding Action
                        if (Keywords.hasOwnProperty("Action")) {
                                properties.Action.push(Keywords['Action'])
                        }
                        else {
                                properties.Action.push("")
                        }

                        //Adding ReturnValue
                        if (Keywords.hasOwnProperty("ReturnValue")) {
                                properties.ReturnValue.push(Keywords['ReturnValue'])
                        }
                        else {
                                properties.ReturnValue.push("")
                        }

                        //Adding Data1
                        if (Keywords.hasOwnProperty("Data1")) {
                                properties.Data1.push(Keywords['Data1'])
                        }
                        else {
                                properties.Data1.push("")
                        }

                        //Adding Data2
                        if (Keywords.hasOwnProperty("Data2")) {
                                properties.Data2.push(Keywords['Data2'])
                        }
                        else {
                                properties.Data2.push("")
                        }

                        //Adding ContinueOnError
                        if (Keywords.hasOwnProperty("ContinueOnError")) {
                                properties.ContinueOnError.push(Keywords['ContinueOnError'])
                        }
                        else {
                                properties.ContinueOnError.push("")
                        }

                        //Adding CommentAstep
                        if (Keywords.hasOwnProperty("CommentAstep")) {
                                properties.CommentAstep.push(Keywords['CommentAstep'])
                        }
                        else {
                                properties.CommentAstep.push("")
                        }

                        //Adding NoOfTries
                        if (Keywords.hasOwnProperty("NoOfTries")) {
                                properties.NoOfTries.push(Keywords['NoOfTries'])
                        }
                        else {
                                properties.NoOfTries.push(0)
                        }

                        // properties.ObjectType.push(Keywords['ObjectType'])
                        // properties.Action.push(Keywords['Action'])
                        // properties.ReturnValue.push(Keywords['ReturnValue'])
                        // properties.Data1.push(Keywords['Data1'])
                        // properties.Data2.push(Keywords['Data2'])
                        // properties.ContinueOnError.push(Keywords['ContinueOnError'])
                        // properties.CommentAstep.push(Keywords['CommentAstep'])
                        // properties.NoOfTries.push(Keywords['NoOfTries'])

                }
                return [properties.ObjectReference, properties.ObjectType, properties.Action,
                properties.ReturnValue, properties.Data1, properties.Data2,
                properties.ContinueOnError, properties.CommentAstep,
                properties.NoOfTries]
        }

}

module.exports = new getKeyword()

