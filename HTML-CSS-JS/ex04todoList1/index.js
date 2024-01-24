const footer_input = document.querySelector(".footer_input");
const footer_button = document.querySelector(".footer_btn");
let items = document.querySelector(".items");

footer_button.addEventListener('click', () => {
  if(footer_input.value === "") {
    alert("아이템을 입력해주세요.");
    return;
  }
  let count = 1;
  for(let i = 0; i < items.children.length; i++) {
    if(items.children[i].children[0].children[0].innerText === footer_input.value) {
      alert("이미 존재하는 아이템입니다.");
      return;
    }
    count++;
  }
  items.innerHTML += 
      `<li class="item_row" data-id="${count}">
        <div class="item">
          <span class="item_name">${footer_input.value}</span>
          <button class="item_delete">
          <i class="fa-solid fa-trash-can" data-id="${count}"></i>
          </button>
        </div>
      </li>`;
  footer_input.value = "";
});

// enter key event
footer_input.addEventListener('keypress', (e) => {
  if(e.key === "Enter") {
    if(footer_input.value === "") {
      alert("아이템을 입력해주세요.");
      return;
    };
    let count = 1;
    for(let i = 0; i < items.children.length; i++) {
      if(items.children[i].children[0].children[0].innerText === footer_input.value) {
        alert("이미 존재하는 아이템입니다.");
        return;
      }
      count++;
    };
    items.innerHTML += 
      `<li class="item_row" data-id="${count}">
        <div class="item">
          <span class="item_name">${footer_input.value}</span>
          <button class="item_delete">
          <i class="fa-solid fa-trash-can" data-id="${count}"></i>
          </button>
        </div>
      </li>`;
    footer_input.value = "";
  };
});
function deleteItem(id) {
  let item = document.querySelector(`.item_row[data-id="${id}"]`);
  item.remove();
}
items.addEventListener('click', (e) => {
  let id = e.target.getAttribute('data-id');
  if(!id) {
    id = e.target.parentElement.getAttribute('data-id');
  }
  if(id) {
    deleteItem(id);
  };
});