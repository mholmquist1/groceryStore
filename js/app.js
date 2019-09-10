const storeName = 'Farm Shop Grocery';
document.title = `${storeName} Grocery Store`;
console.log(`what is in document:`, document.all);
console.log(document.getElementsByTagName('p'));

let h1_OfHeader = document.getElementById('mainIntro');
// console.log(h1_OfHeader);
h1_OfHeader.innerHTML = 'Welcome';

 const getAllNavListClasses = document.querySelectorAll('.nav_list_item');
console.log('headers:',  getAllNavListClasses);

const getIconCredit = document.querySelector('#iconsCredit');
const testDifference = document.getElementById('iconsCredit');

console.log(getAllNavListClasses);
console.log(testDifference);

const example = document.querySelector('.nav_list_item');
console.log(example);

const getClasses = document.getElementsByClassName('nav_list_item');
console.log(getClasses);

const imageExample = document.querySelector('img[alt="cherry icon"]');
console.log(imageExample);


const magicButton = document.getElementById('magic');
console.log(magic);

magicButton.addEventListener('mouseleave', () => {
    magicButton.className ='';
    console.log('leaving:', magicButton);
});

document.addEventListener('keydown', () => {
    console.log(event.keyCode);
});

magicButton.addEventListener('click', () => {
     document.getElementById('colorMe').style.backgroundColor='#000';
});