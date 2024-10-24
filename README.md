Backend Development for Core Entities

Objective
This project demonstrates the development of a backend application using NestJS and MongoDB. The task involves designing and implementing the core entities—Product, Vendor, User, and Cart—along with their relationships. A modular approach is used to structure the code, ensuring scalability and maintainability.

Project Overview
The objective of this task is to:

Design a database schema with appropriate relationships for Product, Vendor, User, and Cart.
Create a NestJS application using Mongoose for database integration.
Develop REST endpoints to interact with the entities.
Propose an authentication solution (Optional).
Database Schema Design
Core Entities and Relationships
Product:

product_id: Unique identifier
name: Product name
description: Product description
price: Product price
stock: Available stock
Relationship: Linked to a Vendor
Vendor:

vendor_id: Unique identifier
name: Vendor name
email: Vendor contact email
Relationship: Manages multiple Products
User:

user_id: Unique identifier
username: User’s name
Relationship: Can own multiple Carts
Cart:

cart_id: Unique identifier
status: Cart status (active/checked-out)
Relationship: Contains multiple Products
API Endpoints
User Endpoints
POST /users: Create a new user
GET /users/
: Retrieve a user by ID
Product Endpoints
POST /products: Add a new product
GET /products/
: Retrieve product details by ID
Vendor Endpoints
POST /vendors: Register a new vendor
GET /vendors/
: Retrieve vendor details by ID
Cart Endpoints
POST /carts: Create a new cart
GET /carts/
: Retrieve cart details by ID
Installation
Step 1: Clone the Repository
bash
Copy code
git clone <repository-url>
cd nest-assessment
Step 2: Install Dependencies
bash
Copy code
npm install
Step 3: Set up MongoDB
Ensure MongoDB is installed and running:

bash
Copy code
mongod --dbpath /data/db
Step 4: Configure Environment Variables
Create a .env file with the following content:

bash
Copy code
MONGODB_URI=mongodb://localhost:27017/nest-assessment
PORT=3000
Step 5: Start the Application
bash
Copy code
npm run start:dev
Sample Requests
Create Product
bash
Copy code
POST /products
Content-Type: application/json
json
Copy code
{
  "name": "Laptop",
  "description": "High-end gaming laptop",
  "price": 1200,
  "stock": 5,
  "vendor": "VENDOR_ID"
}
Create Cart
bash
Copy code
POST /carts
Content-Type: application/json
json
Copy code
{
  "user": "USER_ID",
  "status": "active",
  "items": [
    {
      "product": "PRODUCT_ID",
      "quantity": 3
    }
  ]
}
Authentication Proposal
JWT Authentication:
Users and vendors receive a JWT token upon login.
Token will be required to access protected routes (e.g., cart checkout, product management).
Role-Based Access Control (RBAC):
Vendors can only manage their own products.
Admin roles can access all entities for management.
Troubleshooting
MongoDB Connection Error:
Ensure MongoDB is running and check your .env configuration.

Port Conflict:
If port 3001 is in use, change the PORT value in .env.

Invalid ObjectId Error:
Ensure all ObjectIds in your requests are valid MongoDB ObjectIds.

How to Run Tests
bash
Copy code
# Run unit tests
npm run test

# Run e2e tests
npm run test:e2e

# Check code coverage
npm run test:cov
Future Improvements
Add Authentication: Implement JWT and RBAC to secure endpoints.
Swagger Integration: Add API documentation using Swagger.
Add Pagination and Filtering: For products and vendors.
Acknowledgments
NestJS Documentation
MongoDB Documentation
License
This project is licensed under the MIT License.

This README covers all the requirements of your assignment, with instructions, structure, API endpoints, and setup steps. You can further customize it as needed