[⏏️ 메인으로](https://github.com/IgnacioSEO/TIL/tree/main/Wecode#table-of-contents)

# 1. Bcrypt

## 1-1. Salting & Key Stretching

#### 단방향 암호화에 사용되는 해시 알고리즘은 동일한 평문에 대해서 항상 동일 해시값을 갖습니다. 따라서 특정 해시 알고리즘에 대해서 어떠한 평문이 어떠한 해시값을 갖는지 알 수가 있습니다.

#### 또한 해시 함수는 본래 빠르게 데이터를 검색하기 위해서 탄생 되었습니다. 따라서 공격자는 매우 빠른 속도로 임의의 문자열의 해시값과 해킹할 대상의 해시값을 비교하여 대상자를 공격할 수 있습니다.

#### 이러한 문제를 보안하기 위해 단방향 암호화를 진행할 때 솔팅(Salting)과 키 스트레칭(Key Stretching)을 적용 시킵니다.

### 1-1-1. 솔팅(Salting)

#### 솔팅은 단방향 해시 함수를 통해 암호화를 진행 할 때 본래 데이터에 추가적으로 랜덤한 데이터를 더하여 암호화를 진행하는 방식입니다. 원래 데이터에 추가 데이터가 포함 되었기 때문에 원래 데이터의 해시값과 다르게 됩니다.

### 1-1-2. 키 스트레칭(Key Stretching)

#### 단방향 해시값을 계산 한 후, 그 해시값을 또 다시 해시하고 또 이를 반복하는 방식입니다.

#### 최근에는 일반적인 장비로 1초에 50억 개 이상의 해시값을 비교할 수 있지만, 키 스트레칭을 적용하여 동일한 장비에서 1초에 5번 정도만 비교할 수 있습니다. GPU(Graphics Processing Unit)를 사용하더라도 수백에서 수천 번 정도만 비교할 수 있습니다.

<center>
<img width="941" alt="Screenshot 2022-11-07 at 4 26 57 PM" src="https://user-images.githubusercontent.com/112772324/200250577-7e81f04a-a2ec-4e75-b4e0-b96ef2bab1ab.png">
</center>

## 1-2. Bcrypt 란?

#### Bcypt는 브루스 슈나이어가 설계한 키(key) 방식의 대칭형 블록 암호에 기반을 둔 암호화 해시 함수로서 Niels Provos 와 David Mazières가 설계했습니다. Bcrypt는 레인보우 테이블 공격을 방지하기 위해 솔팅과 키 스트레칭을 적용한 대표적인 예 입니다.

### 1-2-1. 구조

<center>
<img width="872" alt="Screenshot 2022-11-07 at 4 26 06 PM" src="https://user-images.githubusercontent.com/112772324/200250464-35895150-28b9-4a50-b2d8-a552913768f6.png">
</center>

#### 2b : 해시 알고리즘 식별자

#### 12 : Cost Factor로 Key Stretching의 수 (2의 12승번)

#### 76taFAFPE9ydE0ZsuWkIZe : 16Byte 크기의 Salt, Base64로 인코딩된 22개의 문자

#### xWVjLBbTTHWc509/OLI5nM9d5r3fkRG : 24Byte의 해시 값, Base64로 인코딩된 31개의 문자

### 1-2-2. 검증

#### Bcrypt는 단방향 해시 알고리즘 입니다. 따라서 복호화가 불가능 합니다. Bcrypt의 검증은 암호화된 값이 가지고 있는 알고리즘, Cost Factor, Salt를 이용 합니다. 비교하고 싶은 평문을 암호화된 값이 가지고 있는 알고리즘, Cost Factor, Salt을 이용하여 해시를 진행한 후 암호화된 값과의 비교를 통해 검증을 진행 합니다.

# 2. Summary

#### 단방향 암호화는 해시 알고리즘을 기반으로 만들어졌습니다.

#### 해시 알고리즘의 단점을 보완하기 위해 단방향 암호화에 솔팅(Salting)과 키 스트레칭(Key Stretching) 기술을 적용 시킵니다.

#### Bcrypt는 레인보우 테이블 공격을 방지하기 위해 솔팅과 키 스트레칭을 적용한 대표적인 예 입니다.

#### Bcrypt는 단방향 해시 알고리즘이기 때문에 복호화가 불가능 합니다. 따라서 비교하고 싶은 평문을 암호화된 값이 가지고 있는 알고리즘, Cost Factor, Salt을 이용하여 해시를 진행한 후 암호화된 값과의 비교를 통해 검증을 진행합니다.

[⏏️ 메인으로](https://github.com/IgnacioSEO/TIL/tree/main/Wecode#table-of-contents)
