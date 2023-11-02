// const data=document.getElementById("data")
// const add=async()=>{
//  await fetch('https://fakestoreapi.com/products')
//             .then((res)=>res.json())
//             .then((json) => json.forEach((item)=> {
//                 return (data.innerHTML += `<h1 class="card">${item.title}</h1><br/><img src=${item.image} />`)
//             }));
        
        
//         }
            

// add()cxz;


const data=document.getElementById("data")
const add=async()=>{
 const response  =await fetch('https://fakestoreapi.com/products')
            .then((res)=>res.json())
            .then((json) =>{ return json});  


response.forEach((item)=> {
        const header = document.createElement("h1");
        const image = document.createElement("img");
        header.innerHTML=item.title;
       image.src = item.image;
       header.classList.add("card");
       image.classList.add("product");
       data.appendChild(header);
       data.appendChild(image);
});
        }
    
    add();
