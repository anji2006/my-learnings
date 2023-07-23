

/*
    Express.js is built on top of Node.js
    leverages its non-blocking I/O capabilities to handle a large number of concurrent connections efficiently.

    1) Routes: 
        --> Express.js allows you to define routes to handle incoming HTTP requests.
        --> Routes are defined using HTTP methods (GET, POST, PUT, DELETE, etc.) and  URL patterns
        --> When a request matches a defined route, the corresponding route handler function is executed.
    2) Middleware:
        --> Middleware functions are functions that have access to the request and response objects 
            and can perform operations before passing control to the next middleware or route handler. 
        --> Middleware functions are useful for tasks like logging, authentication, 
                parsing request bodies, error handling, and more.
    3) Sessions and Cookies:
        -->  Express.js supports sessions and cookies, allowing you to manage user sessions and 
            store user-specific data between requests.
    4) Integration with Other Modules:
        -->Express.js can be easily integrated with various Node.js modules and middleware to add additional functionality, 
        --> such as database connectors (e.g., Mongoose for MongoDB), authentication middleware, etc.
    5) Static Files: 
        --> xpress.js can serve static files (e.g., CSS, JavaScript, images) using the express.static() middleware. 
        --> This is useful for serving frontend assets like stylesheets and client-side scripts.
*/