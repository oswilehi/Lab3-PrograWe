var http = require("http");
var lab = function(req, res){
    const no_change = 1;
    let variable_let = 2
    var variable = 3

    const sum = (x, y , z) => {
        return x + y + z;
    }

    console.log(sum(no_change, variable_let, variable));
    res.end("Hola mundo");
};
var server = http.createServer(lab);
server.listen(8080);