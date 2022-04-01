var xhr = new XMLHttpRequest();

xhr.open('get','/color.txt');

xhr.send();

xhr.onload = function(){
    console.log(xhr.responseText);
    var h1 = document.getElementById("color2");
    h1.innerHTML = xhr.responseText;
    h1.style.color = xhr.responseText;
};

var btn = document.getElementById("btn");
btn.onclick = function(){
    var xhr = new XMLHttpRequest();

    xhr.open('get','/color.txt');
    
    xhr.send();
    
    xhr.onload = function(){
        console.log(xhr.responseText);
        var h1 = document.getElementById("color2");
        h1.innerHTML = xhr.responseText;
        h1.style.color = xhr.responseText;
    };
};