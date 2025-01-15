# Product Management System

The **Product Management System** is a full-stack web application designed to manage a catalog of products. It enables users to perform CRUD (Create, Read, Update, Delete) operations on products and provides an intuitive interface for seamless product management. 

## Features

- **Add Products:** Add new products with details like name, category, price, and description.
- **View Products:** View a list of all available products.
- **Update Products:** Edit the details of existing products.
- **Delete Products:** Remove products from the catalog.
- **Search Functionality:** Search for products by name or category.
- **Responsive Design:** Built with **React** and styled using **Tailwind CSS** for a modern, user-friendly experience.

## Technologies Used

### Backend
- **Spring Boot:** Provides RESTful APIs for product management.
- **Spring Data JPA:** For database operations.
- **MySQL:** Used as the database to store product information.

### Frontend
- **ReactJS:** Handles the client-side of the application.
- **Tailwind CSS:** Provides utility-first CSS for responsive and modern design.

### Additional Libraries
- **Lombok:** Simplifies the code with annotations for boilerplate code generation.
- **Axios:** For making HTTP requests from the React frontend.
- **Spring Security:** For secure application access (if applicable).
- **Validation:** Ensures proper data inputs for product details.

## Prerequisites

To run this project locally, ensure you have the following installed:
- Java 17 or higher
- Maven
- Node.js (with npm or yarn)
- MySQL Server

## Installation and Setup

### Backend Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/anmolsinghdz/Product-Management-System.git
   cd Product-Management-System
2. Configure MySQL Database

- Create a database named product_db (or as specified in application.properties).
- Update the database credentials in src/main/resources/application.properties:
  properties
  ```bash
  spring.datasource.url=jdbc:mysql://localhost:3306/product_db
  spring.datasource.username=<your-username>
  spring.datasource.password=<your-password>
3. Run the Backend

- Build and run the Spring Boot application:
  ```bash
  mvn spring-boot:run

### Frontend Setup
1. Navigate to the Frontend Directory
  - navigate
    ```bash
    cd frontend
  
2. Install Dependencies

   - Install the required npm packages:
    ```bash
    npm install
3. Run the React App

  - Start the development server:
    ```bash
    npm start
4. Access the Application

  - Open your browser and navigate to:
    ```bash
    http://localhost:3000

### Usage
- Home Page: View all products and perform CRUD operations.
- Add Product: Use the "Add Product" button to add a new product.
- Update Product: Click on a product to edit its details.
- Delete Product: Remove a product by clicking the delete button.
- Search Product: Search for products using the search bar.


### Dependencies
** Backend Dependencies **
- spring-boot-starter-web
- spring-boot-starter-data-jpa
- mysql-connector-java
- lombok
- spring-boot-starter-validation
** Frontend Dependencies **
- react
- react-dom
- axios
- tailwindcss

### Future Enhancements
- Add user authentication and role-based access control.
- Implement pagination and sorting for product lists.
- Integrate advanced filtering options.

### License
This project is licensed under the MIT License.

Feel free to contribute to this repository by submitting issues or pull requests.
