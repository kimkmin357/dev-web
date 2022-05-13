# VSCode Git 연동 및 Branch 관리

1.  Git Repository 주소 복사

    ![GIt Repository 주소](https://user-images.githubusercontent.com/97032125/166873839-30eb3eb5-6186-48fb-a01d-2066c2c0f26f.png)

2.  원하는 경로의 폴더를 VSCode로 Open

3.  터미널 창에서 git init 실행

4.  Ctrl+Shift+p 로 명령 커맨드를 열고 git clone 실행

    1에서 복사한 주소 입력 후 Enter

    다시 한 번 2에서 Open한 폴더를 Open

    우하단에 '복제된 리포지토리를 열거나 현재 작업 영역에 추가하시겠습니까?' 라는 팝업에 [열기] 버튼 클릭

5. VSCode 좌하단에 default Branch명이 보임

    ![default Branch](https://user-images.githubusercontent.com/97032125/166874152-d3134b45-2619-4124-8a1b-80b53aa4e2e3.png)


6.  Branch 생성

    좌하단 default Branch 명을 클릭 후

    새 분기만들기 클릭하고 원하는 Branch 명 입력하면 VSCode 좌하단이 생성한 Branch 명으로 변경됨.

    ![Branch 생성](https://user-images.githubusercontent.com/97032125/166874616-2f30b8ba-91cb-489e-8d6e-530590a27c86.png)

    여기 까지는 로컬 영역에서 생성된 Branch임.

    원격 Branch 생성은 되지 않은 상태.


7.  VSCode 왼편 트레이아이콘에서 세번째 소스제어 선택하면 [분기게시] 라는 버튼 클릭

    ![Branch 생성](https://user-images.githubusercontent.com/97032125/166876222-eee653ed-4c07-40db-b6b0-0097bceb61d5.png)

    여기까지 진행하면 원격 레파지토리에 해당 Branch가 생성된 것을 확인할 수 있음.

8.  원격 Branch 삭제

    git push origin --delete [Branch 명] 