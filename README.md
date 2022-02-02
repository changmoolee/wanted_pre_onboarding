구현한 방법과 이유에 대한 간략한 내용
====
## styled-component를 사용한 이유
> 컴포넌트 단위로 캡슐화하여 유지보수가 쉽고,<br> 이벤트에 따른 조건부 스타일링을 구현하기 편리하기 때문입니다.
## Toggle
> switch on, off에 따른 상태를 정의하고,<br> 상태에 따라 조건부 스타일링을 주었습니다.
## Modal
> modal on, off에 따른 상태를 정의하고,<br> stopPropagation 메서드를 사용하여 이벤트 버블링 전파를 방지하여 클릭이벤트 영역을 정하였습니다.
## Tab
> 클릭한 Tap에 따른 상태를 정의하고 <br> 클릭한 Tap, 클릭하지 않은 나머지 Tap에 따른 조건부 스타일링을 주었습니다.
## Tag
> 작성한 Tag를 담을 배열, input에 적힌 text를 각각 상태로 정의했습니다.<br>
> keyCode를 사용하여 enter를 눌렀을 때를 인식하고 Tag가 새로 추가되도록 하였습니다.<br>
> 배열의 map메서드를 사용하여 x가 클릭된 Tag의 위치를 index로 파악하여 제거될 수 있도록 했습니다.
## AutoComplete
> input의 text 유무에 따른 상태를 정의하고 배열에 검색 데이터를 저장하였습니다.<br>
> includes 메서드를 사용하여 배열 안에 자동검색 기능을 구현하고, map메서드를 사용하여 자동검색에 일치하는 요소의 index를 통해 리턴했습니다.
## ClickToEdit
> input의 text를 상태로 정의하고, onBlur 이벤트를 통해 focus가 사라졌을 때 상태가 변하도록 구현했습니다.<br>

구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)
====
자세한 실행 방법
====
