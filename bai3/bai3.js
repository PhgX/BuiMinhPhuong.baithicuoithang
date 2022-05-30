let str = prompt('nhập chuỗi kí tự');
let str1;
let vowel_char = ["a","o","e","u","i"]
let count = 0;
function checkString(){
    str1 = str.split("")
    for(let i = 0; i < str1.length; i++){
        for(let j = 0; j < vowel_char.length; j++){
            if(str1[i] == vowel_char[j]){
                count++
            }
        }
    }
    alert(`Số kí tự nguyên âm có trong chuỗi là : ${count}`)
}
checkString(str1)
