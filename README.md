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

- <a href="https://github.com/IgnacioSEO/TIL/blob/main/Node.JS/What%20is%20Node.js%3F.md">What is Node.js and Why Use it?</a>
- <a href="https://github.com/IgnacioSEO/TIL/blob/main/Node.JS/Authentication%20%26%20Authorisation.md">Authentication & Authorisation</a>
- <a href="https://github.com/IgnacioSEO/TIL/blob/main/Node.JS/Session%20vs%20Token%20Based%20Authentication.md">Session vs Token Based Authentication</a>
- <a href="https://github.com/IgnacioSEO/TIL/blob/main/Node.JS/%EC%95%94%ED%98%B8%ED%99%94%EC%9D%98%20%EC%A2%85%EB%A5%98.md">암호화의 종류</a>
- <a href="https://github.com/IgnacioSEO/TIL/blob/main/Node.JS/Bcrypt.md">Bcrypt</a>
- <a href="https://github.com/IgnacioSEO/TIL/blob/main/Node.JS/JWT.md">JWT</a>
- <a href="https://github.com/IgnacioSEO/TIL/blob/main/Node.JS/Bcrypt%20%EC%8B%A4%EC%8A%B5.md">Bcrypt 실습</a>
- <a href="https://github.com/IgnacioSEO/TIL/blob/main/Node.JS/JWT%20%EC%8B%A4%EC%8A%B5.md">JWT 실습</a>
- <a href="https://github.com/IgnacioSEO/TIL/blob/main/Node.JS/%EC%9D%B8%EC%A6%9D%20%EC%A0%88%EC%B0%A8%EB%A5%BC%20%EB%8B%A4%EB%A5%B8%20%EC%97%94%EB%93%9C%ED%8F%AC%EC%9D%B8%ED%8A%B8%EC%97%90%20%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0.md">인증 절차를 다른 엔드포인트에 적용하기</a>

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

##### [Reference. 자바스크립트 코드 실행 동작 원리](https://curryyou.tistory.com/237)

- 코드 실행의 기본 원리
  - 프로그래밍 언어로 코드를 작성합니다.
  - 인터 프리팅, 컴파일 등의 과정을 통해 0, 1로 이루어진 기계어로 변환됩니다.
  - CPU는 메모리에 있는 0, 1로 이루어진 코드를 읽어 on/off 전기 신호로 실행시킵니다.
  - on/off 전기신호는 이진수 계산으로 각종 연산을 수행하며, 사실 메모리에 저장된 데이터도 전기신호입니다.
- 언어의 종류
  - 고급언어
    - Javascriprt나 JAVA처럼 사람이 이해하고 작성하기 쉬운 코드
    - 인터프리팅, 컴파일 등을 통해 최종적으로 기계어로 변환되어 CPU에서 실행됩니다.
  - 바이트코드 (Bytecode)
    - 사람이 작성한 고급언어를 가상머신이 이해할 수 있도록 변환한 코드
    - 가상머신은 바이트코드를 다양한 종류의 CPU에 맞게 기계어로 컴파일 합니다.
  - 기계어 (Machine Code)
    - CPU가 바로 읽어서 실행할 수 있는 비트 단위의 이진 코드(0, 1)
    - CPU 종류에 따라 코드를 해독하고 수행하는 방식이 다르며, 어셈블리어와 1대 1로 대응 됩니다.
