import http from "node:http";

const HOST = "localhost";
const PORT = 3000;

http
  .createServer((request, response) => {
    response.end("Hello, Galvanize!");
  })
  .listen(PORT, HOST, () => {
    console.log(`Server is running on ${HOST}:${PORT}`);
  });
