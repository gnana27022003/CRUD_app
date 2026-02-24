# Client Management CRUD API

This project implements a RESTful CRUD API for managing clients using Node.js, Express.js, and MongoDB. The API allows creating, retrieving, updating, deleting, and filtering client records.

The application runs locally at:

http://localhost:3006

------------------------------------------------------------

## Technology Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

------------------------------------------------------------

## Base URL

http://localhost:3006/api/clients

------------------------------------------------------------

## API Endpoints

------------------------------------------------------------

1. Create Client

Method:
POST /api/clients

Description:
Creates a new client and stores it in the MongoDB database.

Request Body (JSON):

{
  "name": "shyam",
  "company": "Google",
  "phone": 1232797460,
  "email": "sham@gmail.com",
  "status": "inactive"
}

Required Fields:
- name
- company
- phone
- email
- status (active | inactive)

Success Response:
- 201 Created
- Returns the newly created client object including the generated _id.

Failure Cases:
- 400 Bad Request (validation errors)

------------------------------------------------------------

2. Get All Clients

Method:
GET /api/clients

Description:
Fetches all clients stored in the database.

Success Response:
- 200 OK
- Returns an array of client objects.

Failure Cases:
- 500 Internal Server Error (database or server failure)

------------------------------------------------------------

3. Update Client

Method:
PUT /api/clients/:id

Description:
Updates an existing client using its MongoDB ObjectId. Supports partial updates.

Path Parameter:
- id (MongoDB ObjectId)

Example Request Body:

{
  "name": "UGS"
}

Success Response:
- 200 OK
- Returns the updated client object.

Failure Cases:
- 404 Not Found (client does not exist)
- 400 Bad Request (invalid id or invalid data)

------------------------------------------------------------

4. Delete Client

Method:
DELETE /api/clients/:id

Description:
Deletes a client by its MongoDB ObjectId.

Path Parameter:
- id (MongoDB ObjectId)

Success Response:
- 200 OK or 204 No Content
- Returns confirmation message or deleted record.

Failure Cases:
- 404 Not Found (client not found)
- 400 Bad Request (invalid id)

------------------------------------------------------------

5. Filter Clients Using Query Parameters

Method:
GET /api/clients?status=active

Description:
Fetches clients filtered by query parameters.

Query Parameters:
- status (active | inactive)

Example:
GET /api/clients?status=inactive

Success Response:
- 200 OK
- Returns an array of matching client objects.

Failure Cases:
- 400 Bad Request (invalid query value, if validation is implemented)

------------------------------------------------------------

## HTTP Status Codes Used

200  OK
201  Created
204  No Content
400  Bad Request
404  Not Found
500  Internal Server Error

------------------------------------------------------------

## Running the Project Locally

1. Clone the repository:
   git clone <repository-url>

2. Install dependencies:
   npm install

3. Start the server:
   npm start

4. Access the API at:
   http://localhost:3006

------------------------------------------------------------

## Purpose

This project is built for learning and demonstrating REST API development using Node.js, Express, and MongoDB.