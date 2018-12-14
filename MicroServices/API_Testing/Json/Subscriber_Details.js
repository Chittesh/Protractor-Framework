var Subscriber_Details = function() {

    var randomvalues = require('../../Utils/RandomValues_page')
    var constants = require('../../Utils/Constants')

    this.subscriber_details = 
    {
        "SubscriptionMembers": [
          {
            "isPrimary": true,
            "isBoardMember": false,
            "isAddressCopy": false,
            "isContactCopy": false,
            "showDepEligiblePlan": false,
            "isLife": false,
            "medicalCertDate": null,
            "islifeCertDate": false,
            "isdentalCertDate": false,
            "ismedicalCertDate": false,
            "isvisionCertDate": false,
            "isEdit": false,
            "isDeptCertApplicable": false,
            "IsFreezeRelationship": false,
            "IsHideEdit": false,
            "IsExistAsSubscriber": false,
            "isCobra": false,
            "isEligibleForVoluntaryLife": true,
            "isCaptureVoluntaryInfo": true,
            "Member": {
              "hideSSN": false,
              "hideTaxId": false,
              "hidessnLength": false,
              "hideTaxIdLength": false,
              "isAlternateIdExists": false,
              "SurchargeOverride": false,
              "isShowHMO": false,
              "isShowDEN": false,
              "IsHMOInfoExists_Hlth": false,
              "IsCurrentProvider_Hlth": false,
              "IsHMOInfoExists_Den": false,
              "IsCurrentProvider_Den": false,
              "isValidCOBDate": false,
              "MemberAddress": [
                {
                  "isMailingAdd": false,
                  "AddressTypeID": 1,
                  "isActive": true,
                  "CountryID": 273,
                  "CountryName": "UNITED STATES",
                  "AddressLine1": "sgdfadgfsgfsgj",
                  "ZipCode": constants.zipcode1,
                  "City": "AUSTIN",
                  "State": "TX"
                }
              ],
              "AlternateId": [],
              "SSN": randomvalues.getSSNNumberInSplitFormat(),
              "clientID": constants.clientID1,
              "LastName": "ausdui",
              "FirstName": "sangeetha",
              "MiddleInitial": "k",
              "DateOfBirth": "12/12/1990",
              "Gender": 1,
              "Mobile": randomvalues.getRandomNumber(10),
              "HomeTelephone": randomvalues.getRandomNumber(10),
              "WorkTelephone": randomvalues.getRandomNumber(10),
              "Email": "name@domain.com"
            },
            "SubscriptionMemberPlans": [
              {
                "isDelete": false,
                "isPlanSelected": true,
                "isReEnroll": true,
                "IsPlanReEnroll": false,
                "isPriorPlanEdit": false,
                "isNotFirstOfMonth": false,
                "ClientPlanID": "2ea0eb7d-c2bd-47a2-9ec9-b4f463aa9198",
                "InsType": "HLTH",
                "Benefits": "90-E $20",
                "AllowedEnrollment": "ESC",
                "DirectBillFlag": "N",
                "TerminationDate": null,
                "EffStartDate": "08/01/2018"
              },
              {
                "isDelete": false,
                "isPlanSelected": true,
                "isReEnroll": true,
                "IsPlanReEnroll": false,
                "isPriorPlanEdit": false,
                "isNotFirstOfMonth": false,
                "ClientPlanID": "3fa6cbf8-df13-4c6a-bfd6-3b109869a5db",
                "InsType": "DEN",
                "Benefits": "PPO 1500; A 100/3000",
                "AllowedEnrollment": "ESC",
                "DirectBillFlag": "N",
                "TerminationDate": null,
                "EffStartDate": "08/01/2018"
              },
              {
                "isDelete": false,
                "isPlanSelected": true,
                "isReEnroll": true,
                "IsPlanReEnroll": false,
                "isPriorPlanEdit": false,
                "isNotFirstOfMonth": false,
                "ClientPlanID": "a106d682-ed70-44eb-a296-13e3d0fe0977",
                "InsType": "VIS",
                "Benefits": "C $10",
                "AllowedEnrollment": "ESC",
                "DirectBillFlag": "N",
                "TerminationDate": null,
                "EffStartDate": "08/01/2018"
              },
              {
                "isDelete": false,
                "isPlanSelected": true,
                "isReEnroll": true,
                "IsPlanReEnroll": false,
                "isPriorPlanEdit": false,
                "isNotFirstOfMonth": false,
                "ClientPlanID": "721d3ee4-b3d1-4dc7-ae4f-94d694e7be02",
                "InsType": "LIFE",
                "Benefits": "Basic $50,000",
                "AllowedEnrollment": "EE_Only",
                "DirectBillFlag": "N",
                "TerminationDate": null,
                "EffStartDate": "08/01/2018"
              }
            ],
            "RelationTypes": {
              "RelationCode": "SUBSCRIBER"
            },
            "CobraCode": 0,
            "isAutoPopulate": false,
            "isNewMember": true,
            "ssnBind": null,
            "isMasterEffectiveDate": true,
            "masterEffectiveDate": "08/01/2018",
            "SubscriptionMemberVoluntaryPlans": [
              {
                "IsChildPlanChecked": true,
                "isNotFirstOfMonth": false,
                "isSubsActivePlan": false,
                "IsAllowEdit": true,
                "EffStartDate": "08/01/2018",
                "Group": "G000ABIH-001",
                "ProductCode": "MOS",
                "isPlanSelected": true,
                "Coverage": "20000.00",
                "Premium": 1.2,
                "ChildPlanEffDate": "08/01/2018"
              }
            ],
            "isActive": true,
            "isSelected": true,
            "isCustomEffectiveDate": false
          },
          {
            "isPrimary": false,
            "isBoardMember": false,
            "isAddressCopy": true,
            "isContactCopy": true,
            "showDepEligiblePlan": false,
            "isLife": false,
            "medicalCertDate": null,
            "islifeCertDate": false,
            "isdentalCertDate": false,
            "ismedicalCertDate": false,
            "isvisionCertDate": false,
            "isEdit": false,
            "isDeptCertApplicable": false,
            "IsFreezeRelationship": false,
            "IsHideEdit": false,
            "IsExistAsSubscriber": false,
            "isCobra": false,
            "isEligibleForVoluntaryLife": false,
            "isCaptureVoluntaryInfo": false,
            "Member": {
              "hideSSN": false,
              "hideTaxId": false,
              "hidessnLength": false,
              "hideTaxIdLength": false,
              "isAlternateIdExists": false,
              "SurchargeOverride": false,
              "isShowHMO": false,
              "isShowDEN": false,
              "IsHMOInfoExists_Hlth": false,
              "IsCurrentProvider_Hlth": false,
              "IsHMOInfoExists_Den": false,
              "IsCurrentProvider_Den": false,
              "isValidCOBDate": false,
              "MemberAddress": [
                {
                  "isMailingAdd": false,
                  "AddressTypeID": 1,
                  "isActive": true
                }
              ],
              "AlternateId": [],
              "LastName": "katte",
              "FirstName": "sangeeth",
              "DateOfBirth": "12/12/1993",
              "Gender": 2
            },
            "SubscriptionMemberPlans": [
              {
                "isDelete": false,
                "isPlanSelected": true,
                "isReEnroll": true,
                "IsPlanReEnroll": false,
                "isPriorPlanEdit": false,
                "isNotFirstOfMonth": false,
                "ClientPlanID": "2ea0eb7d-c2bd-47a2-9ec9-b4f463aa9198",
                "AllowedEnrollment": "ESC",
                "InsType": "HLTH",
                "Benefits": "90-E $20",
                "DirectBillFlag": "N",
                "EffStartDate": "08/01/2018"
              },
              {
                "isDelete": false,
                "isPlanSelected": true,
                "isReEnroll": true,
                "IsPlanReEnroll": false,
                "isPriorPlanEdit": false,
                "isNotFirstOfMonth": false,
                "ClientPlanID": "3fa6cbf8-df13-4c6a-bfd6-3b109869a5db",
                "AllowedEnrollment": "ESC",
                "InsType": "DEN",
                "Benefits": "PPO 1500; A 100/3000",
                "DirectBillFlag": "N",
                "EffStartDate": "08/01/2018"
              },
              {
                "isDelete": false,
                "isPlanSelected": true,
                "isReEnroll": true,
                "IsPlanReEnroll": false,
                "isPriorPlanEdit": false,
                "isNotFirstOfMonth": false,
                "ClientPlanID": "a106d682-ed70-44eb-a296-13e3d0fe0977",
                "AllowedEnrollment": "ESC",
                "InsType": "VIS",
                "Benefits": "C $10",
                "DirectBillFlag": "N",
                "EffStartDate": "08/01/2018"
              }
            ],
            "RelationTypes": {
              "RelationCode": "SPOUSE"
            },
            "CobraCode": 0,
            "isAutoPopulate": false,
            "isNewMember": false,
            "ssnBind": null,
            "isMasterEffectiveDate": true,
            "masterEffectiveDate": null,
            "SubscriptionMemberVoluntaryPlans": [],
            "isSelected": false
          }
        ],
        "isCustomEffectiveDate": false,
        "ClientID": constants.clientID1,
        "isSubmit": true
      }



}

module.exports = new Subscriber_Details;