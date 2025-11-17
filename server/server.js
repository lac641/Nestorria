import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import { clerkMiddleware } from '@clerk/express'
import clerkWebHooks from './controllers/clerkWebhooks.js'


await connectDB() // Establish connection to the database

const app = express() // Initialize express application
app.use(cors()) //Enables cross-origin resource sharing

// Middleware setup
app.use(express.json()) // Enables json request body parsing
app.use(clerkMiddleware())

//API to listen Clerk webhooks
app.use('/api/clerk', clerkWebHooks)



// Route Endpoint to check API status
app.get('/', (req,res)=>{
    res.send('API successfully connected')
})

const port = process.env.PORT || 4000 //Define server port

//start the server
app.listen(port, ()=> console.log(`Server is running on http://localhost:${port}`));
