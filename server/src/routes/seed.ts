import { Request, Response } from "express";

const express = require('express');
const router = express.Router();

/* Sedd insider info. */
router.put('/insider', (req: Request,res: Response) => {
    
    res.json({
        done: true
    })
});
  
module.exports = router;