Feature: As a user I can interact with input validation

  @smoke
  @regression
  Scenario: As a user I can interact and assert on input validation
    Given I am on the "home" page
    And I click the "playground" button
    When I am directed to the "playground" page
    And the "outlined error" should contain the text "Error"
    And the "outlined error" should not contain the text "Errors"
    And the "outlined error text" should contain the text "Incorrect entry."