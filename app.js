import { notification } from "./notification.js";


const getDataFromAnotherFileJs = ()=> {
   let header = document.querySelector("#header");
    
    let data = notification();

    let li = document.createElement("li");
      li.innerHTML = `${data}`;
      header.appendChild(li);


}
getDataFromAnotherFileJs();

