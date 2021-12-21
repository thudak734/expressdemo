import express from 'express';
import Movie from '../models/Movie'
const movieRoutes = express.Router();



let moviesArray: Movie[] =[
    {id: 1, title: "Jingle All The Way", year:1996, animated: false},
    {id: 2, title: "National Lampoon's Christmas Vacation", year:1989, animated: false},
    {id: 3, title: "It's a Wonderful Life", year:1946, animated: false},
    {id: 4, title: "Rudolph The Red-Nosed Reindeer", year:1964, animated: true},
    {id: 5, title: "Home Alone", year:1990, animated: false},
];

movieRoutes.get("/", (req, res)=>{ 
   res.json(moviesArray)
})

export default movieRoutes;