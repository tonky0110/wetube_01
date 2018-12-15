import express from 'express';

const app = express();

const PORT = 80;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from my home~");

const handleProfile = (req, res) => res.send("Your are on my profile");

const betweenHome = (req, res, next) => {
  console.log("between");
  next();
}

app.use(betweenHome);

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);