var request = require("request");
//import request from "request";

var url = "http://www.google.com";

request(url, function(error, resp, body) {
    console.log("error = ", error);
    console.log("resp = ", resp.statusCode);
    console.log("body = ", body);
});