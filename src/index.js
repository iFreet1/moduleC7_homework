export function reverseString(inputString) {
    let i = inputString.length - 1;
    let result = ""; 

    while (i >= 0) {
        result += inputString[i--];
    }
  
    return result;
}