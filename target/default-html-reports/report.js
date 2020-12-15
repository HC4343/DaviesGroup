$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/HomePage.feature");
formatter.feature({
  "name": "HomePage",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@HomePageTest"
    },
    {
      "name": "@TestSuit"
    }
  ]
});
formatter.scenario({
  "name": "User navigates Twitter website from HomePage",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@HomePageTest"
    },
    {
      "name": "@TestSuit"
    },
    {
      "name": "@TwitterTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepDefs.user_is_on_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the Twitter Icon",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageStepDefs.user_clicks_the_Twitter_Icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be on Twitter website",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefs.user_should_be_on_Twitter_website()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User navigates LinkedIn website from HomePage",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@HomePageTest"
    },
    {
      "name": "@TestSuit"
    },
    {
      "name": "@LinkedInTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepDefs.user_is_on_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the LinkedIn Icon",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageStepDefs.user_clicks_the_LinkedIn_Icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be on LinkedIn website",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefs.user_should_be_on_LinkedIn_website()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/LocationsPage.feature");
formatter.feature({
  "name": "Locations Page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LocationsTest"
    },
    {
      "name": "@TestSuit"
    }
  ]
});
formatter.scenario({
  "name": "User captures Stoke Office address from map",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LocationsTest"
    },
    {
      "name": "@TestSuit"
    },
    {
      "name": "@StokeOfficeTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepDefs.user_is_on_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to About Module",
  "keyword": "And "
});
formatter.match({
  "location": "LocationsStepDefs.user_navigates_to_About_Module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Locations Submodule",
  "keyword": "And "
});
formatter.match({
  "location": "LocationsStepDefs.user_clicks_Locations_Submodule()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates Stoke Office Location on map",
  "keyword": "When "
});
formatter.match({
  "location": "LocationsStepDefs.user_navigates_Stoke_Office_Location_on_map()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should capture the Stoke Office address",
  "keyword": "Then "
});
formatter.match({
  "location": "LocationsStepDefs.user_should_capture_the_Stoke_Office_address()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/SolutionsPage.feature");
formatter.feature({
  "name": "Solutions Page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SolutionsTest"
    },
    {
      "name": "@TestSuit"
    }
  ]
});
formatter.background({
  "name": "User Navigates up to Fire Investigation Case Study",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepDefs.user_is_on_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Solutions Module",
  "keyword": "And "
});
formatter.match({
  "location": "SolutionsStepDefs.user_navigates_to_Solutions_Module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User finds Fire Investigation Case Study",
  "keyword": "And "
});
formatter.match({
  "location": "SolutionsStepDefs.user_finds_Fire_Investigation_Case_Study()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Fire Investigation Case Study",
  "keyword": "When "
});
formatter.match({
  "location": "SolutionsStepDefs.user_clicks_on_Fire_Investigation_Case_Study()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User validates the page url",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SolutionsTest"
    },
    {
      "name": "@TestSuit"
    },
    {
      "name": "@CaseStudyTest"
    }
  ]
});
formatter.step({
  "name": "User should be in Fire Investigation Case Study page",
  "keyword": "Then "
});
formatter.match({
  "location": "SolutionsStepDefs.user_should_be_in_Fire_Investigation_Case_Study_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User Navigates up to Fire Investigation Case Study",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepDefs.user_is_on_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Solutions Module",
  "keyword": "And "
});
formatter.match({
  "location": "SolutionsStepDefs.user_navigates_to_Solutions_Module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User finds Fire Investigation Case Study",
  "keyword": "And "
});
formatter.match({
  "location": "SolutionsStepDefs.user_finds_Fire_Investigation_Case_Study()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Fire Investigation Case Study",
  "keyword": "When "
});
formatter.match({
  "location": "SolutionsStepDefs.user_clicks_on_Fire_Investigation_Case_Study()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User captures Result Section in Fire Investigation Case Study page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SolutionsTest"
    },
    {
      "name": "@TestSuit"
    },
    {
      "name": "@ResultSectionTest"
    }
  ]
});
formatter.step({
  "name": "User should capture the Result Section",
  "keyword": "Then "
});
formatter.match({
  "location": "SolutionsStepDefs.user_should_capture_the_Result_Section()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});