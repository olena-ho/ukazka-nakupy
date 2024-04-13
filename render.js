import { 
  list,
  deleteItem,
  toggleBought,
} from "./shoplist.js";

export const renderList = () => {
  const shoplistElement = document.querySelector('.shoplist');
  shoplistElement.innerHTML = '';
  list.forEach((item) => {
    let tickClass = 'btn-tick';

    if (item.bought) {
      tickClass += ' btn-tick--on';
    }

    shoplistElement.innerHTML += `
      <div class="shopitem">
        <button class="${tickClass}" class="shopitem__tick"></button>
        <div class="shopitem__name">${item.name}</div>
        <div class="shopitem__amount">${item.amount}</div>
        <button class="btn-delete">Smazat</button>
      </div>
    `;
  });

  const deleteButtons = document.querySelectorAll('.shopitem .btn-delete');
  deleteButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      deleteItem(index);
      renderList();
    });
  });

  const tickButtons = document.querySelectorAll('.shopitem .btn-tick');
  tickButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      toggleBought(index);
      renderList();
    });
  });
};
