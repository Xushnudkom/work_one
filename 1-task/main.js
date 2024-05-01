function submit(){
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    if(username === "xushnud"){
        if(password === "xush123"){
            alert("Ajoyib!")
        }else{
            alert("Password xato")
        }
    }else if(password === "xush123"){
        alert("Username xato")
    }else{
        alert("Username va Kod xato")
    }
}

const isShow=()=>{
    let password = document.getElementById("password")
    if(password.type === "password"){
        password.type = 'text'
    }else{
        password.type = 'password'
    }
}