function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1
}

console.log(linearSearch([-6, 1, 11, 5, 7], 11))
console.log(linearSearch([-4, 3, 9, 4, 8], 8))
console.log(linearSearch([-9, 5, 23, 34, 50], 24))
