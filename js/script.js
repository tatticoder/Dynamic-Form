//get data from form to insert
var form = document.getElementById("Main-Form");
function handleForm(event) {
  event.preventDefault();
  CreateFunction(document.getElementById("Main-Form").elements[0].value);
}
form.addEventListener("submit", handleForm);

//store data in table
var total_entries = 0;
function CreateFunction(name) {
  var table = document.getElementById("big-data-table");
  var row = table.insertRow(total_entries);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = total_entries + 1; //starts with 0
  cell2.innerHTML = name;
  cell3.innerHTML =
    "<button onclick=\"showUpdate('" + name+ "','"+total_entries + "')\" class='btn btn-success'>Update</button>";
  cell4.innerHTML =
    "<button onclick='deleteFunction(" +
    total_entries +
    ")' class='btn btn-danger'>Delete</button>";
  document.getElementById("addContainer").setAttribute("hidden", true);
  ++total_entries; //increment for next entry
}
//delete function
function deleteFunction(number) {
  document.getElementById("big-data-table").deleteRow(number);
  console.log("deleted " + number);
  --total_entries;
}
function showadd() {
  document.getElementById("addContainer").removeAttribute("hidden");
  document.getElementById("Main-Form").elements["NameFeild"].value = "";
}
function showUpdate(name,num) {
  document.getElementById("updateContainer").removeAttribute("hidden");
  document.getElementById("Main-Form2").elements["NameFeild"].value = name;
  document.getElementById("Main-Form2").elements["location"].value = num;
}

//listen to updated form submit
var form = document.getElementById("Main-Form2");
function updateForm(event) {
  event.preventDefault();
  var newName=document.getElementById("Main-Form2").elements[0].value;
  var loc=document.getElementById("Main-Form2").elements[1].value;
  document.getElementById("updateContainer").setAttribute("hidden", true);
  console.log(newName+"  "+loc );
  document.getElementById("big-data-table").rows.item(loc).cells[1].innerHTML=newName; 
}
form.addEventListener("submit", updateForm);