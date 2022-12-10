let ageTable = document.getElementById("age-table");

let labels = ageTable.querySelectorAll("label");
//console.log(labels);

let tdAll = ageTable.querySelectorAll("td");

for (let td of tdAll) {
  if (td.innerHTML.includes("Age")) {
    //console.log(td.innerHTML);
    break;
  }
}

let formEl = document.querySelector("[name='search']");
console.log(formEl);

let inputs = formEl.querySelectorAll("input");
console.log("first input: " + inputs[0].type);
console.log("last input: " + inputs[inputs.length - 1].type);
