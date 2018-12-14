const loadtest = require('loadtest');
const options = {
    url: 'https://hearwebapp-qa.azurewebsites.net',
    maxRequests: 1,
};
loadtest.loadTest(options, function(error, result)
{
    if (error)
    {
        return console.error('Got an error: %s', error);
    }
    console.log('Tests run successfully');
});