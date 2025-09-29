import dotenv from 'dotenv'
dotenv.config()

import { Connect } from './src/config/db.config.js'
import { Server } from './server.js'

Server.listen(process.env.PORTNUMBER, ()=> {
    console.log('App is listening on 3000')
    Connect()
})