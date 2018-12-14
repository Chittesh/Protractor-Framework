const ClientViewPage = function() {

    const clientViewRepository = require('../Repository/ClientView_Repository')
    const common = require('../Pages/Common')

    this.terminatePlan = function(){
        clientViewRepository.terminateButton.click()
    }

    this.editPlanEffectiveDate = function() {
        clientViewRepository.editButton.click()
    }

    this.getClientName = function() {
        common.verifyText(clientViewRepository.clientName)
    }

    this.getClientID = function() {
        common.verifyText(clientViewRepository.clientId)
    }

    this.navigateToClientInformtion = function() {
        clientViewRepository.clientInformationLink.click()
    }

    this.navigateToClientDetails = function() {
        clientViewRepository.contactDetailsLink.click()
    }


}
module.exports= new ClientViewPage