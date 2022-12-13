const findLengthCategoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories:`, findLengthCategoriesEl.length);


const newArray = [...findLengthCategoriesEl]
    .map(element => `
    Category: ${element.children[0].textContent} 
    Elements: ${element.children[1].children.length}`).join("\n");
    
console.log(newArray);

