const { createServer } = require("http");
const { createReadStream } = require("fs");

const sendFile = function(response, status, type, filePath) {
    response.writeHead(status, {"Content-Type": type });
    createReadStream(filePath).pipe(response); 
};

createServer(function(request, response) {
    switch (request.url) {
        case "/":
            return sendFile(response, 200, "text/html", "index1.html");
        case "/img/webitup2.png":
            return sendFile(response, 200, "image/jpeg", "/EF_sida1/webitup2.png");
        case "/style.css":
            return sendFile(response, 200, "text/css", "/EF_sida1/style.css");
        
            
    }
}).listen(3000);