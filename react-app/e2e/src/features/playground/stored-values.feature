Feature: As a user I can interact with stored values

    @dev
    @smoke
    @regression
    Scenario: As a user I can interact and assert on stored values
        Given I am on the "home" page
        And I click the "playground" button
        When I am directed to the "playground" page
        
        And I retrieve the "first value" text and store it as "first value" in global variables
        # First value leveraging Cucumber world
        # Our global variable is segregated to the specific scenario context
        # => If we have many scenarios running in parallel, they will no issues at all 

        And the "second value" should equal the "first value" stored in global variables
        # Because this is what is in the Playground page

        And the "fourth value" should not equal the "first value" stored in global variables
        And the "fourth value" should contain the "first value" stored in global variables
        And the "fifth value" should contain the "first value" stored in global variables
        And the "third value" should not contain the "first value" stored in global variables

