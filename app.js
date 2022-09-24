//Bước1: Khai báo http module (chạy wed)
const http = require("http");

//Bước 2: khai báo port của wed server
/*
//NOTE: muốn deloy lên hosting (Heroku)
//thì cần phải set port với process.env.PORT
*/
const port = process.env.PORT || 3000;

//Bước 3: tạo wed server, set header + code, thêm nội dung cho wed
//request: client => server
//response: server => client
const app = http.createServer((request, response) =>{
    response.statusCode = 200; //HTTP_OK
    response.setHeader("Content-Type", "text/html");
    response.end("Hello everybody. I had deloyed NodeJS to Heroku succed !");
});

//Bước 4: chạy wed bằng cách listen port
//Note: "console.log" không bắt buộc
app.listen(port, () => {
    console.log("Server is listening at http://localhost:" +port);
});
