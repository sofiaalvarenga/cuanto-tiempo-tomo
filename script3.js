const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";

//FUNCIÓN PARA INVERTIR UNA CADENA con un bucle for decremento.
function reverseString(string){
    let newString = "";
    for (var i = string.length-1; i>= 0; i--){
        newString += string[i];
    }
    return newString;
}
console.log(reverseString(story));