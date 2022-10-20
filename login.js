listaccount = []
if (JSON.parse(sessionStorage.getItem('listaccount')) == null) {
    listaccount = []
}
else {
    listaccount = JSON.parse(sessionStorage.getItem('listaccount'))
}





checkobject = {}
accountcurrent = [];


function checkaccount() {
    var name = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    checkobject.name = name;
    checkobject.password = password;

    if (listaccount.length == 0) {
        alert('Incorrect Account Or Password');
        return false
    }

    else {
        for (var i in listaccount) {
            if (listaccount[i].name == checkobject.name && listaccount[i].password == checkobject.password) {
                accountcurrent.push(checkobject);
                sessionStorage.setItem('accountcurrent', JSON.stringify(accountcurrent))
                alert('Successfuly');
                return true
            }
        }
        alert('Incorrect Account Or Password')
        return false

    }
}



creataccountobj = {}
function creataccount() {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var password = document.getElementById('password').value;
    var confirmpassword = document.getElementById('confirmpassword').value;
    var fvsl = firstname + lastname;

    for (var i in listaccount) {
        if (listaccount[i].name == fvsl) {
            alert('tai khoan da ton tai')
            return false
        }
    }
    if (password != confirmpassword) {
        alert('Password Incorrect');
        return false
    }

    else {
        creataccountobj.name = fvsl;
        creataccountobj.password = password;
        listaccount.push(creataccountobj);
        sessionStorage.setItem('listaccount', JSON.stringify(listaccount))
        alert('Sucessfuly !')
        return true
    }
}


function signout(){
    var contain = JSON.parse(sessionStorage.getItem('accountcurrent'));
    contain.splice(contain,1);
    sessionStorage.setItem('accountcurrent',JSON.stringify(contain));
    
    document.getElementById('accountmember').innerHTML = ''

}

var containxx = JSON.parse(sessionStorage.getItem('accountcurrent'))
document.getElementById('accountmember').innerHTML = containxx[0].name




