# Backend API Documentation

## User Registration Endpoint

### POST /user/register

This endpoint is used to register a new user in the system.

#### Request

- **URL**: `/user/register`
- **Method**: `POST`
- **Headers**: 
  - `Content-Type: application/json`
- **Body**: JSON object containing the following fields:
  - `email` (string, required): The user's email address. Must be a valid email format.
  - `fullname` (object, required): An object containing:
    - `firstname` (string, required): The user's first name. Must be at least 3 characters long.
    - `lastname` (string, optional): The user's last name. Must be at least 3 characters long if provided.
  - `password` (string, required): The user's password. Must be at least 6 characters long.

#### Response

- **Success Response**:
  - **Code**: `201 Created`
  - **Content**: JSON object containing:
    - `token` (string): The authentication token for the user.
    - `user` (object): The user object containing the registered user's details.

- **Error Responses**:
  - **Code**: `400 Bad Request`
    - **Content**: JSON object containing:
      - `errors` (array): An array of validation error messages if the input data is invalid.
      - `error` (string): Error message if the email already exists or other server-side errors occur.

#### Example Request 

json
{
"email": "user@example.com",
"fullname": {
"firstname": "John",
"lastname": "Doe"
},
"password": "securePassword123"
}

#### Example Success Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "user@example.com"
  }
}
```

#### Example Error Response

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

```json
{
  "error": "Email already exists"
}
```

### Notes

- Ensure that the `Content-Type` header is set to `application/json` when making requests to this endpoint.
- The `token` returned in the success response can be used for authenticating subsequent requests to protected endpoints.
<<<<<<< HEAD

## User Login Endpoint

### POST /user/login

This endpoint authenticates a user and returns an access token.

#### Request

- **URL**: `/login`
- **Method**: `POST`
- **Headers**: 
  - `Content-Type: application/json`
- **Body**: JSON object containing the following fields:
  - `email` (string, required): The user's email address
  - `password` (string, required): The user's password

#### Response

- **Success Response**:
  - **Code**: `200 OK`
  - **Content**: JSON object containing:
    - `token` (string): The authentication token for the user
    - `user` (object): The user object containing the authenticated user's details

- **Error Responses**:
  - **Code**: `400 Bad Request`
    - **Content**: JSON object containing:
      - `errors` (array): An array of validation error messages if the input data is invalid
  - **Code**: `401 Unauthorized`
    - **Content**: JSON object containing:
      - `message` (string): "Invalid Email or Password"

#### Example Request

```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

#### Example Success Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "user@example.com"
  }
}
```

#### Example Error Response

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

```json
{
  "message": "Invalid Email or Password"
}
```

### Notes

- Ensure that the `Content-Type` header is set to `application/json` when making requests to this endpoint
- The returned `token` should be included in the Authorization header for subsequent authenticated requests
=======
>>>>>>> d609aeda5604f451f8502f903a92acd0cceb7ded
