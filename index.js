var users = [
  { id: 1, name: "James Smith", gender: 2 },
  { id: 2, name: "Isla Brown", gender: 1 },
  { id: 3, name: "Amelia Davies", gender: 2 },
  { id: 4, name: "Jacob Evans", gender: 1 },
];

var target = document.querySelector("#target");

for (var i = 0; i < users.length; i++) {
  var user = users[i];
  var genderText = user.gender === 1 ? "female" : "male";

  var li = document.createElement("li");
  li.innerHTML = user.id + " - " + user.name + " - " + genderText;
  li.classList.add("user_item");
  target.appendChild(li);
}
