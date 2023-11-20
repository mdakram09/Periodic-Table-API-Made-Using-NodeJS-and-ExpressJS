const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const constants = require('./api/utils/constants');

const getAllElementsRoute = require('./api/routes/getAllElements');
const getSingleElementRoute = require('./api/routes/getSingleElement');

const expressApp = express();
const app = express();

const { PORT_NUMBER: port } = constants;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/getAllElements', getAllElementsRoute);
app.use('/getSingleElement', getSingleElementRoute);

app.listen(port, () => console.log(`r1ar_mock_api listening on port ${port}!`));
