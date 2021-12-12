$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Register.feature");
formatter.feature({
  "line": 1,
  "name": "Register Test",
  "description": "As a user I should register successfully",
  "id": "register-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4128574100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 11,
  "name": "verify That First Name Last Name Email Password And Confirm Password Fields Are Mandatory",
  "description": "",
  "id": "register-test;verify-that-first-name-last-name-email-password-and-confirm-password-fields-are-mandatory",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Sanity,"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I get error message \u0027First name is required\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I get error message \u0027Last name is required\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I get error message \u0027Email is required\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I get error message \u0027Password is required\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I get error message \u0027Confirm Password is required\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I am not able to register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1225640100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 52917200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iGetErrorMessageFirstNameIsRequired()"
});
formatter.result({
  "duration": 32197500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iGetErrorMessageLastNameIsRequired()"
});
formatter.result({
  "duration": 24997700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iGetErrorMessageEmailIsRequired()"
});
formatter.result({
  "duration": 22942000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iGetErrorMessagePasswordIsRequired()"
});
formatter.result({
  "duration": 21822200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iGetErrorMessageConfirmPasswordIsRequired()"
});
formatter.result({
  "duration": 22690500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iAmNotAbleToRegisterSuccessfully()"
});
formatter.result({
  "duration": 18400,
  "status": "passed"
});
formatter.after({
  "duration": 580253800,
  "status": "passed"
});
formatter.before({
  "duration": 2574656300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 22,
  "name": "Verify that user should create account successfully",
  "description": "",
  "id": "register-test;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I click on Gender \"Male\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter First Name \"Harry\" into \u0027First name\u0027 field",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter Last Name \"Potter\" into \u0027Last name\u0027 field",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select day \"1\" for \u0027Date of birth\u0027 field",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select month \"January\" for \u0027Date of birth\u0027 field",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select year \"1980\" for \u0027Date of birth\u0027 field",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter email \"harry.potter21@gmail.com\" into \u0027Email\u0027 field",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter password \"Harry123\" in \u0027Password\u0027 field",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter confirm password \"Harry123\" into \u0027Confirm password\u0027 field",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I am able to register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1194019200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 19
    }
  ],
  "location": "RegisterTest.iClickOnGender(String)"
});
formatter.result({
  "duration": 46312700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry",
      "offset": 20
    }
  ],
  "location": "RegisterTest.iEnterFirstNameIntoFirstNameField(String)"
});
formatter.result({
  "duration": 55239400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Potter",
      "offset": 19
    }
  ],
  "location": "RegisterTest.iEnterLastNameIntoLastNameField(String)"
});
formatter.result({
  "duration": 50216400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 14
    }
  ],
  "location": "RegisterTest.iSelectDayForDateOfBirthField(String)"
});
formatter.result({
  "duration": 65605800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "January",
      "offset": 16
    }
  ],
  "location": "RegisterTest.iSelectMonthForDateOfBirthField(String)"
});
formatter.result({
  "duration": 57982200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1980",
      "offset": 15
    }
  ],
  "location": "RegisterTest.iSelectYearForDateOfBirthField(String)"
});
formatter.result({
  "duration": 63640800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "harry.potter21@gmail.com",
      "offset": 15
    }
  ],
  "location": "RegisterTest.iEnterEmailIntoEmailField(String)"
});
formatter.result({
  "duration": 49881600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry123",
      "offset": 18
    }
  ],
  "location": "RegisterTest.iEnterPasswordInPasswordField(String)"
});
formatter.result({
  "duration": 49126600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry123",
      "offset": 26
    }
  ],
  "location": "RegisterTest.iEnterConfirmPasswordIntoConfirmPasswordField(String)"
});
formatter.result({
  "duration": 44998200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 21259637200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iAmAbleToRegisterSuccessfully()"
});
formatter.result({
  "duration": 20493700,
  "status": "passed"
});
formatter.after({
  "duration": 584074000,
  "status": "passed"
});
formatter.uri("computers.feature");
formatter.feature({
  "line": 1,
  "name": "Computers page test",
  "description": "As a user I should navigate to Computers page successfully",
  "id": "computers-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2590965800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 7,
  "name": "Verify User Should Navigate To Computer Page Successfully",
  "description": "",
  "id": "computers-page-test;verify-user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke,"
    },
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click on Computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to Computers page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputersSteps.iClickOnComputersTab()"
});
formatter.result({
  "duration": 1055331100,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iShouldNavigateToComputersPageSuccessfully()"
});
formatter.result({
  "duration": 28408600,
  "status": "passed"
});
formatter.after({
  "duration": 591021600,
  "status": "passed"
});
formatter.before({
  "duration": 2613248700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 12,
  "name": "Verify user should navigate to Desktop page successfully",
  "description": "",
  "id": "computers-page-test;verify-user-should-navigate-to-desktop-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Sanity,"
    },
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I click on Computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should navigate to Computers page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should navigate to Desktop page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputersSteps.iClickOnComputersTab()"
});
formatter.result({
  "duration": 1104062900,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iShouldNavigateToComputersPageSuccessfully()"
});
formatter.result({
  "duration": 39021600,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 20437368000,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iShouldNavigateToDesktopPageSuccessfully()"
});
formatter.result({
  "duration": 16941800,
  "status": "passed"
});
formatter.after({
  "duration": 582037500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Verify user should build their own computer and add them to cart successfully",
  "description": "",
  "id": "computers-page-test;verify-user-should-build-their-own-computer-and-add-them-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I click on Computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on Desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select \"\u003cProcessor\u003e\" from Processor dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select \"\u003cRam\u003e\" from Ram dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select \"\u003cHDD\u003e\" from HDD options",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select \"\u003cOperating System\u003e\" from OS options",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select \"\u003cSoftware\u003e\" from Software options",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on Add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Product is added to cart successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "computers-page-test;verify-user-should-build-their-own-computer-and-add-them-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "Processor",
        "Ram",
        "HDD",
        "Operating System",
        "Software"
      ],
      "line": 32,
      "id": "computers-page-test;verify-user-should-build-their-own-computer-and-add-them-to-cart-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 33,
      "id": "computers-page-test;verify-user-should-build-their-own-computer-and-add-them-to-cart-successfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 34,
      "id": "computers-page-test;verify-user-should-build-their-own-computer-and-add-them-to-cart-successfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 35,
      "id": "computers-page-test;verify-user-should-build-their-own-computer-and-add-them-to-cart-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2584776800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 33,
  "name": "Verify user should build their own computer and add them to cart successfully",
  "description": "",
  "id": "computers-page-test;verify-user-should-build-their-own-computer-and-add-them-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I click on Computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on Desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select \"2.2 GHz Intel Pentium Dual-Core E2200\" from Processor dropdown",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select \"2 GB\" from Ram dropdown",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select \"320 GB\" from HDD options",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select \"Vista Home [+$50.00]\" from OS options",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select \"Microsoft Office [+$50.00]\" from Software options",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on Add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Product is added to cart successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputersSteps.iClickOnComputersTab()"
});
formatter.result({
  "duration": 1042022400,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 20994786900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 18
    }
  ],
  "location": "ComputersSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 1404722300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 10
    }
  ],
  "location": "ComputersSteps.iSelectFromProcessorDropdown(String)"
});
formatter.result({
  "duration": 64700500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 10
    }
  ],
  "location": "ComputersSteps.iSelectFromRamDropdown(String)"
});
formatter.result({
  "duration": 66378700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 10
    }
  ],
  "location": "ComputersSteps.iSelectFromHDDOptions(String)"
});
formatter.result({
  "duration": 42413000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 10
    }
  ],
  "location": "ComputersSteps.iSelectFromOSOptions(String)"
});
formatter.result({
  "duration": 36926100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 10
    }
  ],
  "location": "ComputersSteps.iSelectFromSoftwareOptions(String)"
});
formatter.result({
  "duration": 35171700,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 40831800,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.productIsAddedToCartSuccessfully()"
});
formatter.result({
  "duration": 823665600,
  "status": "passed"
});
formatter.after({
  "duration": 595065300,
  "status": "passed"
});
formatter.before({
  "duration": 2606340400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 34,
  "name": "Verify user should build their own computer and add them to cart successfully",
  "description": "",
  "id": "computers-page-test;verify-user-should-build-their-own-computer-and-add-them-to-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I click on Computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on Desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\" from Processor dropdown",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select \"4GB [+$20.00]\" from Ram dropdown",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select \"400 GB [+$100.00]\" from HDD options",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select \"Vista Premium [+$60.00]\" from OS options",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select \"Acrobat Reader [+$10.00]\" from Software options",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on Add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Product is added to cart successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputersSteps.iClickOnComputersTab()"
});
formatter.result({
  "duration": 453035900,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 21061062300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 18
    }
  ],
  "location": "ComputersSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 724229000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 10
    }
  ],
  "location": "ComputersSteps.iSelectFromProcessorDropdown(String)"
});
formatter.result({
  "duration": 43383300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 10
    }
  ],
  "location": "ComputersSteps.iSelectFromRamDropdown(String)"
});
formatter.result({
  "duration": 53955700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 10
    }
  ],
  "location": "ComputersSteps.iSelectFromHDDOptions(String)"
});
formatter.result({
  "duration": 45073500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 10
    }
  ],
  "location": "ComputersSteps.iSelectFromOSOptions(String)"
});
formatter.result({
  "duration": 41124200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 10
    }
  ],
  "location": "ComputersSteps.iSelectFromSoftwareOptions(String)"
});
formatter.result({
  "duration": 34602100,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 37274800,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.productIsAddedToCartSuccessfully()"
});
formatter.result({
  "duration": 922624700,
  "status": "passed"
});
formatter.after({
  "duration": 594118100,
  "status": "passed"
});
formatter.before({
  "duration": 2590566100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 35,
  "name": "Verify user should build their own computer and add them to cart successfully",
  "description": "",
  "id": "computers-page-test;verify-user-should-build-their-own-computer-and-add-them-to-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I click on Computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on Desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\" from Processor dropdown",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select \"8GB [+$60.00]\" from Ram dropdown",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select \"320 GB\" from HDD options",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select \"Vista Home [+$50.00]\" from OS options",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select \"Total Commander [+$5.00]\" from Software options",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on Add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Product is added to cart successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputersSteps.iClickOnComputersTab()"
});
formatter.result({
  "duration": 443047200,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 20478812200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 18
    }
  ],
  "location": "ComputersSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 1380707300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 10
    }
  ],
  "location": "ComputersSteps.iSelectFromProcessorDropdown(String)"
});
formatter.result({
  "duration": 37797300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 10
    }
  ],
  "location": "ComputersSteps.iSelectFromRamDropdown(String)"
});
formatter.result({
  "duration": 59670200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 10
    }
  ],
  "location": "ComputersSteps.iSelectFromHDDOptions(String)"
});
formatter.result({
  "duration": 42311400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 10
    }
  ],
  "location": "ComputersSteps.iSelectFromOSOptions(String)"
});
formatter.result({
  "duration": 47310000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 10
    }
  ],
  "location": "ComputersSteps.iSelectFromSoftwareOptions(String)"
});
formatter.result({
  "duration": 34504500,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 39340400,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.productIsAddedToCartSuccessfully()"
});
formatter.result({
  "duration": 876280700,
  "status": "passed"
});
formatter.after({
  "duration": 572013400,
  "status": "passed"
});
});