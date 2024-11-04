![스크린샷 2024-10-31 223603](https://github.com/user-attachments/assets/6d212610-f1d3-48f3-bbf0-0cf15bc6e872)
처음 React구현 과제.

App.jsx, MedalForm.jsx, MedalList.jsx로 컴포넌트를 나눠서 구성.

구현한 기능으로는 국가 추가,국가 업데이트, 국가 삭제, 메달 목록 표시가 있습니다.

App.jsx에서는 메달과 국가들의 메달정보를 관리하는 핸들러 함수들(handleInputChange,addcountry,updateCountry,resetFields,deleteCountry)로 이루어져 있습니다.
handleInputChange는 name과 value를 가져와 해당 필드 값을 변경하고 메달 수는 숫자로 변환하기 위해 Number(value)를 사용합니다.
addcountry는 국가 추가 버튼을 눌렀을때 호출되며 현재 medals정보를 countries배열에 추가해줍니다.
updateCountry는 업데이트 버튼을 눌렀을때 호출되며 국가명이 일치하면 새로운 medals 정보로 덮어씌워줍니다.
resetFields는 입력 필드를 초기 상태로 리셋합니다.
deleteCountry는 삭제버튼을 눌렀을때 호출되며 해당국가를 conutries에서 삭제합니다.

MedalForm.jsx에서는 국가와 메달 수를 입력받는 여러개의 input필드와 버튼(추가,업데이트)으로 이루어져 있습니다.
각 필드는 value와 onChange 속성으로 medals와 연동됩니다.
그리고 각각 추가,업데이트 버튼은 addCountry와 updateCountry를 호출하는 역할을 합니다.

MedalList.jsx는 테이블구조로 구성하였고 countries배열을 map함수로 각 국가의 정보를 테이블 행으로 렌더링 합니다.
삭제버튼을 클릭시 해당 국가를 삭제하는 deleteCountry함수를 호출합니다.
