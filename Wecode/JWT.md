[⏏️ 메인으로](https://github.com/IgnacioSEO/TIL#today-i-learned-til)

# 1. JWT(JSON Web Token)

## 1-1. JWT 란?

#### JWT(JSON Web Token)는 클라이언트(사용자)와 서버 간에 정보를 JSON 개체로 안전하게 전송하기 위한 개방형 표준(RFC 7519)입니다. SAML (Security Assertion Markup Language Token) 보다 크기가 작아 더 컴팩트하게 사용할 수 있습니다. JWT는 JSON 개체에 기본정보, 전달할 정보, 검증 정보를 모두 담고 있습니다. 또한, JWT는 전자 서명이 되어있기 때문에 검증 과정을 거쳐 확인하고 신뢰할 수 있으며 Secret Key 또는 Public/Private Key Pair를 사용하여 서명할 수 있습니다.

#### JWT는 일반적으로 Base64로 인코딩된 데이터와 전자 서명으로 구성되어 있습니다. JWT 역시 데이터를 암호화 할 수 있지만, JWT가 전자 서명이 되어 있다는 점이 중요 합니다. 전자 서명된 JWT의 목적은 데이터를 숨기는 것이 아니라 데이터의 신뢰성을 보장하는 것입니다. 그렇기 때문에 서명된 JWT와 함께 HTTPS를 사용하는 것이 좋습니다.

#### JWT을 이용한 인증 과정은 사용자 측에 사용자의 정보를 관리하는 토큰 기반 인증 메커니즘입니다. 따라서 서버에서 세션 정보를 저장하기 위해 세션 스토리지 또는 데이터베이스에 완전히 의존할 필요가 없습니다. 또한, 서버의 확장성과 멀티 기기 및 도메인에서 활용에서도 이점을 가지고 있습니다.

## 1-2. JWT의 구조

#### JWT는 3가지 구성 요소(Header, Payload, Signature)로 이루어져 있으며, 각 구성 요소들은 dot(.)으로 구분이 되어 있습니다.

<center>
<img width="907" alt="Screenshot 2022-11-07 at 4 30 58 PM" src="https://user-images.githubusercontent.com/112772324/200251426-4058feab-cbcc-4db4-b928-87f5fdbd4bef.png">
</center>

### 1-2-1. Header

#### Header는 JWT의 첫번째 구성 요소이고, 일반적으로 2가지 정보를 담고 있습니다.

#### alg : Signature을 만드는데 사용한 알고리즘 정보

#### typ : Token의 타입

#### 예를 들어 아래와 같은 Header가 있다고 하면 Signature을 만드는데 사용한 알고리즘은 HS256이고, Token의 타입은 JWT라는 의미입니다.

<center>
<img width="878" alt="Screenshot 2022-11-07 at 4 32 46 PM" src="https://user-images.githubusercontent.com/112772324/200251523-663d4580-fb25-4260-9726-dfb81edec6a7.png">
</center>

### 1-2-2. Payload

#### Payload는 JWT의 두번째 구성 요소로 실질적으로 전달해야 하는 정보들을 가지고 있습니다. Payload에 담긴 정보 하나 하나를 Claim이라고 하는데, 3가지 종류의 Claim이 존재 합니다.

#### Registered Claims : 이미 JWT 표준으로 지정된 Claim 입니다. 총 7가지의 Registered Claim이 존재하며, 해당 Claim을 무조건 전부 사용해야 되는 것은 아니고 적절히 상황게 맞게 사용하면 됩니다.

#### iss: 토큰 발급자

#### sub: 토큰 제목

#### aud: 토큰 대상자

#### exp: 토큰 만료시간

#### iat: 토큰 발급 시간

#### nbf: 토큰 활성화 시간

#### jti: JWT의 고유 식별자

#### Public Claims : JWT를 사용하는 사람들이 공개적으로 정의할 수 있습니다. 그러나 기존에 이미 등록되어 있는 Claims와 충돌을 방지하려면 IANA JSON Web Token 레지스트를 참고하거나 UUID, OID, 도메인 이름 등을 사용해야 합니다.

#### Private Claims : Public Claims과 달리 오직 사용자와 서버 사이에서만 합의하여 사용하는 Claim 입니다.

#### Payload의 구성 예시 입니다.

<center>
<img width="869" alt="Screenshot 2022-11-07 at 4 33 21 PM" src="https://user-images.githubusercontent.com/112772324/200251608-556e7104-bc7e-4d63-a8db-7533c54f2692.png">
</center>

### 1-2-3. Signature

#### Signature는 JWT의 세번째 구성 요소이고, 문자 그대로 JWT의 서명 부분입니다. Header의 인코딩된 내용과 Payload의 인코딩된 내용을 더한 뒤에 Secret Key와 알고리즘을 이용하여 암호된 값을 나타냅니다.

#### 전달 받은 토큰의 Header와 Payload를 서버의 Secret Key를 이용해서 암호화를 진행합니다. 그리고 해당 값이 전달 받은 Signature와 같은지 비교하여 JWT의 신뢰성을 확인 할 수 있습니다. 서버에서 관리하고 있는 Secret Key가 아닌 다른 Key로 JWT를 발급 한다면 Signature가 달라지기 때문에 해당 JWT는 신뢰 할 수 없는 토큰입니다.

#### 아래와 같이 HS256(HMAC SHA256) 알고리즘으로 암호화된 Signature을 살펴보면, Headerd와 Payload가 합쳐진 내용을 secret과 HMACSHA256을 이용하여 암호화 되어 있다는 것을 확인 할 수 있습니다. 즉, secret을 모른다면 암호화된 Sinature의 내용은 확인 할 수 없습니다.

<center>
<img width="870" alt="Screenshot 2022-11-07 at 4 33 51 PM" src="https://user-images.githubusercontent.com/112772324/200251683-025e10df-6e1f-433c-a610-05f97d692bce.png">
</center>

# 2. Summary

#### JWT(JSON Web Token)는 클라이언트(사용자)와 서버 간에 정보를 JSON 개체로 안전하게 전송하기 위한 개방형 표준(RFC 7519)입니다.

#### JWT을 이용한 인증 과정은 사용자 측에서 사용자의 정보를 관리하는 토큰 기반 인증 메커니즘입니다.

#### JWT는 3가지 구성 요소(Header, Payload, Signature)로 이루어져 있으며, 각 구성 요소들은 dot(.)으로 구분이 되어 있습니다.

#### Header: Signature을 만드는데 사용한 알고리즘과 Token의 타입 정보를 가지고 있습니다.

#### Payload: 실질적으로 전달해야 하는 정보들을 가지고 있으며, 담겨 있는 정보 하나 하나를 Claim이라고 합니다.

#### Signature: Header의 인코딩된 내용과 Payload의 인코딩된 내용을 더한 뒤에 Secret Key와 알고리즘을 이용하여 암호화된 JWT의 서명 부분입니다.

[⏏️ 메인으로](https://github.com/IgnacioSEO/TIL#today-i-learned-til)
