var people = document.getElementById("name");
var email = document.getElementById("email");
var type = document.getElementById("type");

var list = [];

const Confirm = () => {
  event.preventDefault();

  var object = { name: people.value, email: email.value, type: type.value };

  if (object.name && object.email && object.type) {
    list.push(object);

    var ul = document.getElementById("list");

    var li = document.createElement("li");
    var span = document.createElement("span");
    var text = document.createTextNode(`( ${object.type} ) ${object.name}`);

    ul.appendChild(li);
    li.appendChild(span);
    span.appendChild(text);

    people.value = "";
    email.value = "";
    type.value = "";
  } else {
    alert("Por favor, preencha todos os campos!");
  }
};
