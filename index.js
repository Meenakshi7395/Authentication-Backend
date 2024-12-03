import express, {json} from 'express';
import bodyParser from 'body-parser'; 
import mongoose from 'mongoose';

import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());

mongoose.connect('mongodb://localhost:27017/Authentication_form', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
  

import users from "./routes/users.js"
app.use(bodyParser.json());
var homePage = `
<h1>Welcome to Authentication Form Backend</h1>
<h2>Main Features of Authentication Form</h2>
<ul>
<li>Login controllers are defined.</li>
<li>User Schema is defined.</li>
<li>MongoDB data base is used.</li>
<li>For User details , createUser, ViewUser by Id , APIs are created. </li>
</ul>
<p>Please click <a href="https://authentication-frontend-d0wg.onrender.com/">here</a> For Better User Experience</p>
<p>Thanks for checking it out</p>
`


app.get('/',(req,res) => {
    // res.send({name:"Hello world"})
    res.send(homePage);

});

// Routes
app.use('/users', users);

app.listen(PORT,()=> console.log(`server runnig on http://localhost:${PORT}`));