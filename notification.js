



export const notification =()=> {
   
    fetch('https://fakestoreapi.com/users')
      .then(response => response.json())
      .then(data => console.log(data));

      let output = " ";
      data.map((value)=> {
        output += `<h3>${value.username}</h3>`;

      }).catch(error => console.log(error));

      document.querySelector("#header").innerHTML = output;
}



