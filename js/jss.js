//Bài 1: 
  function binhPhuong() {
    let ketQua1 = prompt("Bình phương của");
    if (ketQua1) {
      document.getElementById("ket-qua-1").innerHTML =
        "Kết quả là " + (ketQua1 **2);
    };
  };
 
//Bài 2: 
  function tinhTheKy() {
    let ketQua2 = prompt("Nhập số năm");
    if(ketQua2) {
      document.getElementById("ket-qua-2").innerHTML =
        "Năm " + ketQua2 + " thuộc thế kỉ " + Math.ceil(ketQua2/100);
    }
  }

//Bài 3: 
  function catChuoi() {
    let mainString = prompt("Nhập vào 1 chuỗi kí tự bất kì > 15 kí tự");
    let sliceMainString = mainString.slice(0, 10);
    let baCham = " ...";
    if (mainString) {
      document.getElementById("ket-qua-3").innerHTML =
        sliceMainString + baCham
    }
  }

//Bài 4: 
function firstLetterCap() {
  let mainString = prompt("Nhập vào 1 chuỗi kí tự bất kì");
  let firstLetter = mainString.slice(0, 1);
  let allLetterBehind = mainString.slice(1);
  if (mainString ) {
    document.getElementById("ket-qua-4").innerHTML = 
      firstLetter.toUpperCase() + allLetterBehind.toLowerCase();}
}
