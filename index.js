import express from "express";
import path from "node:path"

const app = express();
const port = 3000;

app.use(express.static(path.join(import.meta.dirname, "public")));


app.get("/", (req, res) => {
	res.sendFile(path.join(import.meta.dirname, "public", "home.html"));
});


// Write your code here:
app.get('/home', (req, res) => {
    const data = { username: "Irineo"};
    res.render('home.ejs', data);
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});




app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
