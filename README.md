### 메인 컴포넌트 구조

1. 아무런 상태도 아닐 때는 DragDrop을 출력
2. File이 입력된 상태가 되면 Loading을 출력
3. 이때 Loading은 Loading 컴포넌트를 직접 호출하지 말고 handleFiles 안에 집어넣어서 호출한다. 즉 handleFiles가 처리 중일 때 Loading을 호출한다.
4. 결과가 반환되면 Result을 출력한다.

필요한 변수: isFileInput, isResReturned