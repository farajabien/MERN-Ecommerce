import express from 'express'
import routers from './routers/index.js'
import dotenv from 'dotenv'

dotenv.config()
const router = express.Router()

console.log('Here: ', `${process.env.API_URL}`)
router.use(`${process.env.API_URL}`, routers)

export default router
