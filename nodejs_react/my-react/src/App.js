// import logo from './logo.svg';
// import './App.css';
import { useState }  from "react";

function App() {

  const [data, setData] = useState("");

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
