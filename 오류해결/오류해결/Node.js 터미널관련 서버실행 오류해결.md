[🔼위로가기](https://github.com/IgnacioSEO/TIL/tree/main/%EC%98%A4%EB%A5%98%ED%95%B4%EA%B2%B0#table-of-contents)

# 서버 죽이기

### 비쥬얼 스튜디오로 서버를 키고 끄는 과정에서 오류가 생겨 해결방안을 기억하기 위해 작성했습니다.

### Node.js 서버가 죽지를 않아서 해결하기 위해서 stackoverflow 를 찾던 중에 나온 방법

### lsof -i tcp:8000

### 8000 은 임의의 값을 넣어준 것이고 본인 서버의 PORT 값을 넣어 주면 된다.

### 그후에는 node 00000(숫자 5개) ~~~~~~ 가 나오는데 kill -9 00000(나온 숫자 5개)을 입력하면 서버가 죽는다.

### fg(front ground) bg(back ground)

### 이번 에러 해결을 통해 리눅스 라는 존재에 대해서 알게 되었고 조금 더 리눅스 OS 와 관련된 명령어 대한 보추잉 필요

[🔼위로가기](https://github.com/IgnacioSEO/TIL/tree/main/%EC%98%A4%EB%A5%98%ED%95%B4%EA%B2%B0#table-of-contents)
