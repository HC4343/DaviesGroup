@HomePageTest @TestSuit
Feature: HomePage

  @TwitterTest
  Scenario: User navigates Twitter website from HomePage
    Given User is on Homepage
    When User clicks the Twitter Icon
    Then User should be on Twitter website

  @LinkedInTest
  Scenario: User navigates LinkedIn website from HomePage
    Given User is on Homepage
    When User clicks the LinkedIn Icon
    Then User should be on LinkedIn website
