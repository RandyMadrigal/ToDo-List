const addBtn = document.getElementById("add-btn")
const info = document.getElementById("text-value")
const NotData = document.getElementById("emptyCard")
const Div = document.getElementById("ToDo-list")
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

    DivToDo.innerHTML = `
    <div class="card mb-2 mt-2"">
          <div class="row">
            <div class="col-md-10 col-sm-6">
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
            <div class="col-md-2 col-sm-6 center-item">
              <div class="d-flex flex-row justify-content-evenly">
                <button class="btn btn-danger mx-2" id="${id}">Delete</button>
              </div>
            </div>
          </div>
        </div>
    `
  Div.append(DivToDo)
 
  const deletebtn = document.getElementById(`${id}`)

  deletebtn.addEventListener("click",deleteHandler.bind(null,id));
 
  console.log(ToDo)
}

const deleteHandler = (id) => {

  let deleteItem = 0;
  console.log(id)
  
  for (const item of ToDo) {
    if(item.id === id){
      break;
    }
    deleteItem++;
  }
 
  ToDo.splice(deleteItem,1)
  Div.children[deleteItem].remove()
  ToDoLength();

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


