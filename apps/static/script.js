// clock settings

var current="On-line"
var montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")
var zostalo = document.getElementById("h3");
function countdown(yr,m,d){
theyear=yr;themonth=m;theday=d
var today=new Date()
var todayy=today.getYear()
if (todayy < 1000) todayy+=1900
var todaym=today.getMonth()
var todayd=today.getDate()
var todayh=today.getHours()
var todaymin=today.getMinutes()
var todaysec=today.getSeconds()
var todaystring=montharray[todaym]+" "+todayd+", "+todayy+" "+todayh+":"+todaymin+":"+todaysec
futurestring=montharray[m-1]+" "+d+", "+yr
dd=Date.parse(futurestring)-Date.parse(todaystring)
dday=Math.floor(dd/(60*60*1000*24)*1)
dhour=Math.floor((dd%(60*60*1000*24))/(60*60*1000)*1)
dmin=Math.floor(((dd%(60*60*1000*24))%(60*60*1000))/(60*1000)*1)
dsec=Math.floor((((dd%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1)
        if(dday<=0&&dhour<=0&&dmin<=0){
        zostalo.innerHTML=current
        return
        }else if(dday<=0&&dhour<=0){
        zostalo.innerHTML=dmin+" minut, i "+dsec+" sekund"
        setTimeout("countdown(theyear,themonth,theday)",1000)
        }else if(dday<=0){
        zostalo.innerHTML=dhour+" godzin, "+dmin+" minut, i "+dsec+" sekund"
        setTimeout("countdown(theyear,themonth,theday)",1000)
        }else{
        zostalo.innerHTML=dday+ " Dni, "+dhour+" godzin, "+dmin+" minut, i "+dsec+" sekund"
        setTimeout("countdown(theyear,themonth,theday)",1000)
        }
}
//Odpalamy date z parametrami rok/miesiąc/dzień
countdown(2023,10,28);

//burger 
const mobileNav = document.querySelector('ul');
const burgerIcon = document.querySelector('.burger');



burgerIcon.addEventListener('click', function() {
    mobileNav.classList.toggle('active');
    burgerIcon.classList.toggle('active');

})

// alert
function send() {
    alert("Udało się !");
  }

// back to top
  const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})