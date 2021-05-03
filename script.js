//Getting all required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");

inputBox.onkeyup = ()=>{
    let userData = inputBox.value; //Getting user entered value
    if(userData.trim() != 0){ //If there's an input in the text box
        addBtn.classList.add("active") //Adds an "active" class to the <button> and style.css changes the opacity to a few notches higher
    } 
    else
    {
        addBtn.classList.remove("active") //Removes the "active" class from the <button> and lowers the opacity
    }
}

showTasks(); //Calling showTasks function

//If the user clicks on the add button
addBtn.onclick = ()=>{
    let userData = inputBox.value; //Getting user entered value
    let getLocalStorage = localStorage.getItem("New Todo"); //Getting localStorage
    if(getLocalStorage == null){ //if the olcalStorage is empty
        listArr = []; //Creating blank array
    }
    else
    {
        listArr = JSON.parse(getLocalStorage); //Transforming json string into a js object
    }
    listArr.push(userData); //Pushing or adding user data
    localStorage.setItem("New Todo", JSON.stringify(listArr)) //Transforming js object into a json string
    showTasks(); //Calling showTasks function
}

function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo"); //Getting localStorage
    if(getLocalStorage == null){ //if the olcalStorage is empty
        listArr = []; //Creating blank array
    }
    else
    {
        listArr = JSON.parse(getLocalStorage); //Transforming json string into a js object
    }
    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag += `<li> ${element} <span><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag; //Adding new li tag inside ul tag
    inputBox.value = "";
}