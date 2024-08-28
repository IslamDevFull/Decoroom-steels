// /////////////////////////////////////////////////// animation scroll //////////////////////////////////////////////////
document.addEventListener('scroll',()=>{
  if(document.documentElement.scrollTop > 50){
      document.getElementById('nav').style.backgroundColor = 'rgb(3,15,28,1)'
  }
  else{
      document.getElementById('nav').style.backgroundColor = 'rgb(3,15,28,0.5)'
  }
})
// /////////////////////////////////////////////////// Menyu left drop //////////////////////////////////////////////////
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
// /////////////////////////////////////////////////// Preloader //////////////////////////////////////////////////
document.body.onload = ()=>{
  setTimeout(()=>{
    var preloader = document.getElementById('pageLoader');
    if(!preloader.classList.contains('done')){
      preloader.classList.add('done');
    }
  },4000)
}
