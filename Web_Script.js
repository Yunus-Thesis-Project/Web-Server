function validation(){
    var username = document.loginform.uname.value;
    var password = document.loginform.passwd.value;
    if(username == "ajietb" && password == "skripsi"){
        alert("Password Benar");
        return true;
    }else if(username=="" && password==""){
        alert("Masukkan Username dan Password");
        return false;
    }else{
        alert("Username atau Password Salah");
        return false;
    }
}