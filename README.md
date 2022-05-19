# nodejs 스터디용 브랜치 생성

1.  Nodejs 설치

    [Nodejs](http://nodejs.org)

2.  버전 확인

    터미널 창에서 확인

    ```
    node -v
    npm -v
    ```

3.  HTTP Server 구동

    -   VSCode 실행하여 app.js 파일을 생성하고 아래와 같은 코드를 작성

        ```javascript
        // app.js
        const http = require('http'); // 1

        http.createServer((request, response) => { // 2
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
            response.end('Hello World');
        }).listen(3000); // 3

        console.log('Server running at http://127.0.0.1:3000/');
        ```

        1.  모듈은 require 함수를 사용하여 임포트하고 위의 경우 http 모듈을 http 변수에 할당

        2.  HTTP 서버 객체를 생성, request 이벤트가 발생하면 HTTP request를 처리하여 response를 반환하는 request Listener 함수를 호출한다. HTTP request 이벤트가 발생할 때마다 한번씩 호출된다.

        3.  createServer 메소드가 반환한 HTTP 서버 객체의 listen 메소드에 포트번호 3000을 전달하여 서버를 실행한다.

    -   VSCode 터미널 창에 아래 명령으로 서비스 실행

        ```
        node app.js
        ```

    -   브라우저에 http://localhost:3000 접속하면 Hello World 가 출력됨.

4.  NPM

    npm(node package manager)은 자바스크립트 패키지 매니저이다. Node.js에서 사용할 수 있는 모듈들을 패키지화하여 모아둔 저장소 역할과 패키지 설치 및 관리를 위한 CLI(Command line interface)를 제공한다.

5.  package.json

    프로젝트 개발중 많은 패키지를 사용하게 되고 해당 프로젝트에 의존적인 패키지들을 일괄적으로 관리해주는 것이 package.json 파일이다.

    -   package.json 생성방법

        ```
        npm init
        ```

        package name, version, description 등을 입력하라고 하는데 enter 입력하여 넘어가면 package.json 파일이 생성됨

        package.json 파일에 "dependencies" 항목이 있고 이 부분에 해당 프로젝트가 의존하는 패키지의 이름과 버전이 명시된다.

6.  패키지 설치

    ```
    # 지역 설치
    npm install {패키지명}
    ```

    해당 프로젝트 내에 node_modules라는 디렉터리가 생성되고 그 안에 입력한 패키지가 설치된다.(해당 프로젝트 내에서만 사용 가능)

    ```
    # 전역 설치
    npm install -g {패키지명}
    ```

    전역으로 설치하여 모든 프로젝트가 공통으로 사용할 수 있다.

    macOS의 경우

    /usr/local/lib/node_modules

    윈도우의 경우

    c:\Users\%USERNAME%\AppData\Roaming\npm\node_modules

    npm install 명령어에 --save 옵션을 사용하면 패키지 설치와 함께 package.json의 dependencies에 설치된 패키지 이름과 버전이 기록된다.

    *npm@5부터 --save는 기본 옵션이 되었다. --save 옵션을 사용하지 않더라도 모든 install 명령은 package.json의 dependencies에 설치된 패키지와 버전을 기록한다*

7.  패키지 제거

    ```
    # 로컬/개발 패키지 제거
    npm uninstall <패키지명>
    # 전역 패키지 제거
    npm uninstall -g <패키지명>
    ```

8.  자주 사용하는 npm 명령어

    ```
    # package.json 생성
    npm init

    # 지역 설치
    npm install {패키지명}

    # 전역 설치
    npm install -g {패키지명}

    # package.json의 모든 패키지 설치
    npm install

    # 로컬/개발 패키지 제거
    npm uninstall <패키지명>

    # 전역 패키지 제거
    npm uninstall -g <패키지명>

    # package.json scripts 프로퍼티의 start 실행
    npm start

    # package.json scripts 프로퍼티의 start 이외의 scripts 실행
    npm run <script명>
    ```