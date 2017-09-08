var request = require("request");

request("http://localhost:8080/person/all", function(error, resp, body) {
    console.log(error);
    console.log(body);
});

request("http://localhost:8080/sampleJson", function(error, resp, body) {
    console.log(body);
});

request("http://localhost:8080/person/json", function(error, resp, body) {
    console.log(body);
});


request("http://localhost:8080/person/all/json", function(err, resp, body) {
    if(err) throw err;
    console.log(body);
});


//post , put , delete, ...
request.get("http://localhost:8080/person/remove/1", function(err, resp, body) {
    console.log(resp.message, resp.statusCode);
});