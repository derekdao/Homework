let result = document.getElementById("input-result")
let calculate=(number)=> {
    result.value+=number;
}
let Result=()=> {
    result.value=eval(result.value)
}
function clear(){
    result.value = "";
}
function del(){
    result.value = result.value.slice(0,-1)
}