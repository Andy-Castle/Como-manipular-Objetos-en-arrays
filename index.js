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
];

function findObjById(id) {
  const result = ObjArr.filter((obj) => obj.id === id);
  return result;
}

let resultObj = findObjById(1);

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

function dropOneObj(id) {
  let result = ObjArr.filter((obj) => obj.id !== id);
  ObjArr = result;
  return result;
}

let dropOneObject = dropOneObj(3);

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

console.log(ObjArr);
