const express = require("express");

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    { id: 1, title: "A joke", content: "This is a joke" },
    { id: 2, title: "Another joke", content: "This is another joke" },
    { id: 3, title: "Yet another joke", content: "This is yet another joke" },
    { id: 4, title: "One more joke", content: "This is one more joke" },
    { id: 5, title: "Fifth joke", content: "This is the fifth joke" },
  ];

  res.json(jokes);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
