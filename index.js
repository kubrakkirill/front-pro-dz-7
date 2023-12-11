const array = [1, '2', 5, 5, 3, '5', 4, 5, 6, 5, 5, 5, '7'];
const removeElement = (arr, item) =>{
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === item){
            arr.splice(i, 1)
            i--
        }
    }
}
removeElement(array, 5);
console.log(array);
// Результат: [1, '2', 3, '5', 4, 6, '7']