[⏏️ 메인으로](https://github.com/IgnacioSEO/TIL#today-i-learned-til)

# 1. Node.js에서 bcrypt 사용하기

## 1-1. Bcrypt 설치

```javascript
$ npm install bcrypt --save
```

## 1-2. Bcrypt로 비밀번호 암호화 (Async)

```javascript
const bcrypt = require("bcrypt"); // (1)

const password = 'password'; // (2)
const saltRounds = 12; // (3)

const makeHash = async (password, saltRounds) => {
    return await bcrypt.hash(password, saltRounds); // (4)
}

const main = async () => {
    const hashedPassword = await makeHash(password, saltRounds);
    console.log(hashedPassword);
}

main()
=> b'$2b$12$76taFAFPE9ydE0ZsuWkIZexWVjLBbTTHWc509/OLI5nM9d5r3fkRG'
```

#### (1): bcrypt 모듈 import

#### (2): 암호화 할 평문

#### (3): Cost Factor

#### (4): hash() method로 암호화, 첫번째 인자로 암호화 하고 싶은 평문이 두번째 인자로 Cost Factor가 들어갑니다.

## 1-3. Bcrypt 검증

```javascript
const checkHash = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword) // (1)
}

const main = async () => {
    const hashedPassword = await makeHash("password", 12);
    const result = await checkHash("password", hashedPassword);
    console.log(result);
};

main()
=> true(or false) // (2)
```

#### (1): compare() method로 평문과 암호화된 값 비교, 첫번째 인자로 평문이 두번째 인자로 암호화된 값이 들어갑니다.

#### (2): 비교 결과, 평문과 암호화된 값을 비교해서 같으면 true를 다르면 false가 return 됩니다.

# 2. Summary

#### Node.js에서 npm을 통해 bcrypt 모듈을 설치하여 Bcrypt를 사용할 수 있습니다.

[⏏️ 메인으로](https://github.com/IgnacioSEO/TIL#today-i-learned-til)
