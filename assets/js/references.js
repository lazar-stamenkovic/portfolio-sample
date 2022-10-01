/*Reference Details Table*/
// Changes made 10/1/2021:
// Added reviewphoto1 - reviewphoto5 in assets/references-page
// Changed names and descriptions of references
const referenceTable = document.querySelector(".pain");

const references = [
  {
    sl1: 1,
    name1 : "Knut Ole Sjoli",
        designation1 : "CTO and Co-Founder at MapicAS",
        image1 : "assets/images/references-page/knut_ole_sjli.webp",
        message1 : "Over the course of approximately a month, I have worked with Amon. He has kept in fantastic communication, provided quick solutions to issues, aided in UI development, as well as being easy to work with. When I started, I provided a mock up of what I had expected, and he made sure every requirement was included in our final build. Overall, I am more than happy with my decision to move forward with Amon. He offered a fair price in the industry of App Development for a fully functional prototype of my game. He also reached back out to me after development to make sure there were no outstanding issues that may have been missed. I had provided a punch list, expecting these items to take approximately 2 weeks or so, and he turned the entire list around within 4 days. I encourage anyone needing app development to at least reach out to Amon, and I hope you find as much success as I have through him.",
        

        sl2:2,
        name2 : "Ilya Shirshove",
        designation2 : "Product Manager of Instahire Pty", 
        image2: "assets/images/references-page/ilya_shirshov.webp",
        message2 : "We've been working with Amon for years. Flawless and timely execution throughout. Really pleased to work with a very talented developer.",
        
        
    },

    {
        sl1:3,
        name1 : "Ilya Yordanov",
        designation1 : "Founder of MoneyWiz",
        image1 : "assets/images/references-page/ilya_yordanov.webp",
        message1 : "Amon is most loyal, ethical and dedicated developer I've ever seen.",
        

        sl2:4,
        name2 : "Gordon Marsh",
        designation2 : "CEO of CodeFuse",
        image2 : "assets/images/references-page/gordon_marsh.webp",
        message2 : "Amon is a developer that asks good questions in order to understand the project really well and works in good faith and without negligence.",
  },
];

AOS.init();
const fillData = () => {
  let output = "";

  references.forEach(
    ({
      sl1,
      image1,
      name1,
      designation1,
      message1,
      absbox_for_linkedin1,
      sl2,
      image2,
      name2,
      designation2,
      message2,
      absbox_for_linkedin2,
    }) =>
      (output += `<tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image1}" class="rImg"></td>
                <td class = "referenceTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image1}" class="imgRes">
                        </span>
                    </div>
                    <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                    <a href="#0" class="paperTitle"> ${name1} </a> 
                    <div> ${designation1} </div> <div class="rConferences">  
                        <div class="referenceY">${message1}</div>
                    </div>  
                </td>
            </tr> 
            
            <tr data-aos="zoom-in-left"> 
                       
                        <td class = "referenceTitleName">
                            <div>
                                <span class="imgResponsive">
                                    <img src="${image2}" class="imgRes">
                                </span>
                            </div>
                            <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                            <a href="#0" class="paperTitle">${name2} </a> 
                            <div> ${designation2} </div> <div class="rConferences">
                                <div class="referenceY">${message2}</div>
                            </div>
                
                            
                            
                           
                        </td>
                        <td class="imgCol"><img src="${image2}" class="rImg1"></td>
                    </tr>`)
  );
  referenceTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
