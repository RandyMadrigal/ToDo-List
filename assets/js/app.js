const addBtn = document.getElementById("add-btn")
const info = document.getElementById("text-value")
const NotData = document.getElementById("emptyCard")
const Div = document.getElementById("ToDoContainer")
const ToDo = []

const addInfo = () => {

  let id = Math.floor(Math.random() * 1000000)

  const list = {
    id: id,
    text: info.value,
    Fecha: new Date().toLocaleString()
  }

  ToDo.push(list)

  clean();

  ToDoLength();

  AddToDoActivity(
    list.id,
    list.text,
    list.Fecha)

    ToDoLength();


}

const AddToDoActivity = (id,text,Fecha) =>{

  let DivToDo = document.createElement("div")
  DivToDo.classList.add("col-md-8", "offset-2", "mt-3")
  DivToDo.setAttribute("id","ToDo-list");

    DivToDo.innerHTML = `
    <div class="card mb-2 mt-2"">
          <div class="row">
            <div class="col-md-8 col-sm-6">
              <div class="card-body">
                <p class="card-text">
                  ${text}
                </p>
                <p class="card-text">
                  <small class="text-muted"> ${Fecha}</small>
                  <input type="hidden" ${id}  />
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 center-item">
              <div class="d-flex flex-row justify-content-evenly">
                <button class="btn btn-danger mx-2">Delete</button>
    <!-- <button class="btn btn-success">Edit</button>  --> 
              </div>
            </div>
          </div>
        </div>
    `
  Div.insertAdjacentElement("afterend", DivToDo)

  DivToDo.addEventListener("click",deleteHandler.bind(null,id))
    
  console.log(ToDo)
}

const deleteHandler = (id) => {

  let deleteItem = 0;
  
  for (const item of ToDo) {
    if(item.id === id){
      console.log(item.id)
      break;
    }
    deleteItem++;
  }
 
  ToDo.splice(deleteItem,1)
  let DivToDo = document.getElementById("ToDo-list")
  DivToDo.children[deleteItem].remove()
  alert(deleteItem);

}


const clean = () => {
  info.value = ""
}

const ToDoLength = () => {
  let counter = ToDo.length

  if (counter > 0) {
    NotData.classList.add("invisible")
  } else {
    NotData.classList.toggle("invisible")
  }
}


addBtn.addEventListener("click", () => {
  
  if(info.value == "" || info.value == null){
    alert("you can't add a empty note...")
    return;
  }

  addInfo();

})


