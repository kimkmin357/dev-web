 # **Nodejs Express와 React 연동**

<!-- ```html
<br>
<br>
``` -->

## **참고**
*https://velog.io/@sae1013/React-%EC%99%80-Node.js-%EC%97%B0%EB%8F%99%ED%95%98%EA%B8%B0*

*https://codingapple.com/unit/nodejs-react-integration/*

## **순서 및 코드설명**
1. React App 생성
    * ex) 'begin-react'라는 이름으로 App 생성 **npx create-react-app begin-react**

2. React App의 Package.json에서 homepage 경로 설정
    * Server의 index.js에서 설정했던 라우팅 주소와 일치
   ```json
    "name": "begin-react",
    "version": "0.1.0",
    "homepage": "/react",
    "private": true,
    "dependencies": {
    ....
   ```

3. Proxy 기능 추가(http-proxy-middleware 활용) : Client -> Server 쪽으로 API 요청을 처리하기 위함
    * Proxy 설정 : src/setProxy.js 생성 및 아래 코드 작성
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

4. Express Server 쪽으로 API 호출법
    ```javascript
    fetch('http://kimkmin357.synology.me:8082/api/api1')
        .then(res => res.json())
        // json형식으로 받아온 값을 setState를 이용해 값을 재설정해줌
        .then(function(res){
            setData(JSON.stringify(res))
        });
    ```

5. Nodejs Express 설치

    * express 설치: npm install --save => 현재 프로젝트에서만 express를 사용하겠다.

    * React App 내부에서 index.js 파일 생성(express 서버 구동 코드 작성)
    ```javascript
    const port = 8082;
    app.listen(port, ()=>{
        console.log(`express server is running on ${port} port`);
    })
    ```

6. CORS 설정 => 서버쪽 IP와 PORT정보를 활용하여 React Client 쪽 라우팅을 사용할 경우

    * CORS 설정(index.js)
    ```javascript
    const cors = require('cors');

    app.use(cors());

    // express server ip와 port를 활용하여 react에서 만든 page를 접근하기 위한 라우팅
    app.use('/react/', express.static(path.join(__dirname, '/build')));
    app.use('/react/*', express.static(path.join(__dirname, '/build')));
    ```

    **/react** : React 프로젝트의 package에 "hompage"항목에 정의된 경로
    
    **/build** : React 프로젝트 빌드해서 얻어낸 build 폴더 경로(index.js 파일 존재하는 위치를 기준)

7. Client를 위한 Server쪽 API 호출 라우팅(index.js)
    ```javascript
    // client의 api 호출에 대한 라우팅. react의 package.json의 homepage 경로와 일치
    app.use('/api', api);
    ```