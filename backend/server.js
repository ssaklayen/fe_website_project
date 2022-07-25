const express = require ("express");

const app = express();
const appRoutes = express.Router();

app.use(express.json());
app.use(express.urlencoded( {extended: false}));


appRoutes.route("/contact").post((req, res) => {
    res.status(200).send("Contact Us Now")
    console.log("Contact made!");
});

let port = process.env.PORT;
if (port == null || port == "") { port = 5000; }

app.listen(port, function() {
    console.log(`Server started successfully on port ${port}`);
})