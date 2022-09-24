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
    response.write("<h1>Hello everyone</h1>");
    response.write("<h2>I am learning NodeJS</h2>");
    response.write(
        "<h3>My web page has been deployed to Heroku successfully !</h3>"
      );
      response.write(
        "<img src='https://wiki.matbao.net/wp-content/uploads/2022/07/image-168-1024x576.png'>"
      );
      response.end();
    });

//Bước 4: chạy wed bằng cách listen port
//Note: "console.log" không bắt buộc
app.listen(port, () => {
    console.log("Server is listening at http://localhost:" +port);
});
