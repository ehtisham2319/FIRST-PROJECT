let b = document.getElementsByClassName("menu")[0]
b.onclick = () =>{
    first.insertAdjacentHTML('afterend', '<section class="special"></section>')   
    let a=document.getElementsByClassName('special')[0]
    a.innerHTML = a.innerHTML + '<a href="page1.html">All Tours</a><a href="page2.html">City Tours</a><a href="page3.html">Dhow Cruise</a><a href="page4.html">Theme Parks</a><a href="page5.html">Burj Khalifa Tours</a>'
}