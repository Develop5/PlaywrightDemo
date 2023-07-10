Feature: As a user I can interact with text areas

    @dev
    @smoke
    @regression
    Scenario: As a user I can interact and assert on text areas
        Given I am on the "home" page
        And I click the "playground" button
        When I am directed to the "playground" page

        #And I wait "1" seconds
        ##Added because of firefox

        # Instead of value, let's use text, as value changes dynamically
        And the "textarea" should contain the text "Testing Talks Hub has been established to teach the community how to build world class automation frameworks using the latest tooling."
        
        And I fill in the "textarea" input with "Learning to input into textarea"
        Then the "textarea" should contain the value "Learning to input into textarea"