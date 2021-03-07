// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// Напиши скрипт, который для каждого элемента
// ассива ingredients создаст отдельный li, после чего вставит
// все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().



const liElem = ingredients.map(ingredient => {
    const liRef = document.createElement('li');
    liRef.textContent = ingredient;

    return liRef;
    
})
const ingredientsRef = document.querySelector('#ingredients');

ingredientsRef.append(...liElem);
