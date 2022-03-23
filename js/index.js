// All Variable
var next=document.getElementById("next");
var quotes=document.getElementById("quotes");
var author=document.getElementById("author");
var share=document.getElementById("share");

// API function
var url="https://type.fit/api/quotes";
async function fun(url){
    var api= await fetch(url);
    var jsonfile= await api.json();
    var index=Math.floor(Math.random()*jsonfile.length);
    share.href="whatsapp://send?text="+jsonfile[index].text;
    quotes.innerText=jsonfile[index].text;
    if(jsonfile[index].author==null)  author.innerText="unKnown";
    else author.innerText="By: "+jsonfile[index].author;

}

// for initiaal quote load
fun(url);

next.addEventListener("click",()=>{
fun(url);
});

// Button Effect
next.addEventListener("mousedown",()=>{
    next.style.transform="scale(0.95)";
});
next.addEventListener("mouseup",()=>{
    next.style.transform="scale(1)";
});
