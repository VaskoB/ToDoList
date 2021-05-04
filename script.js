//Getting all required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button")

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
    addBtn.classList.remove("active");
}

//Function to add task list inside ul
function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo"); //Getting localStorage
    if(getLocalStorage == null){ //if the olcalStorage is empty
        listArr = []; //Creating blank array
    }
    else
    {
        listArr = JSON.parse(getLocalStorage); //Transforming json string into a js object
    }
    const pendingNumb = document.querySelector(".pendingNumb");
    pendingNumb.textContent = listArr.length; //Passing the length value in pendingNumb
    if(listArr.length > 0) //If the list isnt empty, activate the button
    {
        deleteAllBtn.classList.add("active");
    }
    else
    {
        deleteAllBtn.classList.remove("active");
    }
    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag += `<li> ${element} <span onclick="deleteTask(${index})"; ><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag; //Adding new li tag inside ul tag
    inputBox.value = "";
}

//Delete task function
function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage); 
    listArr.splice(index, 1); //Delete or remove the particular indexed li
    //After removing the li update the local storage
    localStorage.setItem("New Todo", JSON.stringify(listArr)) 
    showTasks(); //Calling showTasks function
}

//Delete all tasks function
deleteAllBtn.onclick = ()=>{
    listArr = []; //Empty an array
    //After deleting all tasks update the local storage
    localStorage.setItem("New Todo", JSON.stringify(listArr)) 
    showTasks(); //Calling showTasks function
}