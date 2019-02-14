const express = require('express');
const cors = require('cors');

const movieRouter = require('./routes/movie');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');
const categoryRouter = require('./routes/category');
const securityRouter = require('./routes/security');

const bodyParser = require('body-parser');

const security = require('./middlewares/security');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use(security.verifyToken);

app.use(securityRouter);
app.use('/movies', movieRouter);
app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/categories', categoryRouter);

app.listen(3000, () => console.log('Listening on port 3000'));