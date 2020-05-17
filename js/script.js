console.log("Executed");

// object literal

const salon = {
    name:"The Fashion Pet",
    phone: "4075555555",
    address:{
        street:"Ave. University",
        number:"259-G"
    },
    workingHours:{
        days:"Mon-Fri",
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[], // Simulation of the DB
    count:function(){
        alert("You register a new pet, you have " + this.pets.length + "pets");
    }
}

// object destructuring

let {name,phone,address:{street,number},workingHours:{days,open,close}}=salon;

// display the salon information on the HTML (main)

// create a div with id

// use document.getElemtById().innerHTML= ` `


document.getElementById("info-main").innerHTML= ` <h3> ${name} <h3>
<p> Phone number: ${phone}, ${number}</p>
`;

//object constructor

class Pet{
    constructor(name,age,gender,breed,service,ownersName,contactPhone){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.service=service;
        this.ownersName=ownersName;
        this.contactPhone=contactPhone;
    }
    ownerInfo=function() {
        console.log(`${this.ownerName} ${this.contactPhone}`);
        
    }

}

//create pets (simple process)
const scrappy = new Pet("Scrappy", "3", "Male", "Panther", "Full Service", "Tom", "3215555555");

salon.pets.push(scrappy);
displayList(scrappy);
scrappy.ownerInfo();


//create register function

  // take the values from forom (HTML)

  let txtName = document.getElementById('petName');
  let txtAge = document.getElementById('petAge');
  let txtGender= document.getElementById('petGender');
  let txtBreed= document.getElementById('petBreed');
  let txtService = document.getElementById('petService');
  let txtOwners = document.getElementById('ownersName');
  let txtPhone = document.getElementById('contactPhone');

function register(){
   
    //create the pet
    let thePet =new Pet(txtName.value,txtAge.value,txtGender.value,txtBreed.value,txtService.value,txtOwners.value,txtPhone.value);
   
    console.log(thePet);

  
    //push the pet into the array (pets[])
    salon.pets.push(thePet);

    //display on the HTML
    displayList(thePet);

    // clear the inputs (form)
    clear();

  

    
}

function displayList(aPet){
    let listBody=document.getElementById("pet-list");
    let item = 
       ` <li> ${aPet.name} ${aPet.age} ${aPet.gender} ${aPet.breed} ${aPet.service} ${aPet.ownersName} ${aPet.contactPhone} </li>`;
       listBody.innerHTML=item
}

    function displayTable(){

    }


    
    function clear(){

        txtName.value="";
        txtAge.value="";
        txtBreed.value="";
        txtGender.value="";
        txtService.value="";
        txtOwners.value="";
        txtPhone.value="";
    }

    //add the onclick event on the button (HTML)