var database=firebase.database();
var authtoken=localStorage.getItem("authid")
var uname,width,height
var device
var home_visit=0;
var code=window.location.search;
changeWallpaper()
if(code==="?error=242"){
  setTimeout(function(){
    document.getElementById("info").style.display="block"
    document.getElementById("msg").innerHTML="/chat :: An error occured while opening chat please try again later"
  },1000)
}
else if(code==="?error=198"){
  setTimeout(function(){
    document.getElementById("info").style.display="block"
    document.getElementById("msg").innerHTML="/chat :: Your account is not verified , Please contact developer if you need help"
  location.href="MAILTO:sharmapushkar800@gmail.com"
  },1000)
}
setTimeout(function(){
   width=document.getElementById("main").offsetWidth
   height=document.getElementById("main").offsetHeight
},1000)

var ban=false;
if(typeof authtoken==="undefined"||authtoken===null || authtoken===""){
  location.href="login"
}
else{
  database.ref("login/"+authtoken).on("value",function(snap){
    uname=snap.val().user
  })
  setTimeout(function(){
    if(typeof uname==="undefined"||uname===null||uname===""){
      document.getElementById("log_data").innerHTML="Server didn't respond . This can be due to <br>1.Your Session expired </br><br>2. Slow internet connection </br><br></br><a href=''style='color:yellow'>Try again?</a> or <a href='https://sharmapushkar-coder.github.io/Disclosure/login'style='color:yellow'>Login again</a>"
    }
    else{
      document.getElementById("load").style.display="none"
      document.getElementById("user-name").innerHTML="Welcome,"+uname
      document.getElementById("noti").src="https://connectopia.repl.co/noti/?u="+uname
    }
  },5000)
}
setInterval(function(){

  database.ref("users/"+uname).on("value",function(data){
    ban=data.val().ban
  })
  if(ban==="yes"){
    alert('We notices something wrong with your Account . Please Refresh this page to continue')
    location.href="https://sharmapushkar-coder.github.io/Disclosure/terminated.html?from=m.homepage_landing"
  }
  else{
    
  }
},1000)
function home(){
  location.href="https://sharmapushkar-coder.github.io/Disclosure/"
}
setInterval(function(){
  database.ref("global").on("value",function(noti){
    notification=noti.val().note
  })
  if(typeof notification==="undefined"||notification===null|| notification===""){
    
  }
  else{
    document.getElementById("info").style.display="block"
    document.getElementById("msg").innerHTML="A Push Notification received ! <br></br><b>"+notification+"</b>"
    
  }
},1000)

function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu.style.left === "-300px") {
    menu.style.left = "0";
    document.getElementById("m").innerHTML="CLOSE MENU"
  } 
  else {
    menu.style.left = "-300px";
    document.getElementById("m").innerHTML="MENU"
  }
}

        function profile(){
          location.href='https://sharmapushkar-coder.github.io/Disclosure/profile/?u='+uname
        }
 function changeWallpaper() {
  var background = document.getElementById("background-image");
  var images = ["https://sharmapushkar-coder.github.io/Disclosure/wallpaper1.webp", "https://sharmapushkar-coder.github.io/Disclosure/wallpaper2.webp", "https://sharmapushkar-coder.github.io/Disclosure/wallpaper4.webp","https://sharmapushkar-coder.github.io/Disclosure/wallpaper5.jpg","https://sharmapushkar-coder.github.io/Disclosure/wallpaper6.jpg","https://sharmapushkar-coder.github.io/Disclosure/wallpaper7.jpg","https://sharmapushkar-coder.github.io/Disclosure/wallpaper8.jpg","https://sharmapushkar-coder.github.io/Disclosure/wallpaper9.jpg"]; // Paths to your images
  var randomIndex = Math.floor(Math.random() * images.length);
  var imageUrl = images[randomIndex];
  background.style.backgroundImage = "url('" + imageUrl + "')";
}


    function Search(){
      var usearch=document.getElementById("unsearch").value;
      if(usearch===""){

      }
      else{
       location.href="https://sharmapushkar-coder.github.io/Disclosure/profile/?u="+usearch
      }
      
    }
