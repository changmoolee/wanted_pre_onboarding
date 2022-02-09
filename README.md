<h1>원티드 프리온보딩 코스</h1>

<br>

## 자세한 실행 방법

1. git clone 명령어를 통해 로컬에 git 저장소를 복제합니다.
<pre><code>git clone https://github.com/changmoolee/wanted_pre_onboarding.git</code></pre>
2. 다운 받은 폴더로 이동한 후, custom-component 파일로 접근합니다.
<pre><code>cd wanted_pr_onboarding
cd custom-component</code></pre>
3. npm install 명령어를 입력하여 모듈들을 다운로드합니다.
<pre><code>npm install</code></pre>
4. npm start 명령어를 입력하여 실행합니다.
<pre><code>npm start</code></pre>
<br><br><br>

## 1. Toggle

### 구현한 방법과 이유에 대한 간략한 내용
Toggle의 switch on/off에 따른 상태를 정의하고, <br> on/off 상태에 따라 조건부 스타일링을 주었습니다.
![toggle기능](https://user-images.githubusercontent.com/84559872/152782161-deb8100e-5f41-4fc5-b91e-368e0ed09bf6.gif)

### 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)

Toggle의 transition 효과를 구현하는데 어려움을 겪었습니다. <br>
예시에서는 switch의 on/off에 따라 Toggle의 background-color가 왼쪽에서부터 오른쪽으로 선형적으로 채워졌습니다. <br>
예시처럼 채워지는 효과를 구현하기 위해서 방법을 검색해보던 중 linear-gradient를 이용하는 예시를 찾을 수 있었습니다.

 <pre><code> background: ${(props) =>
   props.checked
     ? "linear-gradient(to right, #4a19cd 50%, #dcdcdc 50%) left"
     : "linear-gradient(to right, #4a19cd 50%, #dcdcdc 50%) right"};</code></pre>

 props의 Boolean값에 따라 linear-gradient 값을 다르게 주어 해결할 수 있었습니다.
<br><br><br>
## 2. Modal

### 구현한 방법과 이유에 대한 간략한 내용

 Modal의 on/off에 따른 상태를 정의하고, <br> stopPropagation 메서드를 사용하여 이벤트 버블링 전파를 방지하여 클릭시 Modal이 닫히는 영역을 설정했습니다.<br> 
 ![modal기능](https://user-images.githubusercontent.com/84559872/152782220-c09132ed-7086-45bc-8dff-f869d47ba174.gif)<br>

### 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)

 Modal 창을 중앙에 고정시키는 방법을 찾는 것이 어려웠습니다.

 <pre><code>position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%); </code></pre>

 position 속성은 fixed, top과 left 속성에 각각 50%를 부여하고 다시 translate 속성의 x축에 -50%, y축에 -50%를 줌으로써 Modal 창을 정중앙에 위치시킬 수 있었습니다.
<br><br><br>
## 3. Tab

### 구현한 방법과 이유에 대한 간략한 내용

 클릭한 Tap에 따른 상태를 정의하고 <br> 클릭한 Tap, 클릭하지 않은 나머지 Tap에 따른 조건부 스타일링을 주었습니다.<br> 
 ![tap기능](https://user-images.githubusercontent.com/84559872/152782240-0f55dbf5-c1a2-4d9d-ad99-dcc674bf13d0.gif)<br>

### 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)

 여러 tab의 변화를 동시에 주기 위해서 map 메서드를 사용하였습니다. <br>
 클릭한 tab의 index를 상태값에 담은 후, 해당 index에만 클릭된 효과를 주고 나머지에는 클릭되지 않은 효과를 줄 수 있도록 하였습니다.

 <pre><code> {tabs.map((tab, index) => {
            return (
           ...
               onClick={() => handleTab(index)}
           ...
            );
          })}
 </code></pre>
<br><br><br>
## 4. Tag

### 구현한 방법과 이유에 대한 간략한 내용

 작성한 Tag를 담을 배열, input에 적힌 text를 각각 상태로 정의했습니다. <br>
 keyCode를 사용하여 enter를 눌렀을 때를 인식하고 Tag가 새로 추가되도록 하였습니다. <br>
 배열의 map메서드를 사용하여 x가 클릭된 Tag의 위치를 index로 파악하여 제거될 수 있도록 했습니다.<br>
 ![tag기능](https://user-images.githubusercontent.com/84559872/152782279-1b88d6d9-328a-40e1-8acd-9945ffd5a54a.gif)<br>

### 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)

 여러 tag중 x(닫기)를 클릭한 tag만 삭제시키기 위해서 map 메서드를 사용했습니다. <br>
 removeTag라는 함수에 해당 index를 인자로 넣어주고,

 <pre><code>{tags.map((tag, index) => (
  ...            
  onClick={() => removeTag(index)}>
  ...               
  )}
 </code></pre>

 해당 함수 내에서 x(닫기)가 클릭된 tag의 index를 제거하기 위해 splice 메서드를 사용하였습니다.

 <pre><code>const removeTag = (index) => {
  let tagsCopy = [...tags];
  tagsCopy.splice(index, 1);
  ...
  }
 </code></pre>
<br><br><br>
## 5. AutoComplete

### 구현한 방법과 이유에 대한 간략한 내용

 input의 text 유무에 따른 상태를 정의하고 배열에 검색 데이터를 저장하였습니다. <br>
 includes 메서드를 사용하여 배열 안에 자동검색 기능을 구현하고, map메서드를 사용하여 자동검색에 일치하는 요소의 index를 통해 리턴했습니다. <br>
 ![autoComplete기능](https://user-images.githubusercontent.com/84559872/152782298-2b842a60-e4fe-4554-a93d-cf1960bfe687.gif)<br>

### 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)

 자동완성 검색 기능을 구현하기 위해 includes 메서드를 사용했습니다. <br>
 includes 메서드는 배열 뿐만 아니라 문자열 내 요소들도 포함하고 있는지 판별할 수 있기 때문입니다.<br>
 소문자, 대문자 상관없이 검색되기 위해서 데이터와 검색 대상을 toLowerCase 메서드를 통해 소문자로 변환시켜 핸들링 하였습니다.

 <pre><code>{suggestions.map((suggestion, index) => {
  ...            
  if (suggestion.toLowerCase().includes(text.toLowerCase())) {
  ...               
  )}
 </code></pre>
<br><br><br>
## 6. ClickToEdit

### 구현한 방법과 이유에 대한 간략한 내용

 input의 text를 상태로 정의하고, onBlur 이벤트를 통해 focus가 사라졌을 때 상태가 변하도록 구현했습니다. <br>
 ![clickToEdit기능](https://user-images.githubusercontent.com/84559872/153115008-2d2da676-f7e6-4e7a-9458-e948dca7238b.gif) <br>

### 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)

 예시를 구현하기 위해, onBlur 이벤트를 활용하였습니다.<br>
 input의 focus가 사라지고 blur가 되었을 때, input 내 text값을 변경시키도록 하였습니다. <br>
 <br><br>
