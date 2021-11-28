// fixed values for checking
const dummyUser = {
    name: 'superadmin',
    password: 'walmartadmin'
}

function validateUser(name,pass){
    if(name===dummyUser.name && pass===dummyUser.password){
        return true
    }else{
        return false
    }
}
function isLoggedIn(){
    const localValue = localStorage.getItem('loggedInUser');
    if(!!localValue){
        return true;
    }else{
        return false;
    }
}
function logout(){
    localStorage.setItem('loggedInUser','');
    window.location.href = "../AdminLogin.html";
}
