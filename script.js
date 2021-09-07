let colorInput = document.querySelector("#color");
let hexInput = document.querySelector("#hex");

colorInput.addEventListener("input", () =>{
    let color = colorInput.value;
    hexInput.value = color;
    document.querySelector("#color-display").style.backgroundColor = color;
    splitColor(color);
});

function splitColor(color) {
    let array = color.split("");
    console.log(array);
    let splitColors = getLetters(array);
    console.log(splitColors);
    splitColorInRGB(splitColors);
}

function getLetters(array) {
    let red = array[1] + array[2];
    let green = array[3] + array[4];
    let blue = array[5] + array[6];
    return {red, green, blue};
}

function splitColorInRGB(splitColors) {
    let red = parseInt(splitColors.red, 16);
    let green = parseInt(splitColors.green, 16);
    let blue = parseInt(splitColors.blue, 16);

    const Colors = {
        r: `${red}`,
        g: `${green}`,
        b: `${blue}`,
    };

    console.log(Colors);
    hexToRGB(Colors);
    rgbToHSL(Colors);
}

function hexToRGB(object) {
    let rgbInput = document.querySelector("#rgb");
    let RGBColors = object.r + ", " + object.g + ", " + object.b;
    rgbInput.value = RGBColors;
}

function rgbToHSL(object) {
    let r = object.r / 255;
    let g = object.g / 255;
    let b = object.b / 255;

    let h, s, l;
 
   const min = Math.min(r,g,b);
   const max = Math.max(r,g,b);
  
   if( max === min ) {
     h = 0;
   } else
   if (max === r) {
     h = 60 * (0 + (g - b) / (max - min) );
   } else
   if (max === g) {
     h = 60 * (2 + (b - r) / (max - min) );
   } else
   if (max === b) {
     h = 60 * (4 + (r - g) / (max - min) );
   }
  
   if (h < 0) {h = h + 360; }
  
   l = (min + max) / 2;
  
   if (max === 0 || min === 1 ) {
     s = 0;
   } else {
     s = (max - l) / ( Math.min(l,1-l));
   }
   // multiply s and l by 100 to get the value in percent, rather than [0,1]
   s *= 100;
   l *= 100;
 
   console.log("hsl(%f,%f%,%f%)", h, s, l);

   displayHSL(h, s, l);
}

function displayHSL(h, s, l) {
    let hslInput = document.querySelector("#hsl");
    let HSLColors = Math.floor(h) + ", " + Math.floor(s) + ", " + Math.floor(l);
    hslInput.value = HSLColors;
}

