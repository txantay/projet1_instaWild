const cards = document.querySelector(".cards");

const animalsToAdopt = [
  {
    name: "Lucky",
    picture: "https://placekitten.com/200/287"
  },
  {
    name: "Symba",
    picture: "https://placekitten.com/200/139"
  },
  {
    name: "Léo",
    picture: "https://placekitten.com/200/90"
  },
  {
    name: "Milo",
    picture: "https://placekitten.com/200/194"
  },
  {
    name: "Charly",
    picture: "https://placekitten.com/200/179"
  }
];

function createCard(title, imageUrl) {
  const card = document.createElement("div");
  card.classList.add("card");
  cards.appendChild(card);

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  card.appendChild(cardHeader);

  const cardImg = document.createElement("div");
  cardImg.style.backgroundImage = `url(${imageUrl})`;
  cardImg.classList.add("card-img");
  cardHeader.appendChild(cardImg);

  // Step1: Create the cardBody div, add the class card-body and add it to the card

  // Step2: Create the cardTitle h2, add the class card-title,
  // set the text inside the tag to the "title" parameter of this function
  // and add it to the cardBody

  // Step3: Create the cardButton button, add the class card-button,
  // set the text inside the tag to be "Adopt Now"
  // and add it to the cardBody
}

/* Step 4: Create a for loop, for each element of the array, 
 call the function createCard with the corresponding parameter */


* {
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: roboto, sans-serif;
  }
 
  
  header {
    display: flex;
    padding: 20px;
    align-items: center;
    background-color: coral;
    height: 100px;
    width: 100%;
  }
  .cards {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .card {
    border-radius: 10px;
    width: 200px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  .card-img {
    border-radius: 10px 10px 0 0;
    background-size: cover;
    background-position: center;
    background-image: url("http://placekitten.com/200/300");
    height: 200px;
    width: 100%;
  }
  .card-body {
    padding: 10px 20px;
  }
  .card-body h2 {
    margin: 10px 0px;
  }
  .card-button {
    border: none;
    border-radius: 10px;
    height: 50px;
    background-color: lightblue;
    width: 100%;
  }
  




  @media screen and (max-width: 500px) { 

    .menu { 
  
      display: none; 
  
    } 
  
  }

*{
    box-sizing: border-box;
}  

body{
    padding: 0;
    margin: 0;
    background-color: lightcoral;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
    padding: 0;
    margin: 0;
    font-size: larger;
}

.package{
    padding: 25vh;
 