const express = require("express");
const { createInertiaApp } = require("@inertiajs/server");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "../frontend/dist")));

// Inertia.js middleware (simple custom implementation for starter)
function inertiaRender(res, component, props = {}) {
  res.json({ component, props });
}

app.get("/", (req, res) => {
  inertiaRender(res, "Home", { message: "Welcome to the Home Page" });
});

app.get("/about", (req, res) => {
  inertiaRender(res, "About", { user: { name: "Jannat", role: "Admin" } });
});

app.get("/contact", (req, res) => {
  inertiaRender(res, "Contact", {
    contacts: ["jannatjui414@gmail.com", "+8801712345678"],
  });
});

// API endpoint for page data
app.get("/api/page-data", (req, res) => {
  const route = req.query.route;
  if (route === "/about") {
    inertiaRender(res, "About", { user: { name: "Jannat", role: "Admin" } });
  } else if (route === "/contact") {
    inertiaRender(res, "Contact", {
      contacts: ["jannatjui414@gmail.com", "+8801712345678"],
    });
  } else {
    inertiaRender(res, "Home", { message: "Welcome to the Home Page" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
