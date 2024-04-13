export const list = [
  { name: 'Mléko', amount: '1 litr', bought: true },
  { name: 'Rohlíky', amount: '10 ks', bought: false },
  { name: 'Pivo Krušovice', amount: '2 ks', bought: false },
  { name: 'Sýr Eidem', amount: '200 g', bought: true },
  { name: 'Paštika', amount: '1 ks', bought: false },
  { name: 'Máslo', amount: '250 g', bought: true },
];

export const addItem = (name, amount) => {
  const newItem = {
    name, //shorthand for 'name: name, (we can write just name if the property and the variable have the same name)
    amount,
    bought: false,
  };
  list.push(newItem);
}

export const toggleBought = (index) => {
  list[index].bought = !list[index].bought;
}

export const deleteItem = (index => {
  list.splice(index, 1);
})
