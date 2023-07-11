Feature: As a user I can interact with login forms

    @dev
    @smoke
    @regression
    Scenario: As a user I can populate login details leveraging environment variables - localhost
        Given I am on the "home" page
        And I click the "playground" button
        When I am directed to the "playground" page
        #And I fill in the "email" input with "admin@testingtalkhub.com.au"
        #And I fill in the "password" input with "Password1234"
        #Then the "email" should contain the value "admin@testingtalkhub.com.au"
        #And the "password" should contain the value "Password1234"

        # Now we need to trigger to input form step
        # When the trigger is present it will tell the automation framework that
        # we wish to leverage a same name for environment variable specific to an
        # environment to populate the email and password

        And I fill in the "email" input with "$.TEST_EMAIL"
        And I fill in the "password" input with "$.TEST_PASSWORD"
        Then the "email" should contain the value "admin@testingtalkhub.com.au"
        And the "password" should contain the value "Password1234"


