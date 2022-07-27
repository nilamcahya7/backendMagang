require('dotenv').config();
const router = require('./router');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { MORGAN_FORMAT } = require('../config/application');

const app = express();

app.use(morgan(MORGAN_FORMAT));
app.use(cors());
app.use(express.json());

module.exports = router.apply(app);