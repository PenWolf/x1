const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');
const cors = require("cors");
//Routes
const postsRoutes = require('./routes/api/posts_controller');

const app = express();
app.use(cors());
//BodyParser Middleware 
app.use(express.json());
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
    );
    res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,Cache-Control,Accept,X-Access-Token ,X-Requested-With, Content-Type, Access-Control-Request-Method"
    );
    if (req.method === "OPTIONS") {
    return res.status(200).end();
    }
    next();
    });
//connect to mongo
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useFindAndModify: false
})
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log(err));
//User routes 
app.use('/api/posts', postsRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server run at port ${PORT}`));
