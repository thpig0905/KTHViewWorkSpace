const addBtn = document.querySelector('.addBtn');
const title = document.querySelector('#title');
const textarea = document.querySelector('#textarea');
const items = document.querySelector('.items');
const delBtn = document.querySelector('.delBtn');

let itemArr = [{
  title: 'wq',
  content: 'wq'
}];

// localStorage.setItem('itemArr', JSON.stringify(itemArr));

if(localStorage.getItem('itemArr') != null) {
  itemArr = JSON.parse(localStorage.getItem('itemArr'));
  itemArr.forEach((item) => {
    items.innerHTML += `
    <div class="item">
      <h1>${item.title}</h1>
      <p>${item.content}</p>
    </div>
    `;
  });
};

addBtn.addEventListener('click', () => {
  if(title.value === '') {
    alert('제목을 입력하세요.');
    return;
  }
  if (textarea.value === '') {
    alert('내용을 입력하세요.');
    return;
  }
  items.innerHTML += `
  <div class="item">
    <h1>${title.value}</h1>
    <p>${textarea.value}</p>
  </div>
  `;
  itemArr.push({
    title: title.value,
    content: textarea.value
  });
  localStorage.setItem('itemArr', JSON.stringify(itemArr));
  title.value = '';
  textarea.value = '';
});

delBtn.addEventListener('click', () => {
  if(title.value === '') {
    alert('제목을 입력하세요.');
    return;
  }
  for(let i = 0; i < itemArr.length; i++) {
    if(itemArr[i].title === title.value) {
      itemArr.splice(i, 1);
      localStorage.setItem('itemArr', JSON.stringify(itemArr));
      break;
    }
  }
  itemArr = JSON.parse(localStorage.getItem('itemArr'));
  items.innerHTML = '';
  itemArr.forEach((item) => {
    items.innerHTML += `
    <div class="item">
      <h1>${item.title}</h1>
      <p>${item.content}</p>
    </div>
    `;
  });
  title.value = '';
  textarea.value = '';
});