document.getElementById("addBtn").addEventListener("click", function(){
    const input = document.getElementById("taskInput"); //const=고정값, let=값 변경 가능, document=현재 HTML 문서 전체
    const taskText = input.value.trim(); //trim=앞뒤에 불필요한 공백 제거

    if(taskText !== ""){
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox"> <span>${taskText}</span>`; //작은따옴표x 백틱o, ${ } 안에는 변수 들어감
        document.getElementById("todoList").appendChild(li); //리스트에 새로 만든 li 추가
        input.value = ""; //입력창 다시 비움
    }
});
