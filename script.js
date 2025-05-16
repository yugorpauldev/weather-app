const dropdown = document.querySelector("#MyExercise");
const logButton = document.querySelector("#logButton");
const logList = document.querySelector("#log-list");

logButton.addEventListener("click", ()=> {
    const SelectedExercise = dropdown.value;

    if(logList.children.length === 1 && logList.children[0].textContent.includes("No exercises")){
    logList.innerHTML = "";
    }

    const li = document.createElement("li");
    li.textContent = SelectedExercise;
    logList.appendChild(li)

});