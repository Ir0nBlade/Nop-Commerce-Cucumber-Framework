Feature: Login Test
  As a user I want to login into Nop Commerce Website

  Background: I am on homepage

#  @Smoke
  Scenario: User should navigate to login page successfully
    When    I click on login link
    Then    I should navigate to login page successfully

  @Smoke
  Scenario: User should login successfully with valid credentials
    When  I click on login link
    And   I enter email "prime@gamil.com"
    And   I enter password "abc123"
    And   I click on login button
    Then  I should login successfully


  Scenario Outline: User should not login with invalid credentials
    When  I click on login link
    And   I enter email "<email>"
    And   I enter password "<password>"
    And   I click on login button
    Then  I should see the error message"<errorMessage>"
    Examples:
      | email              | password | errorMessage                                                                                |
      | abcd123@gmail.com  | xyz123   | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |
      | xyz123@gmail.com   | abc123   | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |
      | adfafasd@gmail.com | xyz123   | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |

  @Smoke
  Scenario: User should logout successfully
    When  I click on login link
    And   I enter email "prime@gmail.com"
    And   I enter password "abc123"
    And   I click on login button
    And   I click on logout link
    Then  I logout successfully

