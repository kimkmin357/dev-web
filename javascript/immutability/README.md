# 생활코딩 javascript Immutability 강좌 내용

1.  수업소개

2.  이름에 대한 불편함 const vs var

    ```javascript
    var v = 1;
    // 1억 line코드가 있다고 가정
    v = 2; // 누군가 v가 1인지 모르고 변경해버릴 수 있음
    console.log('v :', v);


    // 위와 같은 경우 v값이 바뀌지 않도록 하는 방법은 const 키워드로 변수를 선언하면 된다.
    const c = 1;
    // 1억 line~
    //c = 2; // TypeError: Assignment to constant variable.
    ```

3.  [변수 할당방식 비교]

    Primitive : Number, String, Boolean, Null, Undefined, Symbol

    Object : Object, Array, Function

    [초기값의 비교]

    ```javascript
    var p1 = 1;
    var p2 = 1;
    console.log(p1, p2, p1 === p2); // 1 1 true

    var o1 = {name:'kim'}
    var o2 = {name:'kim'}
    console.log(o1, o2, o1 === o2); // { name: 'kim' } { name: 'kim' } false
    ```

    ![초기값의비교](https://user-images.githubusercontent.com/97032125/167300490-923447c8-cebd-4166-8ef4-60a6fc8c6c2d.png)

    [객체의 가변성]
    
    Primitive 변수

    ![Primitive](https://user-images.githubusercontent.com/97032125/167300840-a5bb08a8-f3de-4186-a12c-143a290cbc00.png)

    Object

    ![Object](https://user-images.githubusercontent.com/97032125/167301025-fd38c86f-afe5-40f8-83ca-e01ae3148249.png)

    [객체의 복사]

    ![객체의 복사](https://user-images.githubusercontent.com/97032125/167301274-e9609eb7-881d-4e66-909a-48af6b35545a.png)

    [중첩된 객체의 복사]

    배열은 주소를 가리키고 이럴 경우 원 데이터가 변경될 가능성이 있음

    배열만 concat()을 활용하여 원 데이터가 변경되는 것을 우회할 수 있음

    ![중첩된 객체의 복사](https://user-images.githubusercontent.com/97032125/167301447-58ceef8f-fee4-4237-9da4-21d9cc881b9f.png)
    