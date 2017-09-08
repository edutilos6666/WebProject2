var data = [
   ['one', 'two', 'three'],
    ['eins', 'zwei', 'drei']
];


var headers = [];

for(var i=0; i< data.length; ++i) {
    headers.push("Column "+ i);
}

var table = "<table><tr>";
for(var header of headers) {
    table += "<th>" + header + "</th>" ;
}

table += "</tr>";

for(var i=0; i< data[0].length; ++i) {
    content = "<tr>";
    for(var j=0 ; j< data.length; ++j) {
        content +="<td>" + data[j][i] + "</td>";
    }
    content += "</tr>";
    table += content
}



table +="</table>";

console.log(table);


var fs = require("fs");
fs.writeFile("exampl3.html", table, function(err) {
    if(err) console.log(err);
});