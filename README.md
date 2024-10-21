# FSD-1-Todo-List
This is the siimple To-Do List which used all the basic full stack functionalities such as spring-boot, reactjs, mysql, docker

Step 1: Backend - Spring Boot Application
1. Application Structure
*Controller: Handles HTTP requests (like fetching or updating a to-do item).
*Service: Handles the business logic.
*Repository: Interacts with the database.

2. Main Class: TodoBackendApplication.java
*@SpringBootApplication: This annotation tells Spring Boot that this is the entry point of the application. It also triggers component scanning and auto-configuration.
*main(): This is the entry point for the Java application. It uses SpringApplication.run() to launch the Spring Boot application.

Step 2: Backend API Endpoints
1. Controller Layer: TodoController.java
*@RestController: Specifies that this class handles HTTP requests and will return data directly (usually JSON).
*@RequestMapping("/api/todos"): All requests starting with /api/todos are routed to this controller.
*@GetMapping: Maps to GET /api/todos. Fetches all to-do items.
*@PostMapping: Maps to POST /api/todos. Creates a new to-do item.
*@PutMapping("/{id}"): Maps to PUT /api/todos/{id}. Updates an existing to-do item.
*@DeleteMapping("/{id}"): Maps to DELETE /api/todos/{id}. Deletes a to-do item.

2. Service Layer: TodoService.java
*@Service: Marks this class as a service that contains business logic.
*TodoRepository: Autowired to interact with the database.
*CRUD Methods:
    getAllTodos(): Fetches all the to-dos.
    createTodo(): Saves a new to-do.
    updateTodo(): Finds and updates an existing to-do by ID.
    deleteTodo(): Deletes a to-do by ID.

3. Repository Layer: TodoRepository.java
*@Repository: Indicates that this interface will handle database interaction.
*JpaRepository<Todo, Long>: Provides ready-made methods for CRUD operations (like findAll, save, delete).

4. Model: Todo.java
*@Entity: Marks this class as a JPA entity that maps to a table in the database.
*@Id: Specifies the primary key.
*@GeneratedValue: Configures auto-increment for the id.
*Fields:
    title: The to-do item description.
    completed: A boolean indicating if the task is done or not.

Step 3: Frontend - React.js Application
*axios: Used for making HTTP requests from the React frontend to the backend API.
*API_URL: The base URL of your backend.
    GET Request: getTodos() fetches all to-do items.
    POST Request: createTodo() creates a new to-do.
    PUT Request: updateTodo() updates an existing to-do.
    DELETE Request: deleteTodo() deletes a to-do.

Step 4: Dockerizing the Application
1. Dockerfile for Backend
    *FROM openjdk:20: Specifies the base image (Java 20).
    *COPY: Copies the JAR file into the Docker image.
    *ENTRYPOINT: Starts the Java application inside the container.
2. Dockerfile for Frontend
    FROM node:16: Specifies the Node.js environment.
    WORKDIR /app: Defines the working directory inside the container.
    npm install: Installs the project dependencies.
    CMD: Starts the React app.
3. docker-compose.yml
    backend: Defines the backend service, exposes port 8080.
    frontend: Defines the frontend service, exposes port 3000.
    build: Specifies the directories where the Dockerfiles are located.
Step 5: Deploying to AWS EC2
*Once you've tested everything locally, the next steps are:

    *Create AWS Account: Ensure you have an account.
    *Launch an EC2 Instance:
    *Select Ubuntu as the OS.
    *Install Docker on the instance.
    *Copy Docker Images:
    *Build and push your Docker images to a container registry like Docker Hub.
    *Run Docker Compose:
    *SSH into your EC2 instance.
    *Pull your images from Docker Hub and run them using docker-compose up.