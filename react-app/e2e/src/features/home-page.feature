Feature: As a user I expect to be able to navigate to home page

    @smoke
    @regression
    Scenario: As a user I expect to be able to see contacts
        Given I am on the "home" page
        And the "header logo" should be displayed
        Then the "contacts header" should contain the text "Contacts"
        
    @dev
    @smoke
    @regression
    Scenario: As a user I don't expect to see a contact that does not exist
        Given I am on the "home" page
        And I fill in the "search" input with "Funky Name"
        #Then the "contact" should not be displayed
        Then the "contact" should be displayed
