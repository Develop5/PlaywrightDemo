Feature: As a user I can interact with cards

    @dev
    @smoke
    @regression
    Scenario: As a user I can interact and assert on cards
        Given I am on the "home" page
        And I click the "playground" button
        When I am directed to the "playground" page
        And the "card header" should contain the text "Word of the Day"
        And the "card main" should contain the text "Automation"
        And the "card type" should contain the text "noun"
