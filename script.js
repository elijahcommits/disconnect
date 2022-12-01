const disconnect = document.querySelector('#disconnect');
const disconnectFontFamily = disconnect.style.fontFamily;

const fontList = ['Noer Mala Script', 'Noer Mala Script slant', 'Perfume', 'Rock n Doll Script', 'The Paragraph Script', 'CopperplateCC', 'BodoniModa06pt-Book', 'EngravingCC', 'RailroadGothicCC', 'EngravingUnshadedCC', 'Jost-Book', 'notearsbold', 'gnomon-it-foreground', 'DraftingMono-Regular', 'Besley-Fatface', 'TiffanyGothicCC'];


const getRandomColor = () => {
  const h = Math.round(Math.random() * 360),  // max value of h is 360
        s = Math.round(Math.random() * 100) + '%',  // max value of s is 100%
        l = (Math.floor(Math.random() * 70) + 20) + '%';  // max value of l is 100%
  return `hsl(${h},${s},${l})`;
};

const getRandomBackgroundColor = () => {
  const h = Math.round(Math.random() * 360),  // max value of h is 360
        s = Math.round(Math.random() * 100) + '%',  // max value of s is 100%
        l = (Math.floor(Math.random() * 70) + 20) + '%';  // max value of l is 100%
  return `hsl(${h},${s},${l})`;
};

let lastNumber = 0;
const getRandomNumber = (array) => {
  let randomNumber = Math.floor(Math.random() * array.length);  
  if (randomNumber != lastNumber) {
      let random = array[randomNumber];
      lastNumber = randomNumber;
      return random;
      // console.log(random);
  } else {
      getRandomNumber(array);
      // console.log(getRandomNumber(array));
  }
};

// function changeText(array) {
//   disconnect.style.fontFamily = getRandomNumber(fontList);
//   disconnect.style.color = getRandomColor();
// }

document.body.addEventListener('click', (array) => {
  if (disconnect.innerText != "just disconnect") {
    disconnect.innerText = "just disconnect"
  }
  disconnect.style.fontFamily = getRandomNumber(fontList);
  disconnect.style.color = getRandomColor();
  document.body.style.backgroundColor = getRandomBackgroundColor();
});