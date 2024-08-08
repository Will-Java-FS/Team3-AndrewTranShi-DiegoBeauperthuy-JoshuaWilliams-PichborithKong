## User Stories and API Endpoints

### Customer Operations

#### User Story: View Menu
- **As a** user,
- **I want** to view the menu,
- **So that** I can see the available dishes and make informed choices.

**API Endpoints:**
- `GET /menu`: Retrieve all menu items.

#### User Story: Order from Menu
- **As a** user,
- **I want** to order from the menu,
- **So that** I can enjoy my selected dishes.

**API Endpoints:**
- `POST /orders`: Place a new order.

#### User Story: Edit My Order
- **As a** user,
- **I want** to edit my order,
- **So that** I can make changes before it is prepared.

**API Endpoints:**
- `PUT /orders/{id}`: Update an existing order.

#### User Story: Reserve/Cancel a Table
- **As a** user,
- **I want** to reserve or cancel a table,
- **So that** I can ensure a table is available when I arrive or cancel if my plans change.

**API Endpoints:**
- `POST /reservations`: Make a new reservation.
- `DELETE /reservations/{id}`: Cancel a reservation.

### Administrator (Staff) Controls

#### User Story: View Orders
- **As an** administrator,
- **I want** to view all orders,
- **So that** I can oversee the order process and ensure everything is running smoothly.

**API Endpoints:**
- `GET /orders`: Retrieve all current orders.

#### User Story: Cancel or Delete Orders
- **As an** administrator,
- **I want** to cancel or delete orders,
- **So that** I can manage order changes and handle issues.

**API Endpoints:**
- `DELETE /orders/{id}`: Cancel or delete an order.

#### User Story: Change Order Status to Settled or Unsettled
- **As an** administrator,
- **I want** to change the status of orders to settled or unsettled,
- **So that** I can track which orders have been paid for and which are still outstanding.

**API Endpoints:**
- `PUT /orders/{id}/status`: Update the status of an order to settled or unsettled.