- 코드 해석/변환 방식
  - 컴파일러 (Compiler)
    - 파일 전체를 읽은 뒤, 코드의 의미를 해석하고 파일 전체를 기계어로 변환합니다. (보통 이 과정을 '컴파일'이라고 합니다.
    - 인터프리터(Interpreter)
      코드를 한 줄 한 줄 읽어내려가며 한 줄씩 중간 단계의 Byrecode로 변환합니다.(보통 이 과정을 '인터프리팅'이라고 합니다.)
    - 자바스크립트는 기본적으로 인터프리터 언어입니다.
- 자바스크립트 구동원리
  - 자바스크립트 코드 작성
    - 개발자가 자바스크립트 코드를 작성합니다.
  - Byte code 변환
    - 자바스크립트 엔진은 코드를 위에서부터 한 줄씩 해석하면서 (인터프리터 언어) 가상머신이 이해할 수 있는 Byte code로 변환합니다.
  - 기계어 변환
    - 가상머신은 Byte code를 CPU가 이해할 수 있는 기계어로 변환합니다.
    - 단, CPU 마다 기계어를 다를게 해석하므로 가상 머신은 CPU 별로 최적화된 기계어를 만들어 냅니다.
  - CPU 코드 실행
    - 컴퓨터의 CPU는 가상머신이 만들어낸 기계어를 수행합니다.
    - 기계어(전기신호)대로 메모리에 테이터를 저장하고, 읽고, 연산하고, 출력하는 작업 등을 수행합니다.
- 자바스크립트 엔진 구조
  - 토크나이저(Tokenizer)
    - 자바스클자바스크립트 코드를 분석하여 '의미를 갖는 최소 단위'인 토큰(Token)으로 분해합니다.
    - 이 과정을 토크나이징(Tokenizing)이라고 부릅니다.
  - 파서(Parser)
    - 분해한 '토큰'들을 분석하여, 문법적으로 의미를 갖는 Tree 자료구조(AST: Abstract Syntax Tree)를 만듭니다
    - 이 과정을 파싱(Parsing)이라고 부릅니다. -인터프리터(Interpreter)
    - 파싱된 결과물인 AST를 byte code로 변환합니다.

#### Object 객체

- mdn web docs 에서 설명하고 있는 객체는 아래와 같습니다. <br/>
  자바스크립트의 Object 클라스는 여러 데이터 유형 중 하나를 나타냅니다. 다양한 키 모음 및 더 복잡한 [엔티티](https://github.com/IgnacioSEO/TIL#entity)들을 저장하는데 사용됩니다.
-

[🔼위로가기](https://github.com/IgnacioSEO/TIL#today-i-learned-til)

## Technical Terms

###### Assembly language

- 기계어로 구성된 명령어를 니모닉 기호(mnemonic symbol)를 정해 사람이 좀더 쉽게 컴퓨터의 행동을 제어할 수 있도록 한 언어

###### Entity

- 엔티티(Entity)
  - 엔티티는 데이터의 집합을 의미합니다.
  - 저장되고 관리되어야 하는 데이터입니다.
  - 개념, 사건, 장소등을 가리킵니다.
  - 유형 또는 무형의 대상을 가리킵니다.
- 엔티티의 특징
  - 유일한 식별자를 가지고 있어야 합니다. ex. 중요한 개인정보 등
  - 2개 이상의 인스턴스가 있어야 합니다.
  - 반드시 속성을 가지고 있어야 합니다.
  - 다른 엔티티와 최소 한 개 이상의 관계가 있어야 합니다.
  - 업무에서 관리되어야 하는 집합입니다.
- 엔티티의 종류
  - 엔티티는 유형과 무형으로 나뉘어 지고 발생하는 시점에 따라서도 나뉘어 집니다.
  - 유형과 무형에 따른 종류
    - 유형 엔티티 : 지속적으로 사용되는 엔티티
    - 개념 엔티티 : 물리적 형태가 없는 개념적으로 사용되는 엔티티
    - 사건 엔티티 : 비지니스 프로세스를 실행하면서 생성되는 엔티티
  - 발생시점에 따른 엔티티
    - 기본 엔티티(Basic Entity) : 다른 엔티티에 영향을 받지 않는 독립적으로 생성되는 엔티티, 키엔티티 라고도 한다. ex. 고객, 상품 등...
    - 중심 엔티티(Main Entity) : 기본 엔티티와 행위 엔티티 중간에 있는 것, 기본 엔티티로부터 발생되고 행위 엔티티를 생성한다. ex. 주문, 취소, 체결 등...
    - 행위 엔티티(Active Entity) : 2개 이상의 엔티티로부터 발생된다. ex. 주문취소, 취소 내용 등...

## Web

### Internet

[Reference. Internet](https://study.wecode.co.kr/session/content/283)

- 인터넷(Internet)이란 여러 통신망을 하나로 연결한다는 Inter + Network 의미합니다.
- 전 세계의 컴퓨터가 서로 연결되어 정보를 교환할 수 있는 하나의 거대한 컴퓨터 통신망 입니다.
- 즉 컴퓨터 네트워크를 의미합니다.

### Internet 의 역사

- 1950 - 모뎀(Modem)
  - 미 국방부가 방공망 시스템을 구축하기 위해 개발
  - 통신 기술과 컴퓨터 기술의 결합
  - 컴퓨터에서 사용하는 디지털 데이터를 전화선이 활용할 수 있는 아날로그 신호로 바꿈으로써 이미 광범위하게 설치되어 있는 전화선을 통해 컴퓨터 통신을 가능하게 하는 장치
  - Modem = Modulation(변조) + Demodulation(복조)
    - 변조 : 디지털 데이터를 아날로그 신호로 변환
    - 복조 : 아날로그 신호를 디지털 데이터로 변환
  - 점차 일반인들도 사용할 수 있는 네트워크가 구축되기 시작
- 1969 아르파넷(ARPAnet)
  - ARPAnet = ARPA + 분배 네트워크 + 패킷 스위칭 + 라우터
  - ARPA (Advanced Research Projects Agency)
    - '스푸트니크 충격(Sputnik shock)'의 여파로 국방연구를 보다 체계적으로 수행하기 위해 1958년 미 국방부에 의해 설립된 기관
  - Distribution Network (분배 네트워크)
    - 하나의 컴퓨터가 다른 컴퓨터와 적어도 두 가지 이상의 경로를 통해 접속되는 네트워크 방식
    - 특정한 데이터를 전송하는 한 경로가 적의 공격에 의해 파괴된다 할지라도 여분의 경로를 통해 전달될 수 있음
  - Packet Switching (패킷 스위칭)
    - 한 메세지를 여러 개의 조각(패킷)으로 분할하는 것
    - 데이터가 패킷으로 분할되어 전송되기 때문에 적의 공격에 의해 데이터가 손상된 경우에도 전체 데이터가 아닌 해당 부분만 보내면 됨
  - Router (라우터)
    - 패킷 데이터로 구성된 정보를 주고받을 때 다양한 경로를 검색하여 수신처 주소로 정확하게 전달시켜 주는 장치
  - 아르파넷을 이용한 최초의 통신 (1969)
    - ARPA 는 캘리포니아 대학 로스앤젤레스 캠퍼스(UCLA), 스탠퍼드 연구소(SRI), 산타바바라 대학(UCSB), 유타 대학(UTAH)을 아르파넷의 연결 지점으로 선정
    - The First ARPAnet Network, December 1969
- 1983 - TCP/IP & 인터넷(Internet)
  - 네트워크 기술에 대한 관심도 증가, 다양한 네트워크의 등장
    - 1971년 - 전자우편(e-mail) 개발
    - 1972년 - 워싱턴 제 1회 국제컴퓨터통신학술회의, 아르파넷의 시연
    - ARPAnet 이외의 새로운 네트워크의 구축 (ex. Telnet, Usenet, Bitnet, etc)
  - TCP/IP - 인터넷의 기술적 표준
    - 다양한 네트워크가 등장하면서 그것들을 서로 연결하기 위한 표준(기준)의 필요
    - 프로토콜(Protocol)
      - 통신시스템이 데이터를 교환하기 위해 사용하는 규약
    - 다양한 프로토콜 중 TCP/IP 가 인터넷의 표준 프로토콜로 선정
      - TCP : Transmission Control Protocol
      - IP : Internet Protocol
    - 인터넷의 탄생
      - 이후 인터넷은 TCP/IP 를 통해 서로 연결된 네트워크를 의미하게 됨

### Web (World Wide Web, W3)

- 웹이란?
  - "Collection of information which is accessed via the Internet."
  - 월드 와이드 웹(World Wide Web)은 인터넷 네트워크에 연결된 컴퓨터를 통해 사람들이 정보를 공유할 수 있는 전 세계적인 정보 공간
  - 간단히 줄여서 웹(Web)이라고 부름
- 1990년, 웹의 탄생
  - 인터넷이 등장하고 30년 뒤인 1990년에 유럽 입자 물리 연구소(CERN)의 컴퓨터과학자인 팀 버너스리(Tim Berners-Lee)가 인터넷 기반 하이퍼텍스트 시스템인 세계 최초의 웹 브라우저인 WWW(World Wide Web)이라는 프로그램 개발
  - 세계의 여러 대학과 연구기관에서 상호간의 신속한 정보 교환과 문서 유실 방지를 위한 목적으로 프로그램 고안
  - 초창기 월드와이드웹(World Wide Web)은 웹 브라우저의 이름
  - 1990년 웹이 출현하며 인터넷 통신이 대중적으로 사용 되기 시작
  - 인터넷을 사용하는 컴퓨터들 간의 정보 공간이라는 의미로 발전
  - 결국 월드 와이드 웹의 발전에 따라 월드와이드웹 브라우저는 후에 혼돈을 피하기 위해서 Nexus라는 이름으로 변경
- 인터넷에서 웹으로 발전
  - 웹은 기본적으로 Hypertext를 통해서 정보를 전달. 이를 가능하게 하기 위해서 팀 버너스리(Tim Berners-Lee)는 HTML과 HTTP 개발
  - Hypertext
    - 연결된 순서에 관계없이 사용자들이 원하는 정보에 접근할 수 있도록 제공되는 텍스트
    - 당시의 인터넷 문서들은 독립적인 개체로 존재
    - 기존의 다양한 네트워크를 연결한 검색이 불가능
    - Hypertext가 Internet과 결합하여 HTML의 주요 구성요소로 발전
  - HTML
    - Hypertext는 HTML(Hypertext Mark-up Language)로 작성
  - HTTP
    - 곧 이어 Hypertext 연결 규약인 HTTP (Hyper Text Transfer Protocol) 탄생
    - HTML을 주고 받을 수 있게 됨
- 웹의 등장과 인터넷의 대중화
  - 웹 서버라는 프로그램을 만들고 그 프로그램이 설치돼 있는 컴퓨터에 info.cern.ch 라는 주소를 부여
  - “Home of the first website”
  - 우리가 일반적으로 생각하는 인터넷의 대중화는 이렇게 웹이 등장하면서 시작됨.

### 인터넷과 웹이 불러온 혁신

- 유통 - 인터넷과 웹이 불러온 가장 큰 혁신
  - 정보 유통의 발전
  - 예전에는 소프트웨어를 구입 하려면 물리적인 매개체가 필요
  - ex. 신문 - 물리적인 신문 배달 → 인터넷 신문
- 웹 기반의 SW 서비스의 시작
  - 정보의 유통이 혁신적으로 발전하며 많은 개발자들이 창업
  - 인터넷에 본인들이 만든 SW 를 올려서 판매 시작
  - 실리콘 밸리, 닷컴붐(Dot-com bubble) (2000년대)
  - Yahoo, Google, Amazon, etc
  - 1세대 웹 서비스의 시작
    - 1세대 웹 서비스 → 정적인 사이트(ex. Yahoo 2000)
    - 정보 전달이 목적
    - 이 때의 기술은 HTML, CSS 가 전부

### Web Architecture History

#### Client & Server

- Client
  - 고객
  - 웹 서비스를 사용하는 고객 → Web Browser
  - cf. Browser - Chrome, Safari, Internet Explorer, etc
- Server
  - 제공자
  - 웹 서비스를 제공하는 서버

#### 1세대 웹 - 정적인 웹

- 1세대 웹 - 정적인 웹
  - 단순한 정보 제공 위주
  - 기능이 많지 않음
  - User Interaction 요구 없음
  - 로직(동적) 없음
  - HTML, CSS 자체가 정적
  - 서버가 HTML 페이지 전체를 클라이언트에게 전송
- Yahoo(1세대)
  - Yahoo 1994
  - Yahho 1996

#### 2세대 웹 - 동적인 웹

- 웹서비스의 발전 - 동적인 웹
  - 동적인 2세대 웹 서비스의 출현
  - 웹 기반의 언어 자바스크립트의 출현
  - 단순한 정적 페이지가 아닌 다이나믹한 요소들이 요구
  - 서버와 클라이언트가 HTML 페이지와 JavaScript 로직을 통해 필요한 데이터를 주고 받으며 User Interaction 구현
- 아직 프/백 구분 없이 동일한 서버
  - 자바스크립트의 역할 증대, 하지만 JavaScript 는 일부분에서만 사용
  - 동일한 서버에서 HTML, CSS, Javascript, 그리고 Data 전부가 클라이언트로 전송되는 형태
  - 프론트엔드 / 백엔드 구분 없음
- Yahoo(2세대)
  -Yahoo 2000
  -Yahoo 2001

#### 3세대 웹

- SPA (Single Page Application) 방식 등장
  - 단일의 HTML 페이지로 전체 웹 서비스 구현
  - 단일 HTML 페이지에 메인 Javascript 파일이 포함
  - JavaScript 가 HTML 요소 생성부터 모든 페이지 및 기능을 동적으로 처리
  - 웹 페이지 렌더링에 필요한 Javascript 코드는 최초의 통신에서 한번에 송수신
  - 그 이후로는 서버와 실시간으로 데이터를 주고 받으며 필요한 화면을 동적으로 구성
- 프론트엔드와 백엔드 개발의 분리
  - 기존에는 서버가 페이지 구성에 필요한 모든 요소(HTML, JavaScript, Data)를 매번 전송
  - SPA 의 등장 (FE)
    - 웹 페이지 렌더링에 필요한 Javascript 코드는 최초의 통신에서 한번에 송수신
    - 그 이후로는 서버와 실시간으로 데이터를 주고 받으며 필요한 화면을 동적으로 구성
  - 자연스럽게 웹 브라우저가 필요한 서버와의 통신은 데이터 전송 및 연산 작업이 대부분이됨 (BE)
  - 서버의 분리 & 업무의 분리 → 프론트엔드와 백엔드 개발의 분리
  - Yahoo(3세대)
    - Yahoo 2011
    - Yahoo 2013
    - Yahoo 2016

### Modern Web Development

#### Modern Web System Architeture

- 웹서비스의 복잡성 증가
  - User Interaction 의 중요성 증가
  - 사용자 수
  - 데이터의 양 증가
- 이전에 겪지 못한 두 가지 문제
  - 1)동시 접속자 수
  - 2)데이터의 양
- System Architecture 발전
  - FE 서버 / BE 서버 분리
  - BE API 서버의 세분화
  - 데이터 요청 분산 처리 (API Gateway)

#### Modern Web Development Team

- Product
  - Product manager(기획자)
    - 개발하고자 하는 서비스를 정의하고 기획하는 역할을 담당하는 직군
    - 우리나라에서는 PM 이 개발자의 상사 같은 지위를 가지고 있는 곳이 많은데, 미국 에서는 그렇지 않다.
    - PM 과 개발자는 담당하는 일이 다른 팀원 이지 서로 상하관계가 아니다.
  - Designer
    - 웹 시스템 개발에는 UI(User Interface) 및 UX (User Experience) 를 구현하는 역할을 담당
    - 사용자가 직접 경험하고 사용하는 서비스를 눈에 보기 좋게, 사용하기 편리하게 디자인하는 역할
  - Scrum Master / Project Manager
    - 프로젝트의 일정 및 출시 관리를 담당하는 역할
    - Scrum 개발론이 개발팀 에서 널리 사용 됨에 따라 scrum process 를 관리하고 코치하는 직군이 생김.
  - Tester
    - 시스템을 테스트하여 검증하는 역할을 담당하는 직군
    - QA (Quality Assurance) - 직접 manual testing을 실행하는 직군.
    - Software Engineer in Test / Test Automation Engineer - Manual testing이 아닌 자동 테스트 시스템을 전문으로 구현하는 개발자.
- Frontend
  - Frontend Developer
    - HTML, CSS, JavaScript 로 프론트엔드 시스템을 구현하는 역할
    - 사용자와 가장 밀접하게 연결되어 있는 개발자
  - Publisher
    - HTML, CSS 만 담당하는 한국만의 고유 직군
    - 점차 없어지는 추세
- Backend
  - Backend Developer
    - 백엔드 시스템을 개발하는 역할.
    - Backend 개발자들도 크게 2가지로 나뉨
      - Backend 에서 좀더 앞 쪽을 담당하는 (즉 API 개발을 담당하는) 개발자.
      - Backend에서도 완전 뒤쪽, 즉 데이터 수집, 분석, 관리 등의 데이터 관련 시스템을 개발하는 개발자.
      - (경력이 높아질 수록 좀 더 난이도가 있는 뒷 부분에 해당하는 시스템을 많이 구현.) → DevOps
  - Full Stack Developer
    - Frontend 와 Backend 를 모두 개발하는 개발자를 말합니다.
    - Node.js 를 통해 자바스크립트로 프론트, 백 둘 다 개발이 가능해지면서 풀스택 개발자 증가하고 있습니다.
    - 둘다 한다고 하니 멋있어 보이지만 개발 입문자는 추천하지는 않습니다.
    - 요즘 기술은 너무 발전해있기 때문에, 한 분야를 깊게 파는것이 중요합니다. 여러 분야를 넓게 하는 것은 나름의 장점이 있지만, 결국에 전문가가 되기는 어려운 면이 있습니다.
    - 선택과 집중. 한 분야의 전문가가 된 후에 필요한 정도로 나머지 분야에 대해 학습하는 것을 추천합니다.
- Dev System / Data
  - DevOps
    - “Development”와 “Operation”의 합성어로, 직군이라기 보다는 개발 분야에서 나타나는 문화 혹은 추세를 말합니다.
    - 데브옵스는 이름 그대로 개발자가 시스템 개발뿐만 아니라 시스템 운영(operation)까지 담당하는 것을 이야기합니다.
    - AWS 등의 클라우드 서비스가 발달함에 따라 서버 구축 및 운영 등의 시스템 인프라스트럭처 구축과 관리를 하는 데 있어서 실제 하드웨어 서버를 직접 다루지 않다도 되게 되었습니다.
    - 자연스럽게 시스템 운영 담당자가 따로 필요없이 개발자들이 직접 시스템 인프라스트럭처를 구현하는 추세가 널리 퍼지게 되었습니다.
  - SysOps
    - 시스템 인프라스트럭처(system infrastructure)의 구현과 관리 및 운영을 담당하는 직군입니다. DevOps와 다르게 실제 하드웨어를 다룰 수 있는 직군입니다.
    - 서버를 직접 설치하고 운영시키며, 그 외 물리적인 네트워크 구축 및 운영 등 시스템 인프라스트럭처 운영에 필요한 모든 부분을 담당합니다.
    - 주로 직접 데이터 센터(data center)를 사용하여 시스템을 운영하는 회사에 필요한 직군입니다.
    - AWS 등의 클라우드 서비스가 널리 사용되며 데브옵스가 발전함에 따라 예전보다는 시스옵스 팀에 대한 수요가 많이 줄어들고 있는 추세입니다.
    - 실제로 넷플릭스 같은 대기업도 시스템 인프라스트럭처를 전부 AWS 상에서 구현해 놓았기 때문에 별도로 시스옵스팀이 없는 것으로 알려져 있습니다.
  - Data Scienist
    - 데이터 사이언티스트는 데이터 분석에 필요한 알고리즘과 모델링의 구현을 담당하는 직군입니다.
    - 웹 시스템의 규모가 커지고 빅데이터 기술이 발달하면서 많은 기업들이 방대한 양의 데이터를 수집할 수 있는 능력이 생겨 나게 되었습니다.
    - 그리고 이 방대한 양의 데이터를 분석하여 고객들의 니즈(needs)를 더 이해하고 파악함으로써 더 나은 서비스를 제공하고자 하는 기업들이 늘어나게 되었습니다.
    - 그에 따라 많은 양의 데이터를 분석해서 새로운 정보와 가치를 만들어 낼 수 있는 데이터 사이언티스트라는 직군이 생기게 되었습니다.
    - 데이터 사이언티스트들은 대부분 수학, 통계학, 물리학 등의 분야에서 석사 이상의 학위를 가지고 있고, 박사 학위를 가지고 있는 사람도 많습니다.
  - Data Engineer
    - 데이터 엔지니어는 데이터 사이언티스트들과 함께 일하는 직군입니다.
    - 주로 데이터 사이언티스트가 데이터를 분석할 수 있도록 데이터를 추출하고 가공해서 저장하는 일련의 파이프라인 시스템을 구현하는 역할을 담당합니다.

#### Summary

- 인터넷(Internet)이란 전 세계의 컴퓨터가 서로 연결되어 정보를 교환할 수 있는 하나의 거대한 컴퓨터 통신망입니다.
- 웹(Web)이란 인터넷 네트워크를 이용하여 통신되는 정보의 집합입니다.
- 1세대 웹의 특징은 웹 서버가 HTML 페이지 전체와 CSS를 클라이언트에 전송하는 구조입니다.
- 2세대 웹의 특징은 동일한 서버에서 HTML, CSS, Javascript, 그리고 Data 전부가 클라이언트로 전송하는 구조입니다.
- 3세대 웹의 특징은 SPA(Single Page Application)의 등장으로 단일 HTML 페이지와 메인 Javascript 파일로 HTML 요소 생성부터 모든 페이지 및 기능을 동적으로 처리할 수 있게 됩니다.
- 현대 웹 시스템 아키텍처에서는 동시 접속자 수와 데이터 양의 증가로 Micro Service Architecture 구조를 갖습니다.
- 현대 웹 시스템 개발에는 PM, Designer, Scrum Master, Tester, Frontend Developer, Backend Developer, Full Stack Developer, DevOps, SysOps, Data Sientist, Data Engineer 직군이 필요합니다.

[🔼위로가기](https://github.com/IgnacioSEO/TIL#today-i-learned-til)

## API

### API 정의

- API(Application Programming Interface)의 사전적 정의는 “응용 프로그램에서 사용할 수 있도록, 운영 체제 혹은 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스”를 말합니다. API의 개념을 쉽게 이해하기 위해서는 Interface가 무엇을 의미하는지 이해하는 것이 중요합니다.

### Interface

##### Interface란?

- 인터페이스(Interface)란 서로 다른 두 개의 물체가 상호간에 정보나 신호를 주고받기 위해서 필요한 접점이나 경계면을 말합니다. 즉, 상호간에 소통을 위해 만들어진 접점입니다.

##### 실생활 예제 - 식당 점원

- 인터페이스는 상호간에 소통을 위해 만들어진 접점이라는 점에서 실생활에서도 흔히 찾아볼 수 있습니다. 여러분이 식당에서 음식을 주문하는 과정에서도 인터페이스를 찾아볼 수 있습니다.

- 손님 <-> 점원(손님과 요리사 사이의 소통을 위한 접점 - Interface) <-> 요리사

- 식당에는 음식을 주문 받는 점원과 요청에 맞게 음식을 요리하는 요리사 그리고 음식을 주문하는 손님이 있습니다.

- 손님은 점원이 가져다준 메뉴판을 보면서 음식을 선택하고, 점원이 주문을 받아 요리사에게 요청을 합니다. 요리사는 어떤 손님이 어떤 음식을 주문 했는지는 모르지만 요청이 들어온 음식(스테이크, 파스타, 피자 등)을 요리해서 점원에게 전달합니다. 마지막으로 점원은 전달받은 요리를 식기류, 물과 함께 손님에게 전달합니다.

- 여기서 점원의 역할을 한 번 살펴보겠습니다. 점원은 손님에게 메뉴를 알려주고, 주방에 주문받은 요리를 요청합니다. 그다음 주방에서 완성된 요리를 손님께 다시 전달합니다. 여기서 점원이 손님과 요리사 사이에서 소통을 주관하는 접점(Interface) 입니다.

### UI (User Interface) - 컴퓨터의 사용자 인터페이스

##### UI란?

- 사용자 인터페이스(User Interface, UI)는 인간과 컴퓨터 사이에서 의사소통을 목적으로 만들어진 물리적, 가상적 접점(매개체)을 의미합니다. 사용자 인터페이스는 인간과 컴퓨터 사이에서 상호간에 소통할 수 있도록 입력, 출력 역할을 수행합니다.

##### UI 종류

- Hardware User Interface

  - 컴퓨터에 원하는 작업을 입력하기 위해서 키보드라는 인터페이스를 통해서 작업을 명령합니다. 처리한 결과를 다시 사용자에게 보여주는 역할은 모니터가 하는 것입니다.

- Graphical User Interface (GUI)
  - GUI는 사용자가 그래픽 아이콘을 통해서 컴퓨터와 정보 교환을 가능하게 해주는 인터페이스입니다. 마우스 포인터, 프로그램 아이콘, 드래그앤 드랍 등이 있습니다.
- Web User Interface (WUI)
  - 웹 브라우저 상에서의 인터페이스로 화면의 디자인, 그 안을 이루는 배너, 아이콘, 검색 버튼, 결제 버튼 등 시각적인 요소를 말합니다.

### API (Application Programming Interface)

##### API란 무엇인가?

- 앞에서 Interface는 소통하기 위한 접점, UI는 사용자가 소통하기 위한 접점이라고 했습니다. 그렇다면 API란 무엇과 무엇의 소통을 위한 접점 혹은 경계면이라고 할 수 있을까요?

- API란 Application Programming Interface의 약자로 응용 프로그램(Application)들이 서로 소통하기 위한 접점입니다.
- 여기서, 응용 프로그램(Application)이란 운영체제(MacOS, Linux, Window 등)에서 실행되는 모든 소프트웨어를 말합니다. 크롬(Chrome) 브라우저, Slack, KakaoTalk, 메모장, Keynote, Excel 등이 있습니다.
- 그렇다면, API는 응용 프로그램과 응용 프로그램(Application) 사이에서 소통을 위한 인터페이스(Interface) 즉 접점 혹은 경계면이라고 할 수 있습니다. 여기서 접점 혹은 경계면은 다른 응용 프로그램이 될 수도 있고, 애플리케이션 내에 어떤 함수가 될 수도 있습니다.

##### 웹 서비스에서의 API

- API가 애플리케이션 사이에서 소통 역할을 하는 접점이라고 했습니다. 그렇다면 웹/앱 서비스에 있어서 API란 무엇 일까요?

- 여러분이 인스타그램 서비스를 만들고 운영한다고 가정해 보겠습니다. 사용자가 서비스를 원활하게 이용하기 위해서 필요한 운영체제 혹은 서버에서 실행되고 있어야하는 애플리케이션은 크게 3가지를 얘기할 수 있습니다. 먼저, 사용자에게 웹 사이트를 표출하기 위해서 필요한 클라이언트 애플리케이션(Chrome 브라우저)와 인스타그램 서비스의 모든 정보가 저장되어 있는 데이터베이스 애플리케이션(MySQL, Oracle, Postgres)이 필요합니다.

- 여기서 브라우저는 여러가지 이유로 데이터베이스에서 서비스에 필요한 정보들을 직접 요청해서 받아올 수 없습니다. 그렇기 때문에 중간에서 소통해줄 수 있는 인터페이스가 필요합니다. 바로 이러한 소통의 역할을 해주는 응용 프로그램(애플리케이션)이 API 입니다.

- 클라이언트(Client) 애플리케이션
  - 사용자가 서비스를 이용하기 위해서 사용하는 웹 브라우저 혹은 모바일 애플리케이션을 말합니다.
  - Chrome, Safari, Internet Explorer, Mobile App 등이 있습니다.
- 데이터베이스(Database) 애플리케이션
  - 인스타그램 서비스가 제대로 운영되기 위해서는 수 많은 이용자들의 데이터(회원 정보, 게시물, 댓글, 좋아요, 사진, 영상)를 영구적으로 보존할 수 있는 데이터베이스 애플리케이션이 필요합니다.
- API(Application Programming Interface) 애플리케이션
  - 사용자가 웹 브라우저를 통해서 인스타그램 웹 사이트에 접속할 때 보여지는 모든 데이터(게시글)와 데이터 관련 작업(게시글에 댓글 달기)은 데이터베이스와 소통하고 있기 때문에 가능한 일 입니다.
  - 여기서 클라이언트(브라우저)와 데이터베이스(인스타그램 서비스의 데이터 집합) 두 애플리케이션 사이에서 데이터를 읽거나 쓰기위해서 필요한 접점이 API입니다.

#### Summary

- 인터페이스(Interface)란 서로 다른 두 개의 물체가 상호간에 정보나 신호를 주고받기 위해서 필요한 접점이나 경계면을 말합니다.
- 사용자 인터페이스(User Interface, UI)는 인간과 컴퓨터 사이에서 의사소통을 목적으로 만들어진 물리적, 가상적 접점(매개체)을 의미합니다.
- API란 Application Programming Interface의 약자로 응용 프로그램(Application)들이 서로 소통하기 위한 접점입니다. 여기서, 응용 프로그램(Application)이란 운영체제(MacOS, Linux, Window 등)에서 실행되는 모든 소프트웨어를 말합니다.
- 웹 시스템에서 API란 클라이언트(브라우저)와 데이터베이스(인스타그램 서비스의 데이터 집합) 두 애플리케이션 사이에서 데이터를 읽거나 쓰기위해서 필요한 접점이 API입니다.

[🔼위로가기](https://github.com/IgnacioSEO/TIL#today-i-learned-til)

## Database

### MySQL

- 웹 시스템에서 관계형 데이터베이스(Relational Database Management System, RDBMS)은 굉장히 중요한 역할을 합니다. 대부분의 회사에서 서비스 초기에는 범용 RDBMS를 선택하고, 사용량이나 데이터의 크기가 커지면 일부 도메인 또는 테이블의 데이터만 전용 DBMS로 이전해서 확장하는 형태로 사용합니다.
- 또한 관계형 데이터베이스 MongoDB와 같은 비관계형 데이터베이스(NoSQL)에서는 할 수 없는 트랜잭션과 같은 기능들을 제공해 줍니다.
- 그렇기 때문에 어떤 서비스를 개발하더라도 관계형데이터베이스(RDBMS)를 사용할 수 밖에 없으며, 다양한 RDBMS(Oracle RDBMS, MySQL, SQL server(MS), PostgreSQL) 중에서도 MySQL 서버가 가장 많이 사용되고 있습니다. 이는 다른 DBMS보다 MySQL 서버의 노력과 시간 투자 대비 효율이 가장 높다는 것을 의미하며, 서비스 개발자라면 MySQL 서버를 이해하기 위해서 시간을 투자하여 학습해야 합니다.

### MySQL의 역사

- MySQL의 역사는 1979년 스웨덴의 TcX라는 회사의 프로그래머인 Michael Widenius(Monty)가 유닉스 기반의 데이터베이스 관리 도구인 UNIREG를 개발하면서 시작되었습니다. 1994년 인터넷의 발전에 따라서 UNIREG를 웹 기반 서비스에서 데이터베이스 시스템으로 사용하고자 했었습니다.
- 그러나 웹에서 동적인 처리가 중요해진 시점에서 UNIREG는 적합하지 않았습니다. 대안으로 mSQL(miniSQL)을 찾았지만, 인덱싱(Indexing)을 지원하지 않는 등 성능이 좋지 않았습니다. 이후 TcX는 mSQL의 개발자와 함께 문제를 해결하고자 많은 시도를 했지만 실패하게 됩니다.
- 결국 David Hughes의 거부로 인해 TcX는 마침내 자체적인 새로운 데이터베이스 시스템 개념을 설계하고 개발하기로 결정했습니다. 1995년 5월 UNIREG와 mSQL의 조합으로 MySQL 버전 1.0이 세상에 등장하게 됩니다. 이후 1996년 일반인들에게 공개되었습니다. 그리고 2000년 TcX에서 MySQL을 개발한 중심 인물(Monty, David)이 MySQL AB라는 회사로 독립함과 동시에 FPL(Free Public License) 정책을 취하게 됩니다. 라이센스 정책은 “MySQL 엔터프라이즈 에디션”과 “MySQL 커뮤니티 에디션" 두 가지이며, 커뮤니티 에디션은 일반 사용자가 무료로 사용할 수 있습니다.
- 현재는 썬마이크로시스템즈를 거쳐 오라클로 인수되어 소스코드 레벨의 리펙토링부터 시작해서 역사상 가장 큰 발전 발전의 시기를 거치면서 발전하고 있습니다. MySQL 5.5~5.7 버전 - 안정성과 성능 개선, MySQL 8.0 (최신) 버전 - 사용 DBMS 기능 장착.

### Why MySQL

- 서비스 개발에서 DBMS(Database Management System)를 선택해야할 때, 어떤 DBMS를 선택해야 할까? 당연히 내가 가장 잘 알고 활용할 수 있는 DBMS를 선택하는 것이 가장 좋은 선택이겠지만, 데이터베이스를 선택하는 기준은 안정성, 성능과 기능, 커뮤니티(인지도) 순서로 정리할 수 있습니다.

#### 1. 안정성 / 성능과 기능

- DBMS의 안정성은 더 설명이 필요 없는 기준일 것입니다. 때로는 성능이나 기능을 안정성보다 중요시하는 사람들이 있는데, 주로 새로운 시도를 좋아하는 개발자들일 가능성이 높습니다. 성능이나 기능은 돈이나 노력으로 해결할 수 있는 문제지만, 안정성은 그렇지 않습니다. 그렇기 때문에 안정성을 먼저 선택의 기준으로 두고 다음으로 성능과 기능, 그리고 커뮤니티나 인지도를 함께 고려해야 합니다. Uber, Airbnb, 그리고 Shopify를 포함하여 5,717개의 회사가 RDBMS로 MySQL을 사용하고 있는 만큼 안정성이 보장된 DBMS입니다.

#### 2. 커뮤니티와 인지도

- 소프트웨어의 커뮤니티와 인지도는 DBMS를 사용하여 개발하는 과정중에 필요한 지식이나 경험을 얻는데 있어서 중요한 선택 기준이 됩니다. 아래 [그림 1-4]을 보시면 DB-Engines.com에서 제공하는 2022년 4월 기준 DBMS의 순위입니다.
- DB-Engine 랭킹은 DBMS의 현재 인지도에 따라 결정됩니다. 대표적인 기준은 다음과 같습니다.

  - 웹 사이트 언급 횟수 (Number of mentions of the system on websites)
  - 구글 트렌드 검색 빈도 (General interest in the system)
  - 기술 토론 빈도 (Frequency of technical discussions about the system)
  - 채용 시장(Number of job offers, in which the system is mentioned)
  - 전문가 집단의 숫자 (Number of profiles in professional networks, in which the system is mentioned.)
  - SNS 언급 횟수 (Relevance in social networks. We count the number of Twitter tweets, in which the system is mentioned.)
  - [그림 1-4]에서 보여주는 결과를 보면 MySQL 서버는 안정성, 성능과 기능, 그리고 커뮤니티 측면에서 충분히 좋은 선택지라는 것을 알 수 있습니다.

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
