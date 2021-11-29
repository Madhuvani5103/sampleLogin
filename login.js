function login(){
    var x = document.getElementById('name').value;
    var y = document.getElementById('email').value;
    var z = document.getElementById('password').value;
    if (x==''||y==''||z==''){
        msg.innerHTML = "please fill out all the fields";
    }
    else{
        msg.innerHTML = x + ' You are done with the registration!';
    }
    

}