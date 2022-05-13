// 1. 수업소개

// 2. 이름에 대한 불편함.
/*
var v = 1;
// 1억 line코드가 있다고 가정
v = 2; // 누군가 v가 1인지 모르고 변경해버릴 수 있음
console.log('v :', v);


// 위와 같은 경우 v값이 바뀌지 않도록 하는 방법은 const 키워드로 변수를 선언하면 된다.
const c = 1;
// 1억 line~
//c = 2; // TypeError: Assignment to constant variable.
*/


// 3. 변수 할당방식 비교
//Primitive : Number, String, Boolean, Null, Undefined, Symbol
//Object : Object, Array, Function

// 3.1 초기 값의 비교
/*
var p1 = 1;
var p2 = 1;
console.log(p1, p2, p1 === p2); // 1 1 true

var o1 = {name:'kim'}
var o2 = {name:'kim'}
console.log(o1, o2, o1 === o2); // { name: 'kim' } { name: 'kim' } false
*/

// 3.3 객체의 복사
/*
var o1 = {name:'kim'}
var o2 = Object.assign({}, o1);
o2.name = 'lee';
console.log(o1, o2, o1 === o2); // { name: 'kim' } { name: 'lee' } false
*/

// 3.4 중첩된 객체의 복사
/*
var o1 = {name:'kim', score:[1,2]}
var o2 = Object.assign({}, o1);
o2.score.push(3);
console.log(o1, o2, o1 == o2, o1.score == o2.score); // { name: 'kim', score: [ 1, 2, 3 ] } { name: 'kim', score: [ 1, 2, 3 ] } false true

var o3 = {name:'kim', score:[1,2]}
var o4 = Object.assign({}, o3);
o4.score = o4.score.concat();
o4.score.push(3);
console.log(o3, o4, o3 == o4, o3.score == o4.score); // { name: 'kim', score: [ 1, 2 ] } { name: 'kim', score: [ 1, 2, 3 ] } false false
*/