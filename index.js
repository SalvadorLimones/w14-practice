const filesystem = require("fs");
const http = require("http");
const url = require("url");

const sum = (a, b) => {
  const res = a + b;
  if (res > 10) {
    return "sok";
  } else if (res < 0) {
    return 0;
  } else {
    return Math.floor(res);
  }
};

//const result = sum(2, 3);
//filesystem.writeFileSync("./myfile.txt", result.toString());

//create a server object:
http
  .createServer(function (req, res) {
    const queryObject = url.parse(req.url, true).query;
    console.log(queryObject);
    const result = sum(
      Number(queryObject.number1),
      Number(queryObject.number2)
    );
    res.write(result.toString()); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
