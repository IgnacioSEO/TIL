# Today I Learned (TIL)

## How to write

- #은 문서 전체의 제목으로 하나만 존재 합니다. Why? 무분별한 큰 글씨를 방지하기 위해서 입니다.
- ##은 문서의 목차 및 큰 주제에 한해서 사용합니다. why? 큰 주제를 하나의 틀에 젂기 위해서 입니다.
- ###은 큰 주제 안에서 설명을 위해 나눌 때 사용합니다. why? 중간 주제의 분별을 위해서 입니다.
- ####은 작은 주제 안에서 설명을 위해 사용합니다. why? 작은 주제의 분별을 위해서 입니다.
- #####은 ###의 안에서 추가의 설명이나 작은 목차를 늘려야 할 때 사용합니다. why? 중간 주제의 소 주제 설명을 위해서 입니다.
- ######은 기술적인 용어어에 관해 설명할 때 사용합니다. why? 용어를 따로 모아 분별하기 위해서 입니다.
- -은 문장을 나눌 때 사용하며 다음 문장이 전 문장을 설명하기 위해 사용 되는 경우는 다음 줄의 - 를 늘려가며 사용합니다. why? 문장의 연결성을 간략히 보여주기 위해서 입니다.

## Table of contents

1. [Database](https://github.com/IgnacioSEO/TIL#database)
1. [Javascript](https://github.com/IgnacioSEO/TIL#javascript)
1. [Web](https://github.com/IgnacioSEO/TIL#web)
1. [API](https://github.com/IgnacioSEO/TIL#api)
1.

# Node.js

## Computer

#### JIT (Just-in-time compilation) 0r (dynamic translation)

- JIT 컴파일 또는 동적 번역은 프로그램을 실제 실행하는 시점에 [기계어]()로 번역하는 [컴파일]() 기법입니다.
- 전통적인 입장에서 컴퓨터 프로그램을 만드는 방법은 두 가지가 있는데, 인터프리트 방식과 정적 컴파일 방식이 있습니다.
- 인터프리터 방식은 실행 중 프로그래밍 언어를 읽어가면서 해당 기능에 대응하는 기계어 코드를 실행합니다.
- 정적 컴파일은 실행하기 전에 프로그램 코드를 기계어로 번역 합니다.
- JIT 컴파일러는 두 가지의 방식을 혼합한 방식으로 생각할 수 있는데, 실행 시점에서 인터프리트 방식으로 기계어 코드를 생성하면서 그 코드를 캐싱하여, 같은 함수가 여러 번 불릴 때 매번 기계어 코드를 생성하는 것을 방지합니다.
- V8(Node.js)에서는 JIT 컴파일을 지원합니다.

# Javascript

#### 자바스크립트 실행 동작 원리

#### Object 객체

- mdn web docs 에서 설명하고 있는 객체는 아래와 같습니다. <br/>
  자바스크립트의 Object 클라스는 여러 데이터 유형 중 하나를 나타냅니다. 다양한 키 모음 및 더 복잡한 [엔티티](https://github.com/IgnacioSEO/TIL#entity)들을 저장하는데 사용됩니다.
-

[🔼위로가기](https://github.com/IgnacioSEO/TIL#today-i-learned-til)

## Technical Terms

###### Assembly language

- 기계어로 구성된 명령어를 니모닉 기호(mnemonic symbol)를 정해 사람이 좀더 쉽게 컴퓨터의 행동을 제어할 수 있도록 한 언어

###### Entity

## Web

### Internet

[Reference. Internet](https://study.wecode.co.kr/session/content/283)
[🔼위로가기](https://github.com/IgnacioSEO/TIL#today-i-learned-til)
[🔼위로가기](https://github.com/IgnacioSEO/TIL#today-i-learned-til)
[🔼위로가기](https://github.com/IgnacioSEO/TIL#today-i-learned-til)

## 서버 죽이기

- 서버를 키고 끄는 과정에서 오류가 생겨 해결방안을 기억하기 위해 작성했습니다.

### Node.js 서버가 죽지를 않아서 해결하기 위해서 stackoverflow 를 찾던 중에 나온 방법

#### lsof -i tcp:8000

#### 8000 은 임의의 값을 넣어준 것이고 본인 서버의 PORT 값을 넣어 주면 된다.

#### 그후에는 node 00000(숫자 5개) ~~~~~~ 가 나오는데 kill -9 00000(나온 숫자 5개)을 입력하면 서버가 죽는다.

## Referencesv

- [Entity-DataBase](https://rh-cp.tistory.com/78)
- [Javascript mozilla](https://developer.mozilla.org/ko/docs/Web/JavaScript)
- [Just-In-Time complilation](https://ko.wikipedia.org/wiki/JIT_%EC%BB%B4%ED%8C%8C%EC%9D%BC)
- [자바스크립트 실행 동작 원리](https://curryyou.tistory.com/237)
