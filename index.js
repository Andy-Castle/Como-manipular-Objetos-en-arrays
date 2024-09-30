let ObjArr = [
  {
    id: 1,
    name: "Frida",
    age: "25",
    interest: ["Painting", "Good in English", "Singer"],
  },
  {
    id: 2,
    name: "Pamela",
    age: 25,
    interest: ["Singing", "Good at sports", "Math"],
  },
  {
    id: 3,
    name: "Pepe",
    age: 27,
    interest: ["Soccer player", "Good driver"],
  },
  {
    id: 4,
    name: "Pedro",
    age: 28,
    interest: ["Soccer player", "Good driver"],
  },
];

//Esta función sirve para encontrar un Obj por su id
function findObjById(id) {
  const result = ObjArr.filter((obj) => obj.id === id);
  return result;
}

let resultObj = findObjById(1);

//Esta función sirve para eliminar un(1) interes
function dropOneInterest(id, dropOneInterest) {
  let array = null;
  let resultObj = null;
  let result = ObjArr.filter((obj) => obj.id === id);

  result.forEach((e) => {
    let arrayInt = e.interest;
    array = arrayInt.filter((arr) => arr !== dropOneInterest);
  });

  // resultObj = result[0];
  // resultObj.interest = array;
  // resultObj.age = Number(resultObj.age);

  result.map((x) => {
    x.interest = array;
    x.age = parseInt(x.age);
  });

  return ObjArr;
}

let dropInterest = dropOneInterest(1, "Singer");

//Esta función sirve para eliminar un objeto dentro de un array
function dropOneObj(id) {
  let result = ObjArr.filter((obj) => obj.id !== id);
  ObjArr = result;
  return result;
}

let dropOneObject = dropOneObj(3);

//Esta función sirve para cambiar el nombre y edad de un objeto
function changeNameAge(id, name = null, age = null) {
  let result = ObjArr.filter((obj) => obj.id === id);
  for (const elements of result) {
    if (name !== null) {
      elements.name = name;
    }
    if (age !== null) {
      elements.age = age;
    }
  }
  result = ObjArr;

  return result;
}

let changing = changeNameAge(2, "Daniel", 30);

//Esta función sirve para modificar solo un(1) interes
function changeInterest(id, oldInterest, newInterest) {
  let result = ObjArr.filter((obj) => obj.id === id);
  result.forEach((e) => {
    let arrayInt = e.interest;
    let index = arrayInt.indexOf(oldInterest);
    arrayInt.splice(index, 1, newInterest);
  });

  result = ObjArr;
}

let changeInt = changeInterest(2, "Singing", "Playing video Games");

let newInterest = ["English C1", "Painting", "Singer"];

//Esta función sirve para cambiar todo el interes
function changeInterestPart(id, newInterest) {
  let result = ObjArr.filter((obj) => obj.id === id);
  result.forEach((e) => {
    e.interest = newInterest;
  });

  result = ObjArr;
  return result;
}

let CIP = changeInterestPart(1, newInterest);

//Esta función sirve para crear un nuevvo objeto y añadirlo
function addNewObj(name, age, interest) {
  let lastIndex = ObjArr.length - 1;
  let lastObj = ObjArr[lastIndex].id;
  let idLastObj = lastObj;
  ObjArr.push({ id: idLastObj + 1, name: name, age: age, interest: interest });
  return ObjArr;
}

addNewObj("Paola", 21, ["Gaming", "Singing", "Playing soccer"]);

console.log(ObjArr);
