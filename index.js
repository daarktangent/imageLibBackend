const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(
    cors({
        origin:'*'
    })
    );
mongoose.connect("mongodb://localhost:27017/REACT_BACKEND");

const post_route = require('./routes/postRoute');

app.use('/api',post_route);
app.listen(8000,function()
    {
        console.log("server is running");
    }
);