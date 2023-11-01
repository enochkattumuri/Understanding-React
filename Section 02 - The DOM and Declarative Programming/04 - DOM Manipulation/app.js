const listElement = document.getElementById("list");
const newListItem = document.createElement("li");
newListItem.textContent = "Item 3";
listElement.appendChild(newListItem);

// with timeout
// setTimeout(() => listElement.appendChild(newListItem), 1000);
