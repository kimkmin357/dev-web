# MongoDB 설정

## NAS docker 활용 MongoDB 컨테이너 생성

1.  NAS Docker 실행 MongoDB 설치

    ![NAS Docker mongodb 레지스트리설치](https://user-images.githubusercontent.com/97032125/168193758-7aef2aa6-9080-4b5f-86a1-b483f2e25965.png)

    5.0 이상 버전에서는 CPU 관련 지원이 안된다는 에러가 있어서 

    4.9 버전으로 설치함

     ![설치버전](https://user-images.githubusercontent.com/97032125/168194291-b4b0d795-25b6-4120-8474-85be7ccc8b09.png)

2.  이미지 탭으로가서 설치된 mongoDB 더블클릭해서 설정화면으로 진입

    ![일반 설정](https://user-images.githubusercontent.com/97032125/168194706-5f31c8e2-3bfe-4339-bc9c-6d461b59b092.png)

    ![볼륨 설정](https://user-images.githubusercontent.com/97032125/168194881-849a04ea-e7d0-4c44-8422-8d88f5fce058.png)

    -   볼륨의 파일/폴더는 원하는 경로에 설정하며 됨
    -   마운트 경로는 변경 불가

    ![포트 설정](https://user-images.githubusercontent.com/97032125/168195057-b8b54808-14de-4e91-b371-633760a08e71.png)

    ![환경 설정](https://user-images.githubusercontent.com/97032125/168195163-6a353bda-6fa2-4b2a-9fab-b178a0e3b199.png)

    -   username/pw는 추후 mongodb 진입시 사용됨

    ![실행 확인](https://user-images.githubusercontent.com/97032125/168195363-8e04c526-2634-4d13-adaa-85ed5e12b82c.png)


3.  위에서 설정한 포트로 포트포워딩

    생략

4. MongoDB Compress 설치하기 및 실행

    -   설치

        [MongoDB Compress 설치](https://www.mongodb.com/try/download/compass)

    -   실행화면

        ![실행화면](https://user-images.githubusercontent.com/97032125/168196851-7be2ac0c-c501-4b46-926b-957d40166325.png)


        본인의 NAS 도메인에 MongoDB 설치시 설정한 Port번호 입력

        ex) mongodb://NAS 도메인:설정한 Port
        
        ![로그인화면](https://user-images.githubusercontent.com/97032125/168196651-b4aac767-0e97-482b-9a60-f23b3e8b36a0.png)

        Advanced Connection Options 클릭

        Authentication 탭 클릭

        Authentication Method그룹에서 Username/Password 선택후

        MongoDB 설치시 설정한 username/password 입력후 Connet 버튼 클릭

    -   접속 화면

        ![접속화면](https://user-images.githubusercontent.com/97032125/168197473-9c251f7f-7fee-402b-afd2-e7b738526d28.png)



## Reference

[Synology Nas Docker로 MongoDB 설치하기](https://www.vbflash.net/112)

[MongoDB Compress 설치하기](https://freestrokes.tistory.com/135)