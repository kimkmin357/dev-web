# **react 개발 스터디**

생활코딩 react 2022 개정판 강좌 실습

## Language 

React, Node.js, javascript, HTML, CSS

## Environment

Window10 64bit, Visual Studio Code 

## 생활코딩 react 2022년 개정판 강좌 노트
1.  react를 사용하여 복잡한 html 코드를 간단하게 해줄 수 있다.

    class vs function 

    최근에는 function 방식으로 만드는 경우가많아져서 이 강의에서는 function 방식으로 진행

2.  npx create-react-app {프로젝트 명}

    npm create-react-app {프로젝트 명}

    create-react-app 역시 다운받아 사용하는 모듈인데

    npm을 사용할 경우 create-react-app을 나의 PC에 설치해서 사용하겠다는 의미이고

    npx를 사용할 경우 create-react-app이라는 모듈을 임시로 설치(실행)해서 사용하고 휘발시켜버리겠다는 것임.

    나는 npx를 이용해서 설치함.

    npx를 사용하기 위해서는 nodejs를 설치하면 된다.(*https://nodejs.org/ko/download/*)

    코드에디터는 VSCode 사용함.

    원하는 폴더를 불러오기함.

    Ctrl+Shift+` 로 터미널 창 띄워서 npx create-react-app . 실행(현재 디렉토리에 설치)

    npm start 입력시 실행.
    
    ![react 실행 화면](https://user-images.githubusercontent.com/97032125/166712495-ba72d26f-9dea-4b73-b7fb-6b6ea13c58a1.png)

3.  소스코드 수정방법

    index.html에 정의된 형식으로 page가 구성되는데 root라는 태그를 통해 react로 구현한 화면을 렌더링해주는 개념.

    index.js 의 document.getElementById('root')로 root 태그를 참조하는 것을 확인할 수 있음.
    
    index.js 파일 내용중 App.js를 연동시키는 <App />이라는 코드가 있고

    App.js를 수정하면 root 태그로 렌더링되는 UI가 변경됨.

    Ass.css가 App.js의 UI Design이 됨.

    배포 방법

    터미널 창에서 npm build 실행하면 build폴더가 생기고 최적화된 index.html 파일이 생성됨

    npx serve -s build를 실행하면 개발버전이 아닌 배포버전으로 react 페이지를 접속할 수 있음.

    
4.  사용자 정의 태그를 만든다. 반드시 대문자로 시작해야함.

    사용자 정의 태그를 react에서는 Component라고 함.


5.  props

    Component에 속성값을 주는 개념

    li 태그는 key라는 속성값을 사용하여 고유값을 설정해줘야함 

6.  이벤트

    Component에 이벤트(함수)를 추가하는 방법

7.  state

    prop : Component를 사용하는 외부자를 위한 데이터
    state : Component를 만드는 내부자를 위한 데이터

8.  create

    const[value, setValue] = useState(PRIMITIVE);
    ex) string, number, bigint, boolean, undefined, symbol, null

    state의 타입이 PRIMITIVE 일 경우는 설정된 Set 함수 사용하면 됨

    const[value, setValue] = useState(Object);
    ex) object, array

    state의 타입이 Object일 경우는 아래와 같이 사용해야 함

    newValue = {...value}   // state로 설정된 value값을 복사해옴
    newValue 변경           // 복사해온 변수를 사용하여 값을 변경
    setValue(newValue)      // 최종적으로 Set함수로 원 데이터 변경

9.  update

    Component로 보내진 데이터(props)를 state로 변경하여

    Component 내에서 set함수로 해당 데이터를 변경해서 

    Component를 호출한 곳으로 데이터를 돌려보낼 수 있다