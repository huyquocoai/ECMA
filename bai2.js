var users = [
  { id: 1, name: "James Smith", gender: 2 },
  { id: 2, name: "Isla Brown", gender: 1 },
  { id: 3, name: "Amelia Davies", gender: 2 },
  { id: 4, name: "Jacob Evans", gender: 2 },
];

function addUser() {
  var userId = document.getElementById("userId").value;
  var userName = document.getElementById("userName").value;
  var userGender = document.getElementById("userGender").value;

  // Check if the ID already exists
  var existingUser = users.find((user) => user.id == userId);
  if (existingUser) {
    alert("ID already exists. Please choose a different ID.");
    return;
  }

  // Add the new user to the array
  users.push({
    id: parseInt(userId),
    name: userName,
    gender: parseInt(userGender),
  });

  // Update the user list
  updateList();
}

function updateList() {
  var userList = document.getElementById("userList");
  userList.innerHTML = "";

  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    var genderText = user.gender === 1 ? "female" : "male";

    var li = document.createElement("li");
    li.innerHTML = user.id + " - " + user.name + " - " + genderText;
    li.classList.add("user_item");
    userList.appendChild(li);
  }
}
