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
## User API Endpoints

### Get User Profile
- **Route:** `/users/profile`
- **Method:** `GET`
- **Authentication:** Required (JWT Token)
- **Description:** Retrieves the profile information of the authenticated user
- **Response:**
  ```json
  {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "_id": "string"
  }
  ```

### Logout User
- **Route:** `/users/logout`
- **Method:** `GET`
- **Authentication:** Required (JWT Token)
- **Description:** Logs out the user by clearing the authentication token and blacklisting it in blacklist model 
- **Authentication Methods:**
  - Cookie: `token`
  - Authorization Header: `Bearer <token>`
- **Response:**
  ```json
  {
    "message": "Logged out"
  }
  ```

**Note:** For authenticated routes, include the JWT token either as:
- A cookie named `token`
- Authorization header: `Authorization: Bearer <token>`

## Captain API Endpoints

### Register Captain
- **Route:** `/captain/register`
- **Method:** `POST`
- **Authentication:** Not Required
- **Headers:** 
  - `Content-Type: application/json`
- **Body:**
  ```json
  {
    "email": "string",
    "password": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "vehicle": {
      "type": "car|motorcycle|rickshaw",
      "color": "string",
      "plate": "string",
      "model": "string",
      "capacity": "number"
    }
  }
  ```
- **Success Response:**
  ```json
  {
    "success": true,
    "message": "Captain registered successfully",
    "token": "string"
  }
  ```
- **Error Response:**
  ```json
  {
    "success": false,
    "message": "email already registered"
  }
  ```

### Login Captain
- **Route:** `/captain/login`
- **Method:** `POST`
- **Authentication:** Not Required
- **Headers:** 
  - `Content-Type: application/json`
- **Body:**
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Success Response:**
  ```json
  {
    "success": true,
    "message": "Login successful",
    "token": "string"
  }
  ```
- **Error Response:**
  ```json
  {
    "message": "Invalid credentials"
  }
  ```

### Get Captain Profile
- **Route:** `/captain/profile`
- **Method:** `GET`
- **Authentication:** Required (JWT Token)
- **Response:**
  ```json
  {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "status": "active|inactive",
    "vehicle": {
      "type": "string",
      "color": "string",
      "plate": "string",
      "model": "string",
      "capacity": "number"
    },
    "location": {
      "lat": "number",
      "lng": "number"
    }
  }
  ```


### Logout Captain
- **Route:** `/captain/logout`
- **Method:** `GET`
- **Authentication:** Required (JWT Token)
- **Description:** Logs out the captain by clearing the authentication token and blacklisting it
- **Authentication Methods:**
  - Cookie: `token`
  - Authorization Header: `Bearer <token>`
- **Success Response:**
  ```json
  {
    "success": true,
    "message": "Logged out successfully"
  }
  ```
- **Error Response:**
  ```json
  {
    "success": false,
    "message": "Error in logging out"
  }
  ```

**Note:** For authenticated routes, include the JWT token either as:
- A cookie named `token`
- Authorization header: `Authorization: Bearer <token>`
