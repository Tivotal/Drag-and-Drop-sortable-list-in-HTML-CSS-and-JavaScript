/* Created by Tivotal */

let items = document.querySelectorAll(".item");
let sortableList = document.querySelector(".sortable-list");

items.forEach((item) => {
  item.addEventListener("dragstart", () => {
    //adding dragging class to item

    setTimeout(() => {
      item.classList.add("dragging");
    }, 0);
  });

  item.addEventListener("dragend", () => {
    //removing dragging class from item
    item.classList.remove("dragging");
  });
});

let initList = (e) => {
  e.preventDefault();

  //getting currently dragging item
  let dragItem = document.querySelector(".dragging");

  //getting all items except currently dragging item
  let siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

  //finding the sibling after which the dragging item must be placed
  let nextSibling = siblings.find((sibling) => {
    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
  });

  //inserting the dragging item before the found next sibling
  sortableList.insertBefore(dragItem, nextSibling);
};

sortableList.addEventListener("dragover", initList);
sortableList.addEventListener("dragenter", (e) => e.preventDefault());
