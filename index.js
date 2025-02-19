import express from "express";
import cors from "cors";
import path from "path";

const __dirname = path.resolve();
const app = express();
const port = 3000;

// Enable CORS to allow frontend requests
app.use(cors());
app.use(express.json()); // To handle JSON data

// Serve static frontend files
app.use(express.static(path.join(__dirname, "frontend/dist")));


// Sample API endpoint
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from backend!!!!!!!!" });
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
