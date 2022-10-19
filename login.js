listaccount = []
if (JSON.parse(localStorage.getItem('listaccount')) == null) {
    listaccount = []
}
else {
    listaccount = JSON.parse(localStorage.getItem('listaccount'))
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
        return
    }

    else {
        for (var i in listaccount) {
            if (listaccount[i].name == checkobject.name && listaccount[i].password == checkobject.password) {
                accountcurrent.push(checkobject);
                localStorage.setItem('accountcurrent', JSON.stringify(accountcurrent))
                alert('Successfuly');
                return
            }
        }
        alert('Incorrect Account Or Password')   

    }
}



creataccountobj = {}
function creataccount() {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var password = document.getElementById('password').value;
    var confirmpassword = document.getElementById('confirmpassword').value;
    if (password != confirmpassword) {
        alert('Password Incorrect');
        return
    }
    else {
        var fvsl = firstname + lastname;
        creataccountobj.name = fvsl;
        creataccountobj.password = password;
        listaccount.push(creataccountobj);
        localStorage.setItem('listaccount', JSON.stringify(listaccount))
        alert('Sucessfuly !')
    }
}


function displaymember(){
    var containxx = JSON.parse(localStorage.getItem('accountcurrent'))
    document.getElementById('accountmember').innerHTML =  containxx[0].name

}
displaymember()


