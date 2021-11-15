function signUpButton(){
    let errorUserName = document.getElementById('user_name').value;
    let errorPassWord = document.getElementById('password').value;
    let errorConfirm = document.getElementById('confirm_password').value;
    if(errorUserName == ''){
        document.getElementById('userName_required').style.visibility ="visible"
    }else{
        document.getElementById('userName_required').style.visibility ="hidden"
    }
    if( errorPassWord.length < 6  ){
        document.getElementById('passWord_required').style.visibility ="visible"
    }else{
        document.getElementById('passWord_required').style.visibility ="hidden"
    }
    if( errorPassWord === errorConfirm) {
        document.getElementById('confirmPwdRequired').style.visibility ="visible" 
    }else{
        document.getElementById('confirmPwdRequired').style.visibility ="hidden"
    }
}