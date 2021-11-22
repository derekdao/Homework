const result = document.getElementById("input-result");
function clearResult() {
  result.innerText = "";
}
let calculate = (number) => {
  result.value += number;
};
let Result = () => {
  result.value = eval(result.value);
};
function del() {
  result.value = result.value.slice(0, -1);
}
