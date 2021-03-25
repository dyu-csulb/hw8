

window.addEventListener("load", myLoadEvent);

function myLoadEvent() {
  const houses = [
    {
      code: "ST",
      name: "Stark"
    },
    {
      code: "LA",
      name: "Lannister"
    },
    {
      code: "BA",
      name: "Baratheon"
    },
    {
      code: "TA",
      name: "Targaryen"
    }
  ];
  
  let x = document.getElementById("house");
  for (let i = 0; i < houses.length; i++) { 
    let option = document.createElement("option");
    option.text = houses[i].name;
    option.value = houses[i].code;
    x.add(option);
  }

  document.getElementById("house").addEventListener("change", myFunction);
}

function myFunction() {
  document.getElementById("characters").innerHTML = "";
  const getCharacters = houseCode => {
    switch (houseCode) {
      case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
      case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
      case "BA":
        return ["Robert", "Stannis", "Renly"];
      case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
      default:
        return []; // Empty array
    }
  };

  let e = document.getElementById("house");   
  let ul = document.getElementById("characters");
  
  for (let i = 0; i < getCharacters(e.value).length; i++) {
      let name = getCharacters(e.value)[i];
      let li = document.createElement('li');
      li.appendChild(document.createTextNode(name));
      ul.appendChild(li);
  }
}