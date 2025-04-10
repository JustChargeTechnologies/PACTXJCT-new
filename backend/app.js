const express = require("express");
const app = express();
require('dotenv').config();
const http = require("http");
const server = http.createServer(app);
const port = 4000;
const userRoutes=require('./routes/userRoutes.js')
const projectRoutes=require('./routes/projectRoutes.js')
const errorHandler=require('./middlewares/errorHandler.js');
const fileUpload=require('express-fileupload')
const dbConnection = require("./config/db.js");
const cookieParser = require('cookie-parser');
const path = require('path');
const contactRoutes=require('./routes/contactRoutes.js')
const volunteerRoutes=require('./routes/volunteerRoutes.js');
const helpRoutes=require('./routes/helpRoutes.js');
const newsRoutes=require('./routes/newsRoutes.js');
const sponserRoutes=require('./routes/sponserRoutes.js')
const cors=require('cors');
const donationRoutes=require('./routes/donateRoutes.js')
const cloudinary=require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})


dbConnection();
const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];
// app.use(cors({
//   origin: (origin, callback) => {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   credentials: true, 
// }));

app.use(cors({
  origin: "*"
}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Expose-Headers', 'x-rtb-fingerprint-id');
  next();
});
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(fileUpload({
  useTempFiles:true,
  tempFileDir:"/tmp/"
}));

app.use('/user',userRoutes);
app.use('/project',projectRoutes)
app.use(contactRoutes);
app.use(volunteerRoutes);
app.use(helpRoutes);
app.use(newsRoutes);
app.use(sponserRoutes);
app.use(donationRoutes);



app.use(errorHandler);

app.get("*", (req, res) => {
  res.send("Hello World");
});


server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
