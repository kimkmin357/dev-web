# nodejs + mongodb  로그인 기능 구현

1.  기본 사용법

    -   example 내부에서 node app.js 명령 실행

    -   home 페이지(http://localhost:3001/home)

        ![home화면](https://user-images.githubusercontent.com/97032125/168474953-57ba9eb4-78bb-49d0-bf93-2147efe876f4.png)

    -   join 링크 클릭, 회원가입 페이지

        ![회원가입](https://user-images.githubusercontent.com/97032125/168479733-7d94574b-9281-433e-a771-a8ad45ec3e82.png)

    -   login 링크 클릭, 로그인 페이지

        ![로그인](https://user-images.githubusercontent.com/97032125/168479692-1464f13c-bdb0-45af-b86a-6b33de641bda.png)

    -   login 성공 페이지

        ![로그인 성공](https://user-images.githubusercontent.com/97032125/168475311-204603f7-77f2-48b8-8596-62520839da10.png)

2.  디렉토리 구조

    ```
    ├── db
    │   ├── ds.js               // mongoose 모듈 활용 connection 함수 구현
    │   └── users.js            // mongoose schema 생성
    ├── node_modules
    │   └── 생략
    ├── public                  // static으로 설정된 폴더(Client가 Server의 데이터를(html 등) 다이렉트로 접근 가능)
    │   ├── images
    │   │   └── 생략   
    │   ├── join_form.html      // join 페이지에 보여지는 정적 html 화면
    │   ├── login_form.html     // login 페이지에 보여지는 정적 html 화면
    │   └── main.html           // main 페이지에 보여지는 정적 html 화면
    ├── routes                  // routing 폴더
    │   ├── index.js            // router 통합 관리 js 파일
    │   ├── join.js             // join 페이지 관련 라우팅 설정(POST,GET API)
    │   ├── login.js            // login 페이지 관련 라우팅 설정(POST,GET API)
    │   └── main.js             // main 페이지 관련 라우팅 설정(POST,GET API)
    ├── views                   // Embedded JavaScript Template Default Folder
    │   ├── result_login.ejs    // login 결과를 출력하는 ejs 파일
    │   └── success_join.ejs    // join 결과를 출력하는 ejs 파일
    ├── .env                    // 현재 nodejs 프로젝트 환경변수 파일
    ├── app.js                  // nodejs entry 파일(mongodb 서버 연결 및 nodejs 서버 구동)
    ├── package-lock.json       
    ├── package.json
    ├── README.md
    ``` 

3. Reference

    -   [Node.js 기반에서 환경변수 사용하기](https://velog.io/@public_danuel/process-env-on-node-js)

    -   [dotenv로 환경변수 설정하기](https://velog.io/@iamhayoung/dotenv%EB%9E%80-Node.jsExpress%EC%97%90%EC%84%9C-dotenv%EB%A1%9C-%ED%99%98%EA%B2%BD%EB%B3%80%EC%88%98-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)

    -   [Express에서 정적 파일 제공](https://expressjs.com/ko/starter/static-files.html)

    -   [nodejs ejs](https://devkingdom.tistory.com/81)

    -   [EJS로 HTML에 데이터 전달하기](https://itsjh.tistory.com/6)

    -   [mongodb schema](https://www.zerocho.com/category/MongoDB/post/59a1870210b942001853e250)

    -   [URI랑 URL 차이점이 뭔데?](https://www.charlezz.com/?p=44767)

4. 향후 보완점

    - Join 예외처리

    - Login 예외처리

    - Login 세션방식 구현

    - Login 후 main page 구현