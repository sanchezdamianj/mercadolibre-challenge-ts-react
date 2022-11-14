require('dotenv').config();
const server = require("./app.js");
const { PORT } = process.env;
const cors = require('cors')

const whitelist = ['http://localhost:5173']

const options = {
    origin: (origin, callback) => {
      if (whitelist.includes(origin) || !origin) {
        callback(null, true)
      } else {
        callback(new Error('Not Allowed By CORS'))
      }
    }
  }
server.use(cors(options));

server.listen(PORT || 3000, () => {
    console.log(`listening at port: ${PORT}`);
});
