const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const constants = require("./api/utils/constants");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

const getAllElementsRoute = require("./api/routes/getAllElements");
const getSingleElementRoute = require("./api/routes/getSingleElement");
const search = require("./api/routes/search");

const expressApp = express();
const app = express();

const { PORT_NUMBER: port } = constants;

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/getAllElements", getAllElementsRoute);
app.use("/getSingleElement", getSingleElementRoute);
app.use("/search", search);

app.listen(port, () =>
  console.log(`periodic table api listening on port ${port}!`)
);
