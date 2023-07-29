Feature: As a user I can intercept a REST api and mock the response

    @smoke
    @regression
    Scenario: As a user I expect to see the REST users
        Given I am on the "home" page
        And I click the "playground" button
        When I am directed to the "playground" page
        Then the "1st" "full name" should contain the text "Leanne Graham"


    @dev
    @smoke
    @regression
    Scenario: As a user I can mock no users existing
        Given I am on the "home" page 
        And the "api" endpoint for "users" is mocked with "no users"
        And I click the "playground" button
        When I am directed to the "playground" page
        Then the "full name" should not be displayed
        And I wait "20" seconds