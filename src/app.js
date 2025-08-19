import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app=express()

app.use(cors({
  orgin:process.env.CORS_ORGIN,
  credentials:true
}))

app.use(express.json({limit:"16kb"}))//limit -> to limit json.

app.use(express.urlencoded({extended:true,limit:"16kb"}))//extended mean we can create many objects.

app.use(express.static("public"))

app.use(cookieParser())

export { app }
