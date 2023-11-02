const title=document.createElement("")
const add=document.getElementById("add")
const remove=document.getElementById("remove")

add.addEventListener("click",()=>{
    title.classList.add("title")
})
remove.addEventListener("click",()=>{
    title.classList.remove("title")
})
const heading=document.createElement("h1")

heading.innerHTML="Afsheen khan";
heading.backgroundColor="blue"
heading.style.backgroundColor="brown"
heading.classList.add("titlewins")

heading.addEventlistner("mouseover",()=>{
 heading.innerHTML="Arshad karim"
   heading.classList.add("titlelose")
  })
document.body.appendChild(heading);