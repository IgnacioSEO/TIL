// Node.js 공식 문서 사이트나 블로그에서 서버 구현한 코드를 보고 공부
// http모듈을 추출합니다.
const http = require("http");

// 웹 서버를 생성합니다.
const server = http.createServer();

//server 객체에 이벤트를 연결합니다.
server.on("request", function (req, res) {
  console.log("브라우저에서 HTTP Request 요청이 들어왔다!");

  const target = req.url;

  if (target === "/ping") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(JSON.stringify({ message: "pong" }));
  }
});
// 웹 서버를 3001 포트로 실행합니다.
server.listen(3001, function () {
  console.log("3001번 포트로 서버가 실행되었습니다.");
});
/*
    STEP 2. health-check

    목적    : 클라이언트의 요청을 서버가 받을 수 있는 상태인지 점검하기 위한 기능 (엔드 포인트)
    Input  : 서버의 생사를 확인하기 위해서 Client에게 받아야 되는 정보는 무엇인가?
        - 요청 자체만 받아도 될 것 같다
        - http request
            1. Start-line : HTTP Method(GET, POST, DELETE, PATCH) + HTTP version + Target (/posts)
            2. Header : localhost, content-type (json)
            3. Body : 데이터
        - http response
            1. Status-line : Status Code (200 or 201 or 404 or 500 or 403) + status message ("OK")
            2. Header : localhost, content-type (json)
            3. Body : 데이터
        - 예제)
            http request -> GET http://localhost:3001/ping
                1. Start-line : GET + Target (/ping)
                2. Header : host (localhost:3001)
                3. Body : 데이터
    Output : 서버가 잘 실행되고 있다는 메시지를 반환하자.
            http response
                1. Status-line : 200 ok
                2. Header : host (localhost:3001) - 자동으로 할당 됨
                3. Body : {"message" : "pong"}
*/

/*
    console.log(req) 를 하면 Incoming 으로 온다
    Target === '/회원 가입 
    if (targer ==='/ 게시물 등록'){

    }
*/
