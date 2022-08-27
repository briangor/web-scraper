import { Router as router } from "express";

export const route = () => {
    // Create a new Tutorial
    router.post("/", books.create);
    
    // Retrieve all Tutorials
    router.get("/", books.findAll);
    
    // Retrieve a single Tutorial with id
    router.get("/:id", books.findOne);
}
