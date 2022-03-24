import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import routers from './utils/router'
import passport from "passport";
import {checkApiKey,checkRoles} from './middlewares/auth'
import {createConnection} from 'typeorm'

import './utils/auth'
import {
  boomErroHandler,
  errorHandler,
} from './middlewares/errors'
const app = express()
createConnection().then(async connection=>{

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})
process.on('uncaughtException', function(e) {
    console.log('Uncaught Exception...');
    console.log(e.stack);
    process.exit(99);
  });
}).catch((err)=>{
  console.log(err)
  process.kill(process.pid, 'uncaughtException')
  process.kill(process.pid, 'SIGTERM')
})

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes


routers(app)

//errors
//app.use(logError)
app.use(boomErroHandler)
app.use(errorHandler)

const server = app.listen(3000, ()=>{
  console.log('Server on port', 3000);
});




