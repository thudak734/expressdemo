import express from "express";
const search = express.Router();

search.get("/search", function(req,res){
    res.json(`Keyword: ${req.query.keyword} || Page: ${req.query.page}`);
});

export default search;