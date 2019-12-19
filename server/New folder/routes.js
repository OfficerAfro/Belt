console.log("routes.js is running");
const Rests = require("../controllers/rests");

module.exports = function(app) {
    app.get("/rests", Rests.getAll);
    app.get("/rests/:_id", Rests.getOne);
    app.post("/rests", Rests.create);
    // app.post("/edit/:id", Rests.edit);
    app.post("/review/:_id", Rests.review);
    app.delete("/rests/:_id", Rests.delete);
    app.put("/rests/:_id", Rests.update);
}