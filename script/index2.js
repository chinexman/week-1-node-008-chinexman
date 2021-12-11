


// let racter = document.getElementById('character');

// let newCharacter = "My Api will be Displayed";

// racter.textContent = newCharacter;
let mainContainer = document.getElementById("container");
let images = ["starwar1.jpeg","nstarwar2.jpeg","starwar3.jpeg","starwar4.jpeg","starwar5.jpeg","starwar6.jpeg","starwar7.jpeg","starwar8.jpeg","starwar9.jpeg","starwar10.jpeg"];


function fetchPeople(){
    

    // let racter = document.getElementById('character');
    // let newCharacter = "My Api will be Displayed";
    // racter.textContent = newCharacter;
    fetch('https://swapi.dev/api/people').then( function(response){
        console.log("i got my response from Api");
        //console.log(response.json());
        return response.json();
    }).then(function(data){
        //console.log(data);
        appendData(data);
        console.log(" api data is ready to be displayed on html");
    }).catch(function(err){
        console.log('error: ' + err);
    });



    function appendData(data){

        data = data.results;

        
       for (var i =0; i< data.length; i++){
        let div = document.createElement('div');
        div.classList.add("row");


        div.innerHTML= ` 

        <img src="./images/imagename" alt="it is not displaying">
        <h1 onclick="show(){}">${data[i].name}</h1>
       
`;

   mainContainer.appendChild(div); 
    }

    


}


// function main(){

//  }
// module.exports = {main}

}
