

function validation(){
    var name = document.getElementById('uname').value;


    var mob = document.getElementById('mobile').value;
    var pat =   /^[0-9]{10}$/;

    var ep = document.getElementById('email').value;
    var email = /^[a-zA-Z0-9!#$%&*()]+@[a-zA-z0-9]+\.[a-zA-Z]{3,3}/;

    var dob = document.getElementById('dob').value;

    var aad = document.getElementById('aadhar').value;
    var aadhar =/^[0-9]{12}$/;

    var address = document.getElementById('address').value;



    if(name =="" || name == null){
        alert("Please Enter Name");
        return false;
    }


    /*if else(mob.length<=10 || mob.length>=10){
        alert("Enter 10 digit mobile number");
        return false;
    }*/


    else if(!mob.match(pat) ){
        alert("Enter 10 digit mobile number");
        return false;
    }

    else if(!ep.match(email)|| ep == "" || ep == null){
        alert("Enter valid E-mail");
        return false;

    }

    else if(dob == "" || dob == null){
        alert("Please Enter Date Of Birth");
        return false;
    }

    else if(!aad.match(aadhar) || aad == ""){
        alert("please enter valid aadhar number");
        return false;
    }

    else if(address == "" || address == null){
        alert("please Enter Address");
        return false;
    }
}