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
});