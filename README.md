구현한 방법과 이유에 대한 간략한 내용
====
## styled-component를 사용한 이유
> 컴포넌트 단위로 캡슐화하여 유지보수가 쉽고, <br> 이벤트에 따른 조건부 스타일링을 구현하기 편리하기 때문입니다.
    
## 1. Toggle
> Toggle의 switch on, off에 따른 상태를 정의하고, <br> 상태에 따라 조건부 스타일링을 주었습니다.
## 2. Modal
> modal on, off에 따른 상태를 정의하고, <br> stopPropagation 메서드를 사용하여 이벤트 버블링 전파를 방지하여 modal close 클릭 이벤트 영역을 설정하였습니다.
## 3. Tab
> 클릭한 Tap에 따른 상태를 정의하고 <br> 클릭한 Tap, 클릭하지 않은 나머지 Tap에 따른 조건부 스타일링을 주었습니다.
## 4. Tag
> 작성한 Tag를 담을 배열, input에 적힌 text를 각각 상태로 정의했습니다. <br>
> keyCode를 사용하여 enter를 눌렀을 때를 인식하고 Tag가 새로 추가되도록 하였습니다. <br>
> 배열의 map메서드를 사용하여 x가 클릭된 Tag의 위치를 index로 파악하여 제거될 수 있도록 했습니다.
## 5. AutoComplete
> input의 text 유무에 따른 상태를 정의하고 배열에 검색 데이터를 저장하였습니다. <br>
> includes 메서드를 사용하여 배열 안에 자동검색 기능을 구현하고, map메서드를 사용하여 자동검색에 일치하는 요소의 index를 통해 리턴했습니다. <br>
## 6. ClickToEdit
> input의 text를 상태로 정의하고, onBlur 이벤트를 통해 focus가 사라졌을 때 상태가 변하도록 구현했습니다. <br>

<br><br>

구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)
====
> Toggle의 transition 효과를 구현하는데 어려움을 겪었습니다. <br>
> 예시에서는 switch의 on/off에 따라 background-color가 왼쪽에서 부터 오른쪽으로 채워졌습니다. <br>
> ![codestates_toggle](https://user-images.githubusercontent.com/84559872/152099443-d19cc57e-b372-49b0-bc5f-0966ca310b1d.gif) <br>
> 채워지는 효과를 구현하기 위해서 css3의 animation을 이용해보기로 했으나 쉽게 방법을 찾지 못했습니다. <br>
> 방법을 검색해보던 중 animation 대신에 box-shadow를 이용하는 예시를 찾았고 적용하여 해결할 수 있었습니다. <br>
> <pre><code>{ box-shadow: 100px 0 0 0 #000080 inset;}</code></pre>
> 왼쪽에서부터 오른쪽으로 채워지는 형태이기에 4개의 length 값 중 x축에만 값을 할당해주었고 <br>
> 채우고 싶은 색 #000080을 설정하고 inset 키워드를 추가했습니다. <br>
> inset을 추가함으로써 그림자가 요소의 테두리 안, 배경색 위, 내부 콘텐츠 밑에 그려지고 마치 채워지는 듯한 효과를 Toggle에 줄 수 있었습니다. <br>

자세한 실행 방법
====
## Toggle
## Modal
## Tab
## Tag
## AutoComplete
## ClickToEdit
