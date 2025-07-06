

const lightMood = document.querySelector("#lightMood");
const settingBody = document.querySelector("#settingBody");
const settingIconSunDark = document.querySelector("#settingIconSunDark");
const body = document.querySelector("body");
const notification = document.querySelector("#Notification");




// export const lightDarkMood = () =>{
//     console.log(lightMood);
//     let div = document.createElement("div");
//     div.innerHTML =``;
//     div.className ="lightDarkSetting";
//     let li = document.createElement("li");
//     li.innerHTML =`<i class="fa-solid fa-cloud-sun"></i>`;
//     div.appendChild(li);
//     lightMood.append(div);
    
// }


lightMood.addEventListener("click", ()=> {
    settingBody.classList.toggle("settings");
    console.log(settingBody);
});

settingIconSunDark.addEventListener("click", ()=> {
    
    body.classList.toggle("dark");
    settingBody.style.border = "1px solid white";
})
