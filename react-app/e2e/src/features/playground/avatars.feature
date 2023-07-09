Feature: As a user I can interact with avatars

    @dev
    @smoke
    @regression
    Scenario: As a user I can interact and assert on avatars
        Given I am on the "home" page
        And I click the "playground" button
        When I am directed to the "playground" page
        And the "1st" "avatar" should be displayed
        And the "2nd" "avatar" should be displayed