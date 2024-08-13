# Bistro Management App

## Project Description

The Bistro Management Application is a comprehensive software solution designed to manage various aspects of a bistro, including food, orders, reservations, dining tables, and users. It features role-based functionality, ensuring that available actions depend on the user's role. With JSON Web Tokens (JWT) for authentication, the app secures sensitive operations, granting permissions based on the user’s role. Customers can log in to place orders and make reservations, while staff members can access and manage data relevant to their tasks.

## Tech Used

- **ReactJS:** For building a dynamic and interactive user interface.
- **Spring:** For a scalable server-side application.
- **PostgreSQL** For optimizing data storage, retrieval, and management.
- **JWT (JSON Web Tokens):** For securing user authentication, ensuring the privacy and security of user data.

## Database Design

![ERD](./BistroManagementApp-EDR.png)
Steps for setting up a local database can be found in our wiki: [Creating and Populating Database Tables](https://github.com/Will-Java-FS/Team3-AndrewTranShi-DiegoBeauperthuy-JoshuaWilliams-PichborithKong/wiki/Creating-and-Populating-Database-Tables)

## User Stories and API Endpoints

### User Management

<details>
<summary>Register</summary>

- **Customer** will be able to register new user with role "Customer" by default.
- Only **Admin** will be able to register new user for **Staff** with role "Staff".

**API Endpoint:** `POST /api/users/register`: Authenticates a customer and provides a JWT.

#### Response

Success:
```json
{
    "userId": 9,
    "username": "Hillard",
    "password": "$2a$10$Pi7f5wHtgTASHDmLQkSmHuuf1z6QoMa1pvabhSx8Z5C8Mpqzns4Lq",
    "role": "customer",
    "createAt": "2024-08-12T20:03:53.468621",
    "updateAt": "2024-08-12T20:03:53.468633"
}
```
Fail:
```json
{
    "error": "Username already exists"
}
```

</details>

<details>
<summary>Login</summary>

- **Customer**, **Staff** and **Admin** will be able to login

**API Endpoint:** `POST /api/users/login`: Authenticates a customer and provides a JWT.

#### Response

Success:
```json
{
    "userId": 9,
    "username": "Hillard",
    "password": "$2a$10$Pi7f5wHtgTASHDmLQkSmHuuf1z6QoMa1pvabhSx8Z5C8Mpqzns4Lq",
    "role": "customer",
    "createAt": "2024-08-12T20:03:53.468621",
    "updateAt": "2024-08-12T20:03:53.468633"
}
```
Fail:
```json
{
    "error": "Username or password incorrect"
}
```

</details>

<details>
<summary>Update User Information</summary>

- **Customer**, **Staff** and **Admin** will be able to update their information such as Username and Password

**API Endpoint:** `PUT /api/users/{userId}`

</details>

<details>
<summary>Delete User</summary>

- **Customer** will be able to delete their User
- Only **Admin** will be able to delete any User

**API Endpoint:** `DELETE /api/users/{userId}`

</details>

### Menu Management

<details>
<summary>View Item In Menu</summary>

- **Customer**, **Staff** and **Admin** will be able to view items in Menu

**API Endpoint:** `GET /api/menus` & `GET /api/menus/{menuId}`

</details>

<details>
<summary>Add new Item to Menu</summary>

- Only **Admin** will be able to add new item to Menu

**API Endpoint:** `POST /api/menus`

</details>

<details>
<summary>Update Item in Menu</summary>

- Only **Admin** will be able to update item information such name, type, price and description

**API Endpoint:** `PUT /api/menus/{menuId}`

</details>

<details>
<summary>Delete Item from Menu</summary>

- Only **Admin** will be able to delete item from Menu

**API Endpoint:** `DELETE /api/menus/{menuId}`

</details>

### Orders Management

<details>
<summary>View Orders</summary>

- **Customer** will be able to view their orders
- **Staff** and **Admin** will be able to view all orders

**API Endpoint:** `GET /api/orders` & `GET /api/orders/{userId}`

</details>

<details>
<summary>Create Orders</summary>

- **Customer**, **Staff** and **Admin** will be able to create orders

**API Endpoint:** `POST /api/orders/{userId}/{menuId}`

</details>

<details>
<summary>Delete Orders</summary>

- **Customer**, **Staff** and **Admin** will be able to delete orders

**API Endpoint:** `DELETE /api/orders/{userId}/{menuId}`
</details>

## Backend Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Will-Java-FS/Team3-AndrewTranShi-DiegoBeauperthuy-JoshuaWilliams-PichborithKong.git
```

### 2. Setup the Environment
- Create database
- Create `.env` file:
```bash
touch .env
```
- Configure Database:
```
DB_USERNAME=your-db-username
DB_PASSWORD=your-db-password
DB_URL=jdbc:postgresql://localhost:5432/your-db-name
```
- Install Dependencies:
```bash
mvn clean install
```

### 3. Run the Application
```bash
mvn spring-boot:run
```
## Frontend Setup

*Details on the frontend setup will be added here.*

## Routes

### Customers

*Details on customer-specific routes will be added here.*

### Staff

*Details on staff-specific routes will be added here.*

## Tests

*Details on testing strategies and coverage will be added here.*

---
