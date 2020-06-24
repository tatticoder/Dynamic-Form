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
  console.log(total_entries);
  var table = document.getElementById("big-data-table");
  var row = table.insertRow(total_entries);
  console.log(total_entries);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = total_entries + 1; //starts with 0
  cell2.innerHTML = name;
  cell3.innerHTML =
    "<button onclick='updateFunction(" +
    total_entries +
    ")' class='btn btn-success'>Update</button>";
  cell4.innerHTML =
    "<button onclick='deleteFunction(" +
    total_entries +
    ")' class='btn btn-danger'>Delete</button>";
  ++total_entries; //increment for next entry
}
//get data from form to update
var form = document.getElementById("Main-Form2");
function handleForm2(event) {
  event.preventDefault();
  CreateFunction(document.getElementById("Main-Form2").elements[0].value);
}
form.addEventListener("submit", handleForm2);

//update function
function updateFunction(number) {
  console.log("update function called for " + number);
  var olddata = document.getElementById("big-data-table").rows[number].cells[1]
    .innerHTML;
  console.log("current value is " + olddata);
}
//delete function
function deleteFunction(number) {
  document.getElementById("big-data-table").deleteRow(number);
  console.log("deleted " + number);
  --total_entries;
}
