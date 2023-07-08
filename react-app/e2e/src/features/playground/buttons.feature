Feature: As a user I can interact with buttons

@dev
@smoke
@regression
Scenario: As a user I can interact and assert on buttons at index
    Given I am on the "home" page
    And I click the "playground" button
    When I am directed to the "playground" page
    And I click the "1st" "my button" button
    #And the "my button" should contain the text "One"
    And the "1st" "my button" should contain the text "One"
    And I click the "2nd" "my button" button


