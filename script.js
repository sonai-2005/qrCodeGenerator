const url =  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const button = document.querySelector(".get");
const input = document.querySelector(".input input");
const qr = document.querySelector(".qrcontain");

button.addEventListener("click" , ()=>{
    
    const new_url = url+input.value;
    getqr(new_url);

})
async function getqr(new_url) {
    try{
        const response = await fetch(new_url);
    const ans = await response.blob();
    const imageUrl = URL.createObjectURL(ans); // Generate image URL
    qr.innerHTML = `<img src="${imageUrl}" alt="QR Code">`

    }
    catch(error){
        console.error(`${error} fetching the qr code`);
    }
}
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        button.click();
    }
});