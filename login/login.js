function hidePassword() {
  let x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
    document.getElementById("hide").style.display = "inline-block";
    document.getElementById("show").style.display = "none";
  } else {
    x.type = "password";
    document.getElementById("hide").style.display = "none";
    document.getElementById("show").style.display = "inline-block";
  }
}
// js phần login
function loginButton() {
  let inputUserName = document.getElementById('user_name').value;
  let inputPassword = document.getElementById('password').value;
  if(inputUserName ==''){
    document.getElementById('error_userName').style.visibility ="visible"
  } else{
    document.getElementById('error_userName').style.visibility ="hidden"
  }
  if(inputPassword ==''){
    document.getElementById('error_passWord').style.visibility ="visible"
  }else{
    document.getElementById('error_passWord').style.visibility ="hidden"
  }
}
