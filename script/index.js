


// let racter = document.getElementById('character');

// let newCharacter = "My Api will be Displayed";

// racter.textContent = newCharacter;
let mainContainer = document.getElementById("container");
//let deluxeRooms = ["deluxeroom1.jpeg","deluxeroom2.jpeg","deluxeroom3.jpeg","deluxeroom4.jpeg","deluxeroom5.jpeg","deluxeroom6.jpeg","deluxeroom7.jpeg","deluxeroom8.jpeg","deluxeroom9.jpeg","deluxeroom10.jpeg"];
let suiteRooms = ["suiteroom1.jpeg","suiteroom2.jpeg","suiteroom3.jpeg","suiteroom4.jpeg","suiteroom5.jpeg","suiteroom6.jpeg","suiteroom7.jpeg","suiteroom8.jpeg","suiteroom9.jpeg","suiteroom10.jpeg"];
let standardRooms = ["standardroom1.jpeg","standardroom2.jpeg","standardroom3.jpeg","standardroom4.jpeg","standardroom5.jpeg","standardroom6.jpeg","standardroom7.jpeg","standardroom8.jpeg","standardroom9.jpeg","standardroom10.jpeg"];
let deluxeRooms = [
    {
       "name":"SPOT ON 37669 Hotel Shiva Sai Lodge Near Regimental Bazaar, Shivaji Nagar, Hyderabad",
       "imageurls":[
        "deluxeroom1.jpeg",
          "https://images.oyoroomscdn.com/uploads/hotel_image/56303/medium/06883e94ec59702e.jpg",
          "https://images.oyoroomscdn.com/uploads/hotel_image/56303/medium/91dead74a5dffa61.jpg"
       ],
       "rentperday":1500,
       "type":"Delux",
       "maxcount":3,
       "phonenumber":9989649278,
       "currentbookings":[
          
       ],
       "description":"Hotel Shiva Sai Lodge is a furnished and modest property located in Regimental Bazaar, Shivaji Nagar, Secunderabad, Telangana.The property is in close vicinity to multiple tourist spots namely Sanjeeviah Park, Buddha Statue, Snow World, and Birla Science Museum."
    },
    {
       "name":"OYO Flagship 75243 Metro International",
       "imageurls":[
        "deluxeroom2.jpeg",
          "https://images.oyoroomscdn.com/uploads/hotel_image/105649/large/caef038a4b97b589.jpg",
          "https://images.oyoroomscdn.com/uploads/hotel_image/105649/large/46bffe91d06dcb96.jpg"
       ],
       "rentperday":1500,
       "type":"Delux",
       "maxcount":3,
       "phonenumber":9989649278,
       "currentbookings":[
          
       ],
       "description":"Hotel Shiva Sai Lodge is a furnished and modest property located in Regimental Bazaar, Shivaji Nagar, Secunderabad, Telangana.The property is in close vicinity to multiple tourist spots namely Sanjeeviah Park, Buddha Statue, Snow World, and Birla Science Museum."
    },
    {
       "name":"OYO FLAGSHIP 76687 Ramoji Kothapet",
       "imageurls":[
        "deluxeroom3.jpeg",
          "https://images.oyoroomscdn.com/uploads/hotel_image/107625/large/d452b4897a767f6b.jpg",
          "https://images.oyoroomscdn.com/uploads/hotel_image/107625/large/8f690e54761344e0.jpg"
       ],
       "rentperday":2000,
       "type":"Non-Delux",
       "maxcount":3,
       "phonenumber":9989649278,
       "currentbookings":[
          
       ],
       "description":"Hotel Shiva Sai Lodge is a furnished and modest property located in Regimental Bazaar, Shivaji Nagar, Secunderabad, Telangana.The property is in close vicinity to multiple tourist spots namely Sanjeeviah Park, Buddha Statue, Snow World, and Birla Science Museum."
    },
    {
       "name":"OYO 80211 Collection O Sri Navya Grand",
       "imageurls":[
        "deluxeroom4.jpeg",
          "https://images.oyoroomscdn.com/uploads/hotel_image/111796/large/d55361043c9b52af.jpg",
          "https://images.oyoroomscdn.com/uploads/hotel_image/111796/large/2f7029d3c5429b5f.jpg"
       ],
       "rentperday":1600,
       "type":"Non-Delux",
       "maxcount":4,
       "phonenumber":9989649278,
       "currentbookings":[
          
       ],
       "description":"Couples are welcome Guests can check in using any local or outstation ID proof (PAN card not accepted). Only Indian Nationals allowed As a complimentary benefit, your stay is now insured by Acko. This hotel is serviced under the trade name of Sri Navya Grand as per quality standards of OYO"
    },
    {
       "name":"Capital O 15959 The City Park",
       "imageurls":[
        "deluxeroom5.jpeg",
          "https://images.oyoroomscdn.com/uploads/hotel_image/38668/large/d24b920cfdddeecb.jpg",
          "https://images.oyoroomscdn.com/uploads/hotel_image/38668/large/58025558878fa4ec.jpg"
       ],
       "rentperday":1800,
       "type":"Non-Delux",
       "maxcount":3,
       "phonenumber":9989649278,
       "currentbookings":[
          
       ],
       "description":"Night Curfew in Telangana | Check-in allowed between 05:00 AM to 09:00 PM Couples are welcome Guests can check in using any local or outstation ID proof (PAN card not accepted). As a complimentary benefit, your stay is now insured by Acko.This hotel is serviced under the trade name of The City Park as per quality standards of OYO"
    }
 ]

function fetchHotels(){
    
    for (let i =0; i< hotels.length; i++){
        let div = document.createElement('div');
        div.classList.add("row");
     


         div.innerHTML= ` 
         <img src="./images/${hotels[i]}" alt="it is not displaying">
          <h1> Room Name<h1>
         <h3>number:  </h3>
         <h3>types:</h3>
         
        `;
        mainContainer.appendChild(div);
    
    } 



}


function fetchDeluxeRooms(){
    
    for (let i =0; i< deluxeRooms.length; i++){
        let div = document.createElement('div');
        div.classList.add("row");
     


         div.innerHTML= ` 
         <img src="./images/${deluxeRooms[i].imageurls[0]}" alt="it is not displaying">
         <div class="mydiv" >
         <h1>${deluxeRooms[i].name}</h1>
         <p>Max count ${deluxeRooms[i].maxcount} </p>
        <p>rent Per day:${deluxeRooms[i].rentperday}</p>
        <p>types:${deluxeRooms[i].type}</p>
        <p>Description : ${deluxeRooms[i].description}</p>
        <button>view details</button>
        <button>Book now</button>
        </div> 

         
        `;
        console.log(div);
        mainContainer.appendChild(div);
    
    } 



}

function fetchSuiteRooms(){
    
    for (let i =0; i< suiteRooms.length; i++){
        let div = document.createElement('div');
        div.classList.add("row");
     


         div.innerHTML= ` 
         <img src="./images/${suiteRooms[i]}" alt="it is not displaying">
          <h1> Room Name<h1>
         <h3>number:  </h3>
         <h3>types:</h3>
         
        `;
        mainContainer.appendChild(div);
    
    } 



}

function fetchStandardRooms(){
    
    for (let i =0; i< standardRooms.length; i++){
        let div = document.createElement('div');
        div.classList.add("row");
     


         div.innerHTML= ` 
         <img src="./images/${standardRooms[i]}" alt="it is not displaying">
          <h1> Room Name<h1>
         <h3>number:  </h3>
         <h3>types:</h3>
         
        `;
        mainContainer.appendChild(div);
    
    } 



}