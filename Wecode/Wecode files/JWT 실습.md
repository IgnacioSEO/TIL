[⏏️ 메인으로](https://github.com/IgnacioSEO/TIL/tree/main/Wecode#table-of-contents)

# 1. Express에서 JWT 사용하기

## 1-1. jsonwebtoken 모듈 설치

```javascript
$ npm install jsonwebtoken --save
```

## 1-2. JWT 발급 (HS256)

```javascript
const jwt = require('jsonwebtoken'); // (1)

const payLoad = { foo: 'bar' }; // (2)
const secretKey = 'mySecretKey'; // (3)
const jwtToken = jwt.sign(payLoad, secretKey); // (4)

console.log(jwtToken)
=> 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2NTA1NTYxMzZ9.YAMgUMLhiVUwkRTr2rpOrIyWN0cTGLxsxZBqLAaKWUU'
```

#### (1): jsonwebtoken 라이브러리 import

#### (2): 실제로 전달할 내용인 Payload 정의

#### (3): Secret Key, 실제로 Secret Key는 노출되면 안 되기 때문에 환경변수로 관리해 주어야 합니다.

#### (4): sign() method로 JWT 발급, 첫번째 인자로 Payload가 두번째 인자로 Secret Key가 들어 갑니다. 세번째 인자로 option을 추가 할 수 있는데, option이 존재하지 않으면 HS256 알고리즘으로 JWT가 발급 됩니다.

## 1-3. JWT 확인

```javascript
const decoded = jwt.verify(jwtToken, secretKey); // (1)

console.log(decoded)
=> { foo: 'bar', iat: 1650555667 } // (2)
```

#### (1): verify() method로 JWT의 Payload 확인, 첫번째 인자로 JWT가 두번째 인자로 토큰을 만들 때 사용한 Secret Key가 들어갑니다. 토큰을 만들 때 사용한 Key가 아니라면 에러가 발생합니다.

#### (2): JWT가 가지고 있던 Payload

# 2. Summary

#### jsonwebtoken 모듈을 사용하여 Node.js에서 JWT를 활용할 수 있습니다.

[⏏️ 메인으로](https://github.com/IgnacioSEO/TIL/tree/main/Wecode#table-of-contents)
