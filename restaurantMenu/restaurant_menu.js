const breakfastMenu = ['Pancakes -$12', 'Eggs Benedict -$22.99', 'Oatmeal -$22.99', 'Frittata -$22.99'];
const mainCourseMenu = ['Steak -$24.99', 'Pasta -$17.99', 'Burger -$16.99', 'Salmon -$26.99'];
const dessertMenu = ['Cake -$7.99', 'Ice Cream -$2.99', 'Pudding -$2.99', 'Fruit Salad -$3.99'];
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