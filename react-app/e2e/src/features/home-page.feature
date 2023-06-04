Feature: As a user I expect to be able to navigate to home page

    @dev
    @smoke
    @regression
    Scenario: As a user I expect to be able to see contacts
        Given I am on the "home" page
        Then the "contacts header" should contain the text "Contactssss"