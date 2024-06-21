# Food-del

This project (food delivery) application leverages modern web technologies to create a comprehensive and user-friendly platform for food ordering and delivery. The project includes essential features like user authentication, real-time order tracking, and an admin dashboard, making it a robust solution for the food delivery industry.
## Features

- User Authentication: User registration and login with JWT-based authentication.
- Menu Management: Dynamic menu display with item descriptions, prices and add-to-cart functionality with quantity adjustment.
- Cart and Checkout: A shopping cart with item summary and total price. Secure checkout process with payment gateway integration (Stripe/PayPal).
- Order Tracking: Real-time order status updates (order placed, being prepared, out for delivery, delivered).
- User Profile Management: Profile page for updating personal information and viewing order history.
- Admin Dashboard: Admin panel for managing restaurants, menus, and orders.


## Tech Stack

**Frontend:** 
- React.js: Component-based architecture for building the user interface.
- Redux: State management for handling user sessions, cart state, and more.
- React Router: Navigation and routing within the application.
- Axios: HTTP client for API requests.

**Backend:** 
- Node.js: JavaScript runtime for building the server-side application.
- Express.js: Web framework for handling routes and middleware.
- MongoDB: NoSQL database for storing user, restaurant, and order data.
- Mongoose: ODM for MongoDB, providing schema and model definitions.
**Other Tools and Libraries:**
- JWT: For secure user authentication.
- Stripe/PayPal SDK: For payment processing.

## Running Tests

To run frontend, run the following command

```bash
  npm run dev
```

To run backend, run the following command

```bash
  npm run server.js
```
To run admin control, run the following command

```bash
  npm run dev
```



