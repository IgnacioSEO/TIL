# Today I Learned (TIL)

## Table of contents

### Javascript

#### Object

- mdn web docs 에서 설명하고 있는 자바스크립트는 아래와 같습니다. <br/>
  자바스크립트의 Object 클라스는 여러 데이터 유형 중 하나를 나타냅니다. 다양한 키 모음 및 더 복작한 엔티티들을 저장하는데 사용됩니다.

  - 연관된 데이터들을 하나의 컨테이너에서 관리하기 위한 데이터 구조 <br/>
  - 그렇다면 무엇이 객체 일까? <br/> 자바스크립트에서는 숫자, 문자열, 불리언, undefined 타입을 제외한 모든 것이 객체다. 하지만 숫자, 문자열, 불리언과 같은 원시 타입은 값이 정해진 객체로 취급되어, 객체로서의 특징도 함께 가지게 된다.

- 객체 생성자

```javascript
const obj = new Object();

console.log(obj);
```

- 객체 리터럴

```javascript
const obj2 = {};

console.log(obj2);

const bootcamp = {
  name: "wecode",
  age: 3,
};

console.log(bootcamp);
```

- 객체에 데이터를 접근

```javascript
console.log(bootcamp["name"]);
```

- 객체에 데이터 넣기

```javascript
bootcamp.color = "black";

bootcamp.say = () => console.log("hello");

bootcamp.say();
```

- 객체에 데이터를 수정하기

```javascript

```

## Technical Terms

## References

[Javascript mozilla](https://developer.mozilla.org/ko/docs/Web/JavaScript)
