# Today I Learned (TIL)

## Table of contents

### Computer

#### JIT (Just-in-time compilation) 0r (dynamic translation)

- JIT 컴파일 또는 동적 번역은 프로그램을 실제 실행하는 시점에 [기계어]()로 번역하는 [컴파일]() 기법입니다.
- 전통적인 입장에서 컴퓨터 프로그램을 만드는 방법은 두 가지가 있는데, 인터프리트 방식과 정적 컴파일 방식이 있습니다.
- 인터프리터 방식은 실행 중 프로그래밍 언어를 읽어가면서 해당 기능에 대응하는 기계어 코드를 실행합니다.
- 정적 컴파일은 실행하기 전에 프로그램 코드를 기계어로 번역 합니다.
- JIT 컴파일러는 두 가지의 방식을 혼합한 방식으로 생각할 수 있는데, 실행 시점에서 인터프리트 방식으로 기계어 코드를 생성하면서 그 코드를 캐싱하여, 같은 함수가 여러 번 불릴 때 매번 기계어 코드를 생성하는 것을 방지합니다.
- V8(Node.js)에서는 JIT 컴파일을 지원합니다.

### Javascript

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
  자바스크립트의 Object 클라스는 여러 데이터 유형 중 하나를 나타냅니다. 다양한 키 모음 및 더 복잡한 [엔티티](#######entity)들을 저장하는데 사용됩니다.
-

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

## References

- [Entity-DataBase](https://rh-cp.tistory.com/78)
- [Javascript mozilla](https://developer.mozilla.org/ko/docs/Web/JavaScript)
- [Just-In-Time complilation](https://ko.wikipedia.org/wiki/JIT_%EC%BB%B4%ED%8C%8C%EC%9D%BC)
- [자바스크립트 실행 동작 원리](https://curryyou.tistory.com/237)
