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
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cdiv class\u003d\"location__marker bg--begonia position-absolute js-map-marker js-map-marker0 \" id\u003d\"marker0_12\" data-index\u003d\"0_12\" onclick\u003d\"removePath()\" style\u003d\"left: 71.4628%; top:62.3881%\"\u003e...\u003c/div\u003e is not clickable at point (894, 834). Other element would receive the click: \u003cdiv id\u003d\"CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelectionWrapper\" style\u003d\"display: block;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d89.0.4389.90)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u002700141\u0027, ip: \u0027fe80:0:0:0:4f8:19d:501f:deb7%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u002711.0.8\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.90, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: /var/folders/nt/vr6rn5t908z...}, goog:chromeOptions: {debuggerAddress: localhost:60422}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: eb2bc9cad894223b4b6661f3595e0b63\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\n\tat com.davies.step_definitions.LocationsStepDefs.user_navigates_Stoke_Office_Location_on_map(LocationsStepDefs.java:46)\n\tat ✽.User navigates Stoke Office Location on map(file:src/test/resources/features/LocationsPage.feature:9)\n",
  "status": "failed"
});
formatter.step({
  "name": "User should capture the Stoke Office address",
  "keyword": "Then "
});
formatter.match({
  "location": "LocationsStepDefs.user_should_capture_the_Stoke_Office_address()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
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
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cdiv class\u003d\"cta-button__circle view-all__circle\"\u003e...\u003c/div\u003e is not clickable at point (820, 793). Other element would receive the click: \u003cdiv id\u003d\"CybotCookiebotDialogBodyContentText\" lang\u003d\"en\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d89.0.4389.90)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u002700141\u0027, ip: \u0027fe80:0:0:0:4f8:19d:501f:deb7%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u002711.0.8\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.90, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: /var/folders/nt/vr6rn5t908z...}, goog:chromeOptions: {debuggerAddress: localhost:60452}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e990435cb9de42b37ba9fdd58b4c70c6\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\n\tat com.davies.step_definitions.SolutionsStepDefs.user_finds_Fire_Investigation_Case_Study(SolutionsStepDefs.java:32)\n\tat ✽.User finds Fire Investigation Case Study(file:src/test/resources/features/SolutionsPage.feature:7)\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks on Fire Investigation Case Study",
  "keyword": "When "
});
formatter.match({
  "location": "SolutionsStepDefs.user_clicks_on_Fire_Investigation_Case_Study()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", null);
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
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cdiv class\u003d\"cta-button__circle view-all__circle\"\u003e...\u003c/div\u003e is not clickable at point (820, 793). Other element would receive the click: \u003cdiv id\u003d\"CybotCookiebotDialogBodyContentText\" lang\u003d\"en\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d89.0.4389.90)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u002700141\u0027, ip: \u0027fe80:0:0:0:4f8:19d:501f:deb7%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u002711.0.8\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.90, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: /var/folders/nt/vr6rn5t908z...}, goog:chromeOptions: {debuggerAddress: localhost:60482}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 52cddaede08bbcf73d1b87854bacdb6f\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\n\tat com.davies.step_definitions.SolutionsStepDefs.user_finds_Fire_Investigation_Case_Study(SolutionsStepDefs.java:32)\n\tat ✽.User finds Fire Investigation Case Study(file:src/test/resources/features/SolutionsPage.feature:7)\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks on Fire Investigation Case Study",
  "keyword": "When "
});
formatter.match({
  "location": "SolutionsStepDefs.user_clicks_on_Fire_Investigation_Case_Study()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
});