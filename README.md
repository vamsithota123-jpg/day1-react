1. What is HTTP and how does it work? Explain the request–response cycle.

HTTP (HyperText Transfer Protocol) is a stateless protocol used for communication between a client and a server.
The client sends an HTTP request (URL, method, headers, body) to the server.
The server processes the request and returns an HTTP response containing a status code, headers, and data.

2. What are the different HTTP methods and when should each be used?

GET: Fetch data without modifying it.

POST: Create new resources on the server.

PUT: Replace an entire existing resource.

PATCH: Partially update a resource.

DELETE: Remove a resource from the server.

3. Explain HTTP status codes. What's the difference between 2xx, 3xx, 4xx, and 5xx?

HTTP status codes indicate the result of a request.
2xx means success, 3xx means redirection, 4xx indicates client errors, and 5xx indicates server errors.
They help clients understand whether the request succeeded or failed and why.

4. What are HTTP headers? Name some important request and response headers.

HTTP headers provide metadata about the request or response.
Common request headers include Authorization, Content-Type, and Accept.
Common response headers include Content-Type, Cache-Control, and Set-Cookie.

5. What is the difference between stateless and stateful protocols? Is HTTP stateless?

A stateless protocol does not store client data between requests, while a stateful protocol does.
HTTP is stateless because each request is independent.
State is managed using cookies, sessions, or tokens like JWT.

6. Explain idempotency in REST APIs. Which HTTP methods are idempotent?

Idempotency means making the same request multiple times produces the same result.
GET, PUT, DELETE are idempotent methods.
POST is not idempotent because it creates a new resource each time.

7. What is REST? What are the principles of RESTful API design?

REST (Representational State Transfer) is an architectural style for designing APIs.
Key principles include statelessness, resource-based URLs, use of standard HTTP methods, and uniform interfaces.
REST APIs typically exchange data using JSON over HTTP.

8. How would you version a REST API? What are the different approaches?

API versioning helps manage changes without breaking existing clients.
Common approaches include URL versioning (/api/v1), header-based versioning, and query parameters.
URL versioning is the most commonly used and easiest to maintain.
