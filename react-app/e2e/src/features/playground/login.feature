Feature: As a user I can interact with login forms

    @dev
    @smoke
    @regression
    Scenario Outline: As a user I can populate login details leveraging environment variables
        Given I am on the "home" page
        And I click the "playground" button
        When I am directed to the "playground" page
        And I fill in the "email" input with "$.TEST_EMAIL"
        And I fill in the "password" input with "$.TEST_PASSWORD"
        Then the "email" should contain the value "admin@testingtalskhub.com.au"
        And the "password" should contain the value "<password>"
        Examples:
            | password     |
            | Password1234 |


