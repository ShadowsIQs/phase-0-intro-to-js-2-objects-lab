const employee = {
    Key: {"name": "Ray",
    "streetAddress": "12k street"}
    };

function updateEmployeeWithKeyAndValue(){
    const emp = { ... employee};
    emp["name"] = "Sam";
    emp["streetAddress"] = "11 Broadway";
    return emp
}
function destructivelyUpdateEmployeeWithKeyAndValue(){
    const kek = employee
    kek["name"] = "Sam";
    kek.streetAddress = "12 Broadway";
    return kek
}

function deleteFromEmployeeByKey(){
    const kekw = {...employee};
    delete kekw.name;
    kekw[name] = "Ryan";
    return kekw
}

function destructivelyDeleteFromEmployeeByKey(){
    const pie = employee
    delete pie.name;
    pie[name] = "Sam";
    return pie
}

console.log(updateEmployeeWithKeyAndValue)
console.log(destructivelyUpdateEmployeeWithKeyAndValue)
console.log(deleteFromEmployeeByKey)
console.log(destructivelyDeleteFromEmployeeByKey)