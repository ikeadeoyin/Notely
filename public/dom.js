const form = document.getElementById("formList")
const itemsList = document.getElementById("itemsList")
const addButton = document.getElementById("addButton")
// console.log(itemsList)

// add event listener to form
addButton.addEventListener("click", addNewItem)

function addNewItem(e){
    e.preventDefault()

    // get input value
    // const newItem = document.getElementsById("newInput").value
    const newItem = document.getElementById("newInput").value;
    try {
      if (newItem != "") {
         // create new li
        const item = document.createElement("li")
        // add a class name to li
        item.className = "item"
        // aappend new input to li element
       item.appendChild(document.createTextNode(newItem))
       // add a completed button to the li
       completedButton =  document.createElement("button")
       completedButton.className ="completed"
       completedButton.innerText = "Completed"
       item.appendChild(completedButton)

       // add a delete button to the li
       deleteButton =  document.createElement("button")
       deleteButton.className ="delete"
       deleteButton.innerText = "Delete"
       item.appendChild(deleteButton)

  
       itemsList.appendChild(item)

      }
      else{
        throw "Enter a task"
      }
      
    } catch (err) {
      window.alert(err)
      
    }
    
    // console.log(newItem)
   
    
}