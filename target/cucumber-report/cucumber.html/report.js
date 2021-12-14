$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/computers.feature");
formatter.feature({
  "line": 1,
  "name": "Computers page test",
  "description": "As a user I should navigate to Computers page successfully",
  "id": "computers-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3763079900,
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
      "name": "@Smoke"
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
  "duration": 1126431400,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iShouldNavigateToComputersPageSuccessfully()"
});
formatter.result({
  "duration": 21762700,
  "status": "passed"
});
formatter.after({
  "duration": 589666500,
  "status": "passed"
});
formatter.before({
  "duration": 2706106400,
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
      "name": "@Sanity"
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
  "duration": 1151126200,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iShouldNavigateToComputersPageSuccessfully()"
});
formatter.result({
  "duration": 19106600,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 1000540900,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iShouldNavigateToDesktopPageSuccessfully()"
});
formatter.result({
  "duration": 22231500,
  "status": "passed"
});
formatter.after({
  "duration": 591812100,
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
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2633340500,
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
  "duration": 1037858000,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 420957800,
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
  "duration": 1008750100,
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
  "duration": 49925200,
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
  "duration": 45182000,
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
  "duration": 34467000,
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
  "duration": 35187600,
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
  "duration": 35457200,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 33636600,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.productIsAddedToCartSuccessfully()"
});
formatter.result({
  "duration": 950931900,
  "status": "passed"
});
formatter.after({
  "duration": 576665000,
  "status": "passed"
});
});