Feature: As an API I can update posts

    @dev
    Scenario: As an API I can update a specific post
        Given I update the 1st "posts" with an "updated post"
        And the response was successful
        Then the response status code is 200
        And the response json contains the attributes:
            | id     | 1                               |
            #| userId | 1                               |
            #| title  | Replacement post                |
            #| body   | This is completely updated post |

