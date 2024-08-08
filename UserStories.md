## User Stories and API Endpoints
<details>
<summary>Customer Operations</summary>

- **As a** user,
- **I want** to view the menu,
- **So that** I can see the available dishes and make informed choices.

**API Endpoint:**
- `GET /menu`: Retrieve all menu items.

</details>

<details>
<summary>Order from Menu</summary>

- **As a** user,
- **I want** to order from the menu,
- **So that** I can enjoy my selected dishes.

**API Endpoint:**
- `POST /orders`: Place a new order.

</details>

<details>
<summary>Edit My Order</summary>

- **As a** user,
- **I want** to edit my order,
- **So that** I can make changes before it is prepared.

**API Endpoint:**
- `PUT /orders/{id}`: Update an existing order.

</details>

<details>
<summary>Reserve/Cancel a Table</summary>

- **As a** user,
- **I want** to reserve or cancel a table,
- **So that** I can ensure a table is available when I arrive or cancel if my plans change.

**API Endpoints:**
- `POST /reservations`: Make a new reservation.
- `DELETE /reservations/{id}`: Cancel a reservation.
</details>

<details>
<summary>Administrator (Staff) Controls</summary>

- **As an** administrator,
- **I want** to view all orders,
- **So that** I can oversee the order process and ensure everything is running smoothly.

**API Endpoint:**
- `GET /orders`: Retrieve all current orders.

</details>

<details>
<summary>Add or Edit Menu Food Item</summary>

- **As an** administrator,
- **I want** to add or edit a menu food item,
- **So that** I can keep the menu up-to-date with new dishes or changes to existing ones.

**API Endpoints:**
- `POST /menu`: Add a new food item to the menu.
- `PUT /menu/{id}`: Update an existing food item on the menu.

</details>

<details>
<summary>Cancel or Delete Orders</summary>

- **As an** administrator,
- **I want** to cancel or delete orders,
- **So that** I can manage order changes and handle issues.

**API Endpoint:**
- `DELETE /orders/{id}`: Cancel or delete an order.

</details>

<details>
<summary>Change Order Status to Settled or Unsettled</summary>

- **As an** administrator,
- **I want** to change the status of orders to settled or unsettled,
- **So that** I can track which orders have been paid for and which are still outstanding.

**API Endpoint:**
- `PUT /orders/{id}/status`: Update the status of an order to settled or unsettled.
</details>
