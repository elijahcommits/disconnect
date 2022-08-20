const disconnect = document.querySelector('#disconnect');
const disconnectFontFamily = disconnect.style.fontFamily;

const fontList = ['Noer Mala Script', 'Noer Mala Script slant', 'Perfume', 'Rock n Doll Script', 'The Paragraph Script', 'CopperplateCC', 'BodoniModa06pt-Book', 'EngravingCC', 'RailroadGothicCC', 'EngravingUnshadedCC', 'Jost-Book', 'notearsbold', 'gnomon-it-foreground', 'DraftingMono-Regular', 'Besley-Fatface', 'TiffanyGothicCC'];


const randomColor = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  disconnect.style.color = "#" + randomColor;
}


let lastNumber = 0;
const randomNumber = (array) => {
  let getRandomNumber = Math.floor(Math.random() * array.length);  
  if (getRandomNumber != lastNumber) {
      let random = array[getRandomNumber];
      disconnect.style.fontFamily = random;
      lastNumber = getRandomNumber;
      // console.log(random);
  } else {
      randomNumber(array);
      // console.log(randomNumber(array));
  }
};

function newFont(array) {
  randomNumber(fontList);
  randomColor();
}

document.body.addEventListener('click', newFont);