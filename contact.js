let fnameNode = document.getElementById("fname");
let lnameNode = document.getElementById("lname");
let emailNode = document.getElementById("email");
let mobileNode = document.getElementById("mobile");
let border1 = "2px solid red";
let border2 = "2px solid green";
let tdNode1 = document.getElementById("error1");
let tdNode2 = document.getElementById("error2");
let tdnode3 = document.getElementById("error3");
let tdnode4 = document.getElementById("error4");

function validate1() {
    tdNode1.textContent = "";
    let fname = fnameNode.value;
    let regExp = new RegExp("^[A-Za-z]*$");
    console.log(regExp.test(fname));
    if (fname == '') {
        tdNode1.textContent = "this field is required";
        fnameNode.style.border = border1;
        return false;
    } else if (regExp.test(fname) == false) {
        tdNode1.textContent = "name should have only alphabets";
        fnameNode.style.border = border1;
        return false;
    } else {
        fnameNode.style.border = border2;
        return true;
    }
}

function validate2() {
    tdNode2.textContent = "";
    let lname = lnameNode.value;
    let regExp = new RegExp("^[A-Za-z]*$");
    console.log(regExp.test(lname));
    if (lname == '') {
        tdNode2.textContent = "this field is required";
        lnameNode.style.border = border1;
        return false;
    } else if (regExp.test(lname) == false) {
        tdNode2.textContent = "name should have only alphabets";
        lnameNode.style.border = border1;
        return false;
    } else {
        lnameNode.style.border = border2;
        return true;
    }
}

function validate3() {
    tdnode3.textContent = "";
    let emailId = emailNode.value;
    let ss = emailId.substring(emailId.indexOf('@') + 1);
    if (emailId == '') {
        tdnode3.textContent = "this field is required";
        emailNode.style.border = border1;
        return false;
    } else if (!emailId.includes('@') || ss == '') {
        tdnode3.textContent = "Please put valid email id";
        emailNode.style.border = border1;
        return false;
    } else {
        emailNode.style.border = border2;
        return true;
    }
}

function validate4() {
    tdnode4.textContent = "";
    let mobileNumber = mobileNode.value;
    let regExp = new RegExp("^[0-9]*$");
    if (mobileNumber == '') {
        tdnode4.textContent = "this field is required";
        mobileNode.style.border = border1;
        return false;
    } else if (regExp.test(mobileNumber) == false) {
        tdnode4.textContent = "mobile number should contain only digits";
        mobileNode.style.border = border1;
        return false;
    } else if (mobileNumber.length != 10) {
        tdnode4.textContent = "please put valid mobile number";
        mobileNode.style.border = border1;
        return false;
    } else {
        mobileNode.style.border = border2;
        return true;
    }

}

function validateForm() {
    let st1 = validate1();
    let st2 = validate2();
    let st3 = validate3();
    let st4 = validate4();
    return st1 && st2 && st3 && st4;
}