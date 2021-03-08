function validation(){
    var username = document.loginform.uname.value;
    var password = document.loginform.passwd.value;
    if(username == "ajietb" && password == "skripsi"){
        window.location.href = "http://192.168.137.104/web_data.html"
        return true;
    }else if(username=="" && password==""){
        alert("Masukkan Username dan Password");
        return false;
    }else{
        alert("Username atau Password Salah");
        return false;
    }
}