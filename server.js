console.log("server.js is running");

const express = require("express"),
         port = 8000,
      DB_NAME = "eat_db",
          app = express();

app.use(express.json());
app.use(express.static(__dirname + '/public/dist/public'));

require("./server/utils/mongoose")(DB_NAME);
require("./server/utils/routes")(app);

app.all('*', (req, res, next) => {
    res.sendFile(__dirname + "/public/dist/public/index.html");
})

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});