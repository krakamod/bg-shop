# bg-shop

## Project Setup and Usage

This project is a React application for a board games shop.

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/krakamod/bg-shop.git
   cd bg-shop
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the Project

To start the development server, run:
```sh
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`.

### Building the Project

To create a production build, run:
```sh
npm run build
# or
yarn build
```

The build output will be in the `build/` directory.

### Testing the Project

To run tests, use:
```sh
npm test
# or
yarn test
```

### New Feature: Add Product

The application now includes a feature for adding new products. You can access this feature by navigating to the "Add Product" page from the header or navigation menu. The "Add Product" page allows you to add product details, upload images, set pricing, and more. The form includes validation for required fields and provides feedback for successful or failed product addition. The form also includes a field for specifying the product weight.

### Admin Panel for Admin Users

The application now includes an admin panel for admin users. Admin users can access the admin panel by navigating to the "Admin Panel" page from the header or navigation menu. The admin panel provides functionality for managing products, orders, and users. Admin users can switch between different views using the navigation links within the admin panel.

#### Accessing the Admin Panel

To access the admin panel, follow these steps:
1. Ensure you are logged in as an admin user.
2. Navigate to the "Admin Panel" page from the header or navigation menu.
3. Use the navigation links within the admin panel to manage products, orders, and users.

### New Feature: Users Page

The application now includes a Users page that displays the list of users. The page can be seen only by admins. The list item includes information if the user is admin or not. Admin users can access the Users page by navigating to the "Users" page from the header or navigation menu.

### New Feature: Invite Page

The application now includes an Invite page that allows admin users to invite new users by entering their email addresses. The page can be accessed only by admins. Admin users can access the Invite page by navigating to the "Invite" page from the header or navigation menu.
