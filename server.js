const express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

//Uncomment below code if making a api call to http server

// app.use(function(req, res, next) {
//     if(req.headers["x-forwarded-proto"] === "https"){
//         res.redirect(`http://${req.hostname}${req.url}`);
//     }else {
//         next();
//     }
// });

app.use(express.static("dist"));

app.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
});
