 function calclutor(newValue){
document.getElementById('result').value += newValue
 }

 function Delete (){
    document.getElementById('result').value = ''
 }

 function answer (){
    let a = document.getElementById('result').value
    let b = eval(a)
    document.getElementById('result').value = b
 }


 