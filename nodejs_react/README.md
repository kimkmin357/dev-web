# Nodejs Express + React 연동

1.  VSCode 실행해서 작업할 폴더를 Open

2.  Ctrl+Shift+` 로 터미널 창을 Open

3.  npm init 명령어 실행하여 package.json 파일 생성

4.  npm install express 로 express framework 다운로드

5.  index.js 파일 생성

    express 모듈 활용하여 서버구동 코드 입력

    ```javascript
    const port = 8082;
    app.listen(port, ()=>{
        console.log(`express server is running on ${port} port`);
    })
    ```

6.  react 프로젝트 생성

    npx create-react-app {프로젝트명}

7.  App.js 수정

    ```javascript
    // 반드시 {} 중괄호를 넣어줘야함
    import { useState } from "react";

    function App() {

    const [data, setData] = useState("");

    // React에서 Express Server 쪽으로 API 호출
    const callApi = async() => {
        // 프록시로 등록한 서버주소가 생략됨
        fetch('http://localhost:8082/api/getDataFromServer')
        .then(res => res.json())
        // json형식으로 받아온 값을 setState를 이용해 값을 재설정해줌
        .then(function(res){
            setData(JSON.stringify(res))
        });
    };

    return (
        <div>
        <button onClick = {callApi}>Call Node Server API</button>
        <h1>data : {data}</h1>
        </div>
    );
    }

    export default App;
    ```

8.  Proxy 기능 추가(http-proxy-middleware 활용) : Client(React) -> Server(Nodejs) 쪽으로 API 요청을 처리하기 위함

    -   http-proxy-middleware 설치 : react 폴더로 이동하여 npm install http-proxy-middleware 실행

    -   Proxy 설정: React 프로젝트 src 하위에 proxy.js 파일 생성 및 아래 코드 작성

    ```javascript
    const proxy = require('http-proxy-middleware');

    module.exports = function (app) {
        app.use(
            proxy('/api',{
                target :'http://localhost:8082/',
                changeOrigin: true,
                pathRewrite: { '^/api': '' },
            })
        );
    };
    ```

10. Client를 위한 Server쪽 API 호출 라우팅

    ```javascript
    // client의 api 호출에 대한 라우팅. react의 package.json의 homepage 경로와 동일해야함
    app.use('/api', api);  
    ```

11. npm run build 실행하여 build 생성확인, build 폴더를 nodejs 폴더 하위로 이동

12. react에서 설정했던 hompage 경로에 build 폴더를 static으로 연결하여 nodejs server ip와 port를 활용하여 react에서 만든 page를 접근하도록 함

    -   server.js 코드

        ```javascript
        // express server ip와 port를 활용하여 react에서 만든 page를 접근하기 위한 라우팅
        app.use('/react/', express.static(path.join(__dirname, '/build')));
        app.use('/react/*', express.static(path.join(__dirname, '/build')));
        ```

13. node 서버를 구동하여 react로 만든 페이지에서 server API를 호출하는지 확인