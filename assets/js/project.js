AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Wulfz NFT",
    cardImage: "assets/images/project-page/wulfz.png",
    description: "",
    tagimg: "",
    Previewlink: "https://opensea.io/collection/wulfz-official",
    Githublink: "",
  },
  {
    title: "BabySwap",
    cardImage: "assets/images/project-page/Babyswap.PNG",
    description: "",
    tagimg: "",
    Previewlink: "https://home.babyswap.finance/",
    Githublink: "",
  },
  {
    title: "Refinable",
    cardImage: "assets/images/project-page/Refinable.PNG",
    description: "",
    tagimg: "",
    Previewlink: "https://app.refinable.com/",
    Githublink: "",
  },
  {
    title: "Letstango",
    cardImage: "assets/images/project-page/letstango.PNG",
    description: "",
    tagimg: "",
    Previewlink: "https://www.letstango.com/",
    Githublink: "",
  },
  {
    title: "Canada777",
    cardImage: "assets/images/project-page/canada777.PNG",
    description: "",
    tagimg: "",
    Previewlink: "https://canada777.com/",
    Githublink: "",
  },
  {
    title: "AppleGutter",
    cardImage: "assets/images/project-page/applegutter.PNG",
    description: "",
    tagimg: "",
    Previewlink: "https://applegutters.com/",
    Githublink: "",
  },
  {
    title: "Paladin Pandas",
    cardImage: "assets/images/project-page/paladinpandas.PNG",
    description: "",
    tagimg: "",
    Previewlink: "https://paladinpandas.com",
    Githublink: "",
  },
  {
    title: "Moooi",
    cardImage: "assets/images/project-page/moooi.PNG",
    description: "",
    tagimg: "",
    Previewlink: "https://moooi.com",
    Githublink: "",
  },
  {
    title: "Degentoonz",
    cardImage: "assets/images/project-page/degentoonz.PNG",
    description: "",
    tagimg: "",
    Previewlink: "https://degentoonz.io/",
    Githublink: "",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a target="_blank" href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
