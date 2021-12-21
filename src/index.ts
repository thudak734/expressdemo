import express from "express";
import routes from "./routes/app-routes";
import languageRoutes from "./routes/language-routes";
import userRoutes from "./routes/user-routes";
import search from "./routes/search-routes";
import shopRoutes from "./routes/shop-routes";
import movieRoutes from "./routes/movie-routes";

const app = express();

const port = 3001;

//calling routes set in other files
app.use(express.json());
app.use("/", routes); //localhost:3000
app.use("/languages/", languageRoutes); //localhost:3000/languages
app.use("/users/", userRoutes); //localhost:3000/users
app.use("/", search); //localhost:3000/search
app.use("/api/shops", shopRoutes);

app.use("/api/movies", movieRoutes);
//Directly set routes
//Directly set routes
app.get("/students", function(req, res){
    res.json("Getting all students...");
});

app.post("/students", function(req, res){
    res.json("Adding a student");
});

app.put("/students", function(req, res){
    res.json("Updating a student");
});

app.delete("/students", function(req, res){
    res.json("Deleting a student");
});

app.listen(port, function(){
    console.log(`Listening on ${port}`);
});