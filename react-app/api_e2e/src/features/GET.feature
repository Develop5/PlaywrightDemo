Feature: As an API I can retrieve posts


    @smoke
    @regression
    Scenario: As an API I can retrieve all the posts
        Given I retrieve "posts"
        And the response was successful
        Then the response status code is 200


    @dev
    Scenario: As an API I can retrieve a simple post
        Given I retrieve the 1st "posts"
