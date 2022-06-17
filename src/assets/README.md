## Create a user login form

Create a form with two text fields:

- Username: A simple string value. Required
- Password: Must have a minimum length of 6 characters. Required

`users-response.json` represents a JSON response of users. Use this response to determine if the user who is submitting the login form is already a registered user. (They are considered an existing user if a user in `users-response.json` contains the same username as the login form)

If they are NOT an existing user, display a message of: "No user with username '<provided username>' was found."

## List a user's todos

If they are an existing user, consider the user is logged in.

In this case:

- The login form should no longer display.
- The user's real name should appear on the page.
- A list of all todos that are owned by the user should show in a list. `todos-response.json` contains an array of todos with a `userId` property that corresponds to a user's ID.

## Toggle completed Todos

Create a checkbox with a label of "Show completed Todos", that when checked, only shows todos that have a completed property of `true`.
