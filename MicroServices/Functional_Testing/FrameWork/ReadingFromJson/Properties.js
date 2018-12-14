var properties = function () {
    //These variables are for the Locators
    //*************************************** */
    this.LocatorName = [],
        this.XPATH = [],
        this.ID = [],
        this.NAME = [],
        this.CLASSNAME = [],
        this.CSS = [],
        this.BINDING = [],
        this.MODEL = [],
        this.TAGNAME = []
    //*************************************** */

    //These variables are for the keywords
    //*************************************** */
    this.ObjectReference = [],
        this.ObjectType = [],
        this.Action = [],
        this.ReturnValue = [],
        this.Data1 = [],
        this.Data2 = [],
        this.ContinueOnError = [],
        this.CommentAstep = [],
        this.NoOfTries = [],
        //*************************************** */
        this.TestCase = [],
        //*************************************** */
        this.SuiteTestCaseName = [],
        this.SuiteRun = []

}

module.exports = new properties;