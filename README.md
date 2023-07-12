# Book Inventory Management API

This project is an API for managing a book inventory. It allows users to perform CRUD (Create, Read, Update, Delete) operations on book data using Node.js, Express.js, and PostgreSQL.

## Installation

To test the API, follow these steps:

1. Download the code as a zip file and extract it to a folder of your choice.
2. Open a terminal or command prompt and navigate to the project folder.
3. Run the following command to install the required dependencies:
   ```
   npm install
   ```
4. Make sure you have PostgreSQL installed. You will also find it useful to have the PostgreSQL Explorer extension installed in VSCode.
5. Configure the PostgreSQL database connection settings in the `.env` file.
6. Run the following command to start the server:
   ```
   npm start
   ```
7. The API should now be running locally on `http://localhost:4000`.

## Features

- **Retrieve All Books**: Get a list of all books from the database using the GET operation.
- **Retrieve Specific Book**: Retrieve a specific book by ID from the database.
- **Add New Book**: Add a new book to the database using the POST operation.
- **Update Book**: Update a book by ID in the database using the PATCH operation.
- **Delete Book**: Delete a book by ID from the database using the DELETE operation.
- **SQL Queries**: Utilizes SQL queries to interact with the PostgreSQL database and perform the necessary CRUD operations.

## Testing

Postman was used to test the API endpoints and ensure that all operations were successful. You can use Postman or any other API testing tool to send requests to the API endpoints and verify the functionality.
