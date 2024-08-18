# HomeService

HomeService is a full-stack web application designed to connect homeowners with service providers like electricians, plumbers, cooks, and housekeepers. The project is developed using React.js for the frontend and Spring Boot for the backend.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Vendor Registration:** Service providers (vendors) can register on the platform.
- **Job Listings:** Vendors can view available job postings on the platform.
- **Application Process:** Vendors can apply for jobs by submitting basic details.
- **Customer Hiring:** Customers can view available vendors and hire them for specific services.

## Technologies Used

### Frontend

- **React.js:** A JavaScript library for building user interfaces.
- **Axios:** For making HTTP requests to the backend API.
- **Tailwind CSS:** A utility-first CSS framework for styling the frontend.

### Backend

- **Spring Boot:** A Java framework for building production-ready web applications.
- **MySQL:** A powerful, open-source object-relational database system.
- **Spring Data JPA:** For database operations.
- **Swagger:** For API documentation.

## Setup and Installation

### Prerequisites

- **Node.js** (for running the React frontend)
- **Java Development Kit (JDK)** (for running the Spring Boot backend)
- **MySQL** (for the database)

### Frontend Setup

1. **Navigate to the frontend directory**:
    ```bash
    cd frontend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm start
    ```

   The frontend will be running at `http://localhost:3000`.

### Backend Setup

1. **Navigate to the backend directory**:
    ```bash
    cd backend
    ```

2. **Update database configuration**:
   - Edit the `application.properties` file in the `src/main/resources` directory with your PostgreSQL database credentials.

3. **Build the project**:
    ```bash
    ./mvnw clean install
    ```

4. **Run the Spring Boot application**:
    ```bash
    ./mvnw spring-boot:run
    ```

   The backend will be running at `http://localhost:8080`.

### Project Structure

HomeService/
├── frontend/ # React.js frontend
│ ├── public/
│ └── src/
├── backend/ # Spring Boot backend
│ ├── src/
│ │ ├── main/
│ │ └── test/
└── README.md # Project documentation

## Usage

- **Vendor**:
  - Register on the platform.
  - Browse job listings.
  - Apply for jobs by filling in your details.

- **Customer**:
  - Browse available vendors.
  - Hire a vendor based on your needs.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions, feel free to reach out:

- **GitHub:** [muzamil-mia](https://github.com/muzamil-mia)
