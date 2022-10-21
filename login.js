listaccount = []
if (JSON.parse(sessionStorage.getItem('listaccount')) == null) {
    listaccount = []
}
else {
    listaccount = JSON.parse(sessionStorage.getItem('listaccount'))
}





checkobject = {}
accountcurrent = [];
creataccountobj = {}

function creataccount() {
    var lastname = document.getElementById('lastname').value;
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value;
    var confirmpassword = document.getElementById('confirmpassword').value;

    for (var i in listaccount) {
        if (listaccount[i].username == username) {
            alert('Account Already Exists')
            return false
        }
    }
    if (password != confirmpassword) {
        alert('Password Incorrect');
        return false
    }

    else {
        creataccountobj.name = lastname;
        creataccountobj.username = username;
        creataccountobj.password = password;
        listaccount.push(creataccountobj);
        sessionStorage.setItem('listaccount', JSON.stringify(listaccount))
        alert('Sucessful !')
        return true
    }
}



function checkaccount() {
    var username = document.getElementById('usernamelogin').value;
    var password = document.getElementById('passwordlogin').value;
    checkobject.name = username;
    checkobject.password = password;

    if (listaccount.length == 0) {
        alert('Incorrect Account Or Password !');
        return false
    }

    else {
        for (var i in listaccount) {
            if (listaccount[i].username == checkobject.name && listaccount[i].password == checkobject.password) {
                accountcurrent.push(listaccount[i]);
                sessionStorage.setItem('accountcurrent', JSON.stringify(accountcurrent))
                alert('Successful !');
                return true
            }
        }
        alert('Incorrect Account Or Password !')
        return false

    }
}




function signout(){
    var contain = JSON.parse(sessionStorage.getItem('accountcurrent'));
    contain.splice(contain,1);
    sessionStorage.setItem('accountcurrent',JSON.stringify(contain));
    
    document.getElementById('accountmember').innerHTML = ''
    alert('Successful Logout !');


}

var containxx = JSON.parse(sessionStorage.getItem('accountcurrent'))
document.getElementById('accountmember').innerHTML = containxx[0].name




