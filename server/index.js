import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
const app = express();

dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))


app.use(cors());

app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.send('Hello to Memories API'); //THIS IS ONLY GREETING NOTE NOTHING IMPORTANT SO THAT IT SHOWS SOMETHING BEFORE/posts 
});

const PORT = process.env.PORT || 5000; //define PORT in env if app not working as after uploading on heroku, it automatically adds PORT

mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost/memories-local', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`)))
    .catch((error) => console.log(error));

mongoose.set('useFindAndModify', false);

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});