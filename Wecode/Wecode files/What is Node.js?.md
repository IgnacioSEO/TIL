[⏏️ 메인으로](https://github.com/IgnacioSEO/TIL#today-i-learned-til)

# 1. What is Node.js and Why Use it?

## 1-1. What is Node.js?

<center>
<img width="1103" alt="Screenshot 2022-11-07 at 8 54 46 PM" src="https://user-images.githubusercontent.com/112772324/200304210-413ba6fe-93bd-4bb4-bedc-3a3f209010e5.png">
</center>

#### Node.js를 한 문장으로 정의하면, Chrome 브라우저의 V8 Javascript 엔진을 탑재한 Server Side 오픈소스 Javascript 런타임입니다. 처음 Node.js를 접하는 개발자라면 이 설명을 한 번에 이해하기란 쉽지 않을 것입니다. Node.js가 무엇인지 이해하기 위해서는 Javascript, Chrome V8 엔진, Server Side, Runtime 이 네가지 키워드에 대해서 먼저 알아야 합니다. 물론 더 깊이 이해하기 위해서는 단일 스레드, 논 블로킹 I/O, 이벤트 기반 리액터 패턴과 같은 개념이 필요하지만 이러한 내용은 다음 Node.js 동작 원리 파트에서 다루도록 하겠습니다.

#### Javascript는 브라우저(Chrome, Safari, Internet Exploere)에서 HTML 요소 생성부터 모든 페이지 및 기능을 동적으로 처리할 수 있도록 만들어주는 브라우저에서 실행되는 프로그래밍 언어입니다. 2005년, 구글이 발표한 Google Maps는 웹에서 Javascript의 가능성을 보여줬고, javascript로 웹 서비스를 개발하려는 시도가 점점 늘어났습니다.이렇게 Javascript가 웹을 장악하면서 브라우저에서 Javascript를 더욱 빠르게 실행시킬 수 있는 엔진이 필요해 졌습니다.

#### 2008년, Google이 주도하여 C++로 개발한 고성능의 V8 Javascript 엔진이 등장합니다. V8 엔진은 Javascript 언어로 작성된 코드를 컴퓨터가 해석하기 쉬운 바이트 코드로 변환하는 역할을 수행합니다. 바이트 코드는 직접 CPU 내의 레지스터와 누산기를 어떤 식으로 사용하라고 명령하는 명령문이나 마찬가지기 때문에 사람 입장에서는 어렵지만 컴퓨터 입장에서는 한결 이해하기가 편한 방식입니다. 이렇게 속도까지 얻게 된 Javascript는 생태계가 더욱 커지게 되면서, Browser에서만 실행 가능한 Javascript를 웹 브라우저가 아닌 곳에서도 실행 가능하도록 만들고자 하는 목소리가 커지게 됩니다.

#### 2009년 11월, 당시 Joyent의 라이언 달(Ryan Dahl)이라는 미국 소프트웨어 공학자가 브라우저의 자바스크립트 엔진에서만 동작하던 자바스크립트를 브라우저 이외의 환경에서도 동작할 수 있도록 V8 엔진을 브라우저에서 독립시킨 Javascript의 또 다른 실행 환경(runtime)인 Node.js를 발표합니다. 그러면서, 브라우저에서 할 수 없는 운영체제의 파일 시스템에 접근해서 파일을 조작한다든지 등의 다양한 일들이 가능하게 되었습니다.

#### 그런데 라이언 달(Ryan Dahl)은 단순히 Javascript를 Browser 밖으로 탈출시키는 것에 목적이 있지 않았습니다. 2010년 Google Tech Talk 내용을 보면, 그가 Node.js를 개발함에 있어서 중요하게 생각했던 것은 Network Server를 만드는 것이었습니다.

#### 특히 당시 가장 인기 있는 웹 서버인 Apache HTTP Server가 최대 10,000개 이상의 동시 요청을 다루는데 있어서 갖는 문제를 해결하고자, 자바스크립트(Javascript)를 그대로 활용하면서, 이벤트 기반의 높은 처리 성능을 낼 수 있는 network 서버를 만드는 것에 관심이 있었고 그렇게 Node.js가 탄생했습니다. 이러한 특징을 가진 Node.js는 페이팔, 넷플릭스, 월마트, 링크드인, 우버 등에서 메인 또는 서브 백엔드 서버를 만드는데 사용되고 있습니다.

#### 정리하면, Node.js는 Chrome 브라우저의 V8 Javascript 엔진을 탑재한 이벤트 기반의 Server Side 오픈소스 Javascript 런타임으로, 노드에 내장되어 있는 기능들(libuv, httpd, ..)로 동시 요청 처리에 높은 성능을 갖는 HTTP Server를 구축 및 실행할 수 있습니다.

## 1-2. Why Use it?

#### 위에서 말씀드린 것과 같이 Node.js는 주로 API 서버(HTTP 서버)를 구축하는데 활용됩니다. 이번에는 HTTP API 서버를 만드는 방법이 다양한데, 왜 Node.js 기반으로 API 서버를 구현해야 하는지 살펴보겠습니다.

#### 사실 자신이 가장 잘 이해하고 사용할 수 있는 언어를 선택해서 구현하는 것이 가장 좋은 방법입니다. 그렇지만 아직 익숙한 언어가 없거나 새로운 서비스를 만들 때 무엇으로 시작하는게 좋을지 고민이라면 지금부터 설명드릴 Node.js 기반의 API 서버가 갖는 장점이 좋은 판단 기준이 될 수 있을 것 같습니다.

### 1-2-1. Frontend와 Backend 기술 스택 통합

#### 프론트엔드와 백엔드 양쪽에 동일한 언어를 사용하면 코드를 모듈로 만들어서 재사용할 수 있습니다.

#### Javascript로 훈련된 개발자는 최소한의 노력으로 서버 측 프로그래밍을 시작할 수 있습니다.

#### 현대 웹 개발에서 가장 중요한 개발팀의 전반적인 생산성 향상에 도움이 됩니다.

### 1-2-2. 빠른 처리 속도와 동시 요청 처리 성능

#### Node.js에 사용된 C++로 작성된 V8 엔진은 인터프리터 방식이 아닌 JavaScript로 작성된 코드를 컴퓨터가 해석하기 쉬운 바이트 코드로 변환하는 JIT 컴파일 방식을 채택하고 있으며, V8의 최적화 기법으로 놀라운 속도로 작업을 수행합니다. Google이 엔진에 막대한 투자를 한 덕분에 V8은 매년 성능 향상을 보여주고 있습니다.

#### Node.js에는 V8 엔진과 더불어 libuv라는 비동기 I/O에 중점을 둔 오픈 소스 라이브러리를 사용함으로써 이벤트 기반(Event Driven), Single Thread, non-blocking I/O 모델을 구현합니다. 덕분에 Node.js는 지연(blocking) 없이 동시 요청을 빠르게 처리할 수 있습니다.

### 1-2-3. MSA (Micro Service Architecture)에 적합

<center>
<img width="757" alt="Screenshot 2022-11-07 at 8 59 15 PM" src="https://user-images.githubusercontent.com/112772324/200305062-c1111578-4917-4bf7-b1cb-d4ad1719d9e8.png">
</center>

#### 이러한 MSA는 요즘 널리 사용되는 아키텍처입니다. MSA 구조 안에서는 기능이 추가될 때마다 기존 시스템에 더해지는 것이 아니라 가벼운 시스템을 새롭게 구축하는 방법으로 확장하게 됩니다. 결과적으로 Node.js는 상대적으로 가벼운 런타임이기 때문에 MSA와 아주 잘 조화되어 사용될 수 있습니다.

#### 위에서 설명한 장점 이외에도 node.js는 풍부한 생태계(라이브러리 약 80만개)를 갖고 있고, JSON 형식을 그대로 사용할 수 있는 등 많은 장점들이 있습니다. 이러한 이유로 자바스크립트와 노드로 백엔드 API 서버를 구축하는 것은 좋은 선택일 수 있습니다. Node.js의 경우 속도와 확장성을 요구하는 집중적인 I/O가 있는 실시간 애플리케이션, 웹, 앱 어플리케이션 개발에 적합한 기술입니다. 최근 Node.js는 엔터프라이즈급(Netflix, NASA, 페이팔 등)에서 Node.js를 채택해서 활발히 사용되고 있습니다.

# 2. Summary

#### Node.js는 Chrome 브라우저의 V8 Javascript 엔진을 탑재한 Server Side 오픈소스 Javascript 런타임입니다.

#### Node.js는 주로 이벤트 기반의 높은 처리 성능을 낼 수 있는 네트워크 서버(API)를 구축하는데 활용됩니다.

#### Node.js 기반의 네트워크 서버(API)의 장점은 Frontend와 Backend 기술 스택 통합, 빠른 처리 속도와 높은 동시 요청 처리 성능, 그리고 MSA (Micro Service Architecture)에 적합 등이 있습니다.

#### NVM (Node Version Manager)를 사용해서 node.js의 버전을 관리할 수 있습니다.

#### javascript 코드를 실행하는 방법은 REPL (Read Eval Print Loop)과 .js 파일에 코드를 작성하고 실행하는 방법이 있습니다.

[⏏️ 메인으로](https://github.com/IgnacioSEO/TIL#today-i-learned-til)
