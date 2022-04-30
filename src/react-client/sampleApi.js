import axios from 'axios';
import { useState, useEffect } from "react";

function SampleAPI() {

    const [data, setData] = useState("");

    const callApi = async() => {
        // axios.get("http://localhost:3002/api")
        // .then(function(res){
        //     setData(res.data);
        // });

        // 프록시로 등록한 서버주소가 생략됨
        fetch('http://kimkmin357.synology.me:8082/api/api1')
          .then(res => res.json())
          // json형식으로 받아온 값을 setState를 이용해 값을 재설정해줌
          .then(function(res){
              setData(JSON.stringify(res))
          });
    };

    const callApi2 = async() => {
      // axios.get("http://localhost:3002/api")
      // .then(function(res){
      //     setData(res.data);
      // });

      // 프록시로 등록한 서버주소가 생략됨
      fetch('http://kimkmin357.synology.me:8082/api/api2')
        .then(res => res.json())
        // json형식으로 받아온 값을 setState를 이용해 값을 재설정해줌
        .then(function(res){
            setData(JSON.stringify(res));
        });
  };

    // useEffect(() => {
    //     callApi();
    // }, []);

  return (
    <div>
        <button onClick = {callApi}>GetDataFromServer1</button>
        <br/>
        <button onClick = {callApi2}>GetDataFromServer2</button>
        <br/>
        
        <h1>data : {data}</h1>
    </div>
  );
}

export default SampleAPI;
