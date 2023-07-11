Feature: As a user I can interact with login forms

    @dev
    @smoke
    @regression
    Scenario: As a user I can populate login details leveraging environment variables
        Given I am on the "home" page
        And I click the "playground" button
        When I am directed to the "playground" page
        And I fill in the "email" input with "admin@testingtalkhub.com.au"
        And I fill in the "password" input with "Password1234"
        Then the "email" should contain the value "admin@testingtalkhub.com.au"
        And the "password" should contain the value "Password1234"