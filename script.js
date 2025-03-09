let url= "https://catfact.ninja/fact"
let btn = document.querySelector("#btn")
let text = document.querySelector("p")

btn.addEventListener("click", async () => {
    let link = await gettext()
    text.innerHTML =  `${link}`
    
});

async function gettext() {
    try{
        let res=await axios.get(url);
        console.log(res.data.fact)
        return res.data.fact;
    }catch(e){
        console.log("error - ",e)
        return "/";
    }
    
}