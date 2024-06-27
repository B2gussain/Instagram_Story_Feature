var arr=[{dp:"storydp1.jpg",story:"story1.jpg",name:"hey.b2"},
    {dp:"storydp2.jpeg",story:"story2.jpg",name:"sujal"},
    {dp:"storydp3.jpg",story:"story3.jpg",name:"siya"},
    {dp:"storydp4.jpeg",story:"story4.jpg",name:"riya"},
    {dp:"storydp5.jpeg",story:"story5.jpg",name:"priya"},
    {dp:"storydp6.avif",story:"story6.jpg",name:"rahul"},
    {dp:"storydp7.avif",story:"story7.jpg",name:"neyra"},
    {dp:"storydp8.avif",story:"story8.jpg",name:"shikha"},
    {dp:"storydp9.avif",story:"story9.jpg",name:"sumit"}
]
var clutter=""

arr.forEach(function(obj,idx){
   clutter+=`<div class="dp"><div class="dp1">
        <img  id="${idx}" src="${obj.dp}" alt="">
    </div>
    <h6>${obj.name}</h6></div>`
})
console.log(clutter)
document.querySelector(".story_sec").innerHTML=clutter
var nav=document.querySelector(".nav")

var story=document.querySelector(".story_sec");
story.addEventListener("click",function(dets){
document.querySelector(".story_screen").style.display="block";
document.querySelector(".story_screen").style.backgroundImage=`url(${arr[dets.target.id].story})`;
// document.querySelector(".story_screen").style.
document.querySelector(".outer").style.overflowY="hidden";
nav.style.display="none";
setTimeout(function() {
    document.querySelector(".story_screen").style.display="none"
    nav.style.display="block";
    document.querySelector(".outer").style.overflowY="scroll";
},3000)
});