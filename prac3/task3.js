var num = 1;
function count() {
    document.getElementById("mcount").innerHTML = num;
    num += 1;
}

var countnum = 0;
function blog_post(){
    // document.getElementById("posts").innerHTML = new Date() +"<br>"+ things;
    // document.getElementById("posts").innerHTML = things;
    // document.getElementsByClassName("post-content").innerHTML = things;
    // myblog[0].style.color = "grey";
    // myblog[0].style.font = "bold";
    // myblog[0].innerHTML = new Date();
    // document.getElementById("posts").innerHTML = new Date();
    // var typeshow = document.getElementById("pcontent");
    // var divshow = document.getElementById("divoutput");
    // typeshow.onkeyup = function(){undefined
    // divshow.innerText = typeshow.value;        
    // }
    // for (const key in postobj) {
    //     console.log(postobj);
    // }    // var qua = -(-document.querySelector(".qua").value) ;
    // console.log(postobj);   
    // postobj.time = new Date();
    // document.getElementById("posts").innerHTML = new Date() +"<br>"+ document.getElementById("pcontent").value;
    // postobj.cont = document.getElementById("pcontent").value;   
    // var time = document.getElementById("posts");
    // // time.innerHTML = new Date();
    // // time.innerHTML;
    // time.style.color = "grey";
    // time.style.font = "bold";
    // var things = document.getElementById("pcontent") ;
    // var mycolor = document.getElementsByName("color");
    // if(mycolor[0].checked = true)
    //     document.getElementById("posts").style.color = 'blue';
    // else if(mycolor[1].checked = true)
    //     document.getElementById("posts").style.color = 'red';
    // document.getElementById("posts").innerHTML = new Date() +"<br>"+ things.value;
    // console.log(qua);
    // var postobj =new Object();
    // console.log(typeof(postobj));  

    // var posttime = document.querySelector(".post-time");
    // posttime.style.cssText = 'color : grey;font:bold';
    // posttime.innerHTML = new Date();

    // var postcontent = document.querySelector(".post-content");
    // postcontent.innerHTML = document.getElementById("pcontent").value;  

    // var posttime = document.querySelector(".post-time");
    // posttime.style.cssText = 'color : grey;font:bold';      
    // // posttime.innerHTML = new Date();    
    // var postcontent = document.querySelector(".post-content");
    // let content = document.getElementById("bb");
    // let redcontent = document.getElementById("rr");    
    // // postcontent.innerHTML = document.getElementById("pcontent").value;
    // posttime.innerHTML += "<br/>" + new Date();
    // postcontent.innerHTML += "<br/>" + document.getElementById("pcontent").value;    
     
    var qua = document.querySelector(".qua").value;
    qua = -(-qua);

    for(let i = 0;i< qua && i <= 10; i++)
    {
        if(countnum>9)
            break;
    const divtime = document.createElement("div");
    divtime.append(new Date());
    divtime.setAttribute("class","post-time");
    // divtime.className = "post-time";
    divtime.setAttribute("style","color: grey; font:bold;");
    // var posttime = document.querySelector(".posts");
    const onepost = document.createElement("div");
    onepost.setAttribute("id","apost"+countnum);
    onepost.setAttribute("class","ipost blog-post");
    document.querySelector("#posts").append(onepost);
    document.querySelector("#apost"+countnum).append(divtime);
    
    const divcontent = document.createElement('div');
    divcontent.setAttribute("class","post-content");
    divcontent.append(document.querySelector("#pcontent").value);
    // var postcontent = document.querySelector(".posts");
    document.querySelector("#apost"+countnum).append(divcontent);

    if(document.querySelector(".blueco").checked==true && document.querySelector(".blueco").value=="blue")
        {divcontent.setAttribute("style","color: blue;");}
    if(document.querySelector(".redco").checked==true && document.querySelector(".redco").value=="red")
        {divcontent.setAttribute("style","color: red;");}  

    if(document.querySelector(".boldst").checked==true)
        // divcontent.style.fontWeight.bold;
        divcontent.setAttribute("style","font-weight: bold;");  
    if(document.querySelector(".italicst").checked==true)
        divcontent.setAttribute("style","font-style: italic;");  
        // divcontent.style.fontStyle.italics;
    if(document.querySelector(".italicst").checked==true && document.querySelector(".boldst").checked==true)
        divcontent.setAttribute("style","font-style: italic;font-weight: bold;");  

    countnum += 1;          
    }



}
  


function hidediv(){
    document.getElementById("main").style.display='none';
    document.getElementById("menu").style.display='block';
}
function showdiv(){
    document.getElementById("main").style.display='block';
    document.getElementById("menu").style.display='none';
}

function bgcolor(){
    document.body.style.backgroundColor = document.getElementById("colorcontrollor").value;
}

// function cblue(){
//     var content = document.querySelector(".blueco");
//     var postcontent = document.querySelector(".post-content");
//     if(content.checked==true && content.value=="blue")
//         postcontent.style.color = 'blue';  
// }
// function cred(){
//     var content = document.querySelector(".redco");
//     var postcontent = document.querySelector(".post-content");
//     if(content.checked==true && content.value=="red")
//         postcontent.style.color = 'red';  
// }


    


function drag(){
    var qua = document.querySelector("#showhowmanydiv").value;
    qua = -(-qua);   
    console.log(countnum);
    console.log(qua);    
    var bigdiv = document.querySelector("#posts");
    var smalldiv = bigdiv.querySelectorAll(".blog-post");
    for (let s = 0; s < countnum; s++) {
        if( s >= qua)
        {
            smalldiv[s].style.display = 'none';
        }

        else if( s < qua && s<10)
        {
            smalldiv[s].style.display = 'block';                     
        }
    }
}