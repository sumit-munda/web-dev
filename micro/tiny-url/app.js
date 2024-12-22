const fs = require("fs/promises");
const http = require("http");
const path = require("path");

const PORT = 7000;
const serverFile = async (res, filepath, contentType) => {
  try {
    const data = await fs.readFile(filepath);
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  } catch (error) {
    res.writeHead(404, { "Content-Type": contentType });
    res.end("404 page not found");
  }
};

const server = http.createServer(async (req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      return serverFile(
        res,
        path.join(__dirname, "public", "index.html"),
        "text/html"
      );
    }
  } else if (req.method === "GET") {
    if (req.url === "/style.css") {
      return serverFile(
        res,
        path.join(__dirname, "public", "style.css"),
        "text/css"
      );
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
