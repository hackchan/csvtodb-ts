import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import {createConnection} from 'typeorm'

import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'
import {
  boomErroHandler,
  errorHandler,
} from './middlewares/errors'
const app = express()
createConnection().then(async connection=>{
  // Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use(userRoutes);
app.use(authRoutes);

//errors
//app.use(logError)
app.use(boomErroHandler)
app.use(errorHandler)

const server = app.listen(3000, ()=>{
  console.log('Server on port', 3000);
});
process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})
}).catch((err)=>{
  console.log(err)
  process.kill(process.pid, 'SIGTERM')
})




