// Create a Set called `colors` with some color names. Use a `for...of` loop to iterate
// over the Set and log each color.
const colors = new Set();
colors.add("blue");
colors.add("yellow");
colors.add("black");
colors.add("green");
colors.add("purple");
for(col of colors){
    console.log(col)
}