
const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict- $22.99', 'Oatmeal -$21.99', 'Frittata - $15'];
const mainCourseMenu = ['Steak- $39.99', 'Pasta- $29.99', 'Burger- 25.99', 'Salmon- $46.99'];
const dessertMenu = ['Cake- $9.99', 'Ice Cream- $7.99', 'Pudding- 8.99', 'Fruit Salad- $4.99'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;

