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

console.log(dropOneInterest(1, "Singer"));
