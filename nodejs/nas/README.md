# NAS에 Docker 활용하여 nodejs server 구축하는 방법

1. NAS에서 Docker Package를 설치한다.
2. Docker를 실행하여 node에서제공하는 공식 이미지를 다운받는다.
3. node 이미지를 실행할 컨테이너를 생성한다.
   각종 옵션 설정
   - 공유폴더 설정
   - 포트 설정(외부접속시 포트포워딩 필요)
   - 실행시 명령어 설정
4. 3에서 만든 컨테이너를 실행
   - 3에서 설정한 명령어에서 index.js 를 실행하도록하여 서버를 구동시킴.


nodejs + react 통합개발 구현 후

해당 코드를 Docker 공유폴더에 업로드하면

해당 코드에 맞는 서버를 구동시킬 수 있음.

## Reference
- [시놀로지 Docker로 Nodejs 웹서버 설치하고 띄우기](https://uxgjs.tistory.com/144)

