const validiate = () => {
    const name = document.getElementById("nameId").value;
    const email = document.getElementById("emailId").value;
    const mobile = document.getElementById("mobileId").value;
    const password = document.getElementById("passwordId").value;
    const cnfPassword = document.getElementById("cnfpasswordId").value;

    if (name.length < 2) {
        document.getElementById(nameerr).innerHTML = "please Enter valid Name";

    }
    if (999999999 < mobile > 9999999999) {
        document.createElement(p).innerHTML = "please Enter valid Number";

    }
    if (password)



}