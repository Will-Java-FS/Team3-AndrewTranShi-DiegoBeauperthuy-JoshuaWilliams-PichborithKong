## User Stories and API Endpoints

### Customer Operations

#### User Story: Place Orders and Reservations
- **As a User**, I can view the menu.
- **As a User**, I can order from the menu.
- **As a User**, I can edit my order.
- **As a User**, I can reserve/cancel a table.

**API Endpoints:**
- `GET /orders`: Retrieve all current orders.
- `POST /orders`: Place a new order.
- `GET /reservations`: Retrieve all current reservations.
- `POST /reservations`: Make a new reservation.

### Staff Management

#### User Story: Manage Operational Data
- **As a** staff member,
- **I want** to access and manage data related to food, orders, reservations, and dining tables,
- **So that** I can efficiently handle customer requests and ensure smooth operations.

**API Endpoints:**
- `CRUD /menu`: Manage menu items (Create, Read, Update, Delete).
- `CRUD /orders`: Manage orders.
- `CRUD /reservations`: Manage reservations.
- `CRUD /tables`: Manage dining tables.

### Administrator Controls

#### User Story: Control User Roles and Permissions
- **As an admin**, I can view orders.
- **As an admin**, I can view reservations
- **As an admin**, I can assign a dinning table to a client
- **As an admin**, I can cancel a reservation


**API Endpoints:**
- `CRUD /users`: Manage user accounts and roles.
- `POST /login`: Handle user authentication and token issuance.

### Menu Management

#### User Story: Menu Table Creation and Management
- **As an** administrator,
- **I want** to add, update, and delete food items on the menu,
- **So that** the restaurant can update its offerings in real-time and manage inventory effectively.

**API Endpoints:**
- `POST /menu`: Add a new food item to the menu.
- `GET /menu`: Retrieve all menu items.
- `PUT /menu/{id}`: Update a specific food item.
- `DELETE /menu/{id}`: Remove a food item from the menu.

### Reservation Management

#### User Story: Efficient Reservation Handling
- **As a** staff member,
- **I want** to manage reservations efficiently,
- **So that** I can better organize seating and scheduling to enhance customer satisfaction.

**API Endpoints:**
- `GET /reservations`: Retrieve all reservations.
- `POST /reservations`: Create a new reservation.
- `PUT /reservations/{id}`: Update an existing reservation.
- `DELETE /reservations/{id}`: Cancel a reservation.

---