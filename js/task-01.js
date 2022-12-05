const categories = document.querySelector('#categories');

console.log("Number of categories: ", categories.childElementCount);

const elementsOfCategory = categories.children

for (let item of elementsOfCategory) {
    console.log('Category: ', item.firstElementChild.textContent)
    console.log ('Elements: ', item.lastElementChild.childElementCount)
}
