//crear un arreglo de strings y cada strings es una palabra del juego

const wordListFood = ['AVOCADO', 'PINEAPPLE', 'SPAGUETTI', 'PAELLA', 'STRAWBERRY', 
'BLACKBERRY', 'GRASPBERRY', 'BLUEBERRY', 'ACORN']

export function wordPicker() {
 //   return Math.floor(Math.random() * );
return wordListFood[Math.floor(Math.random() * wordListFood.length)]
}