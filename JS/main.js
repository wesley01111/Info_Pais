fetch("https://restcountries.com/v3.1/all")
.then((Response)=>Response.json())
.then(res=>{
    const nome = document.getElementById('container')
   for (let i = 0; i < res.length; i++) {    
       const img = document.createElement('img')
       
           img.src=res[i].flags.png
           nome.appendChild(img)
           img.addEventListener("click", function() {         
           
               alert("Você clicou no elemento criado!");
            });
        } 
     }
)
 
    








