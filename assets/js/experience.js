AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Senior Blockchain Engineer",
    cardImage: "assets/images/experience-page/MMP.png",
    place: "MMP Capital",
    time: "(Nov, 021 – Feb, 2022)",
    desp: "<li>Smart Contract based ERC721 & ERC721A, ERC1155</li> <li>ERC721A is a new version of ERC721 to save minting gas fee (e.g Azuki Collection)</li> <li>Use Merkle Tree for Whitelist during PreSale to save gas fee</li> <li>NFT Staking Contract to reward users with utility/governance ERC20 tokens</li> <li>Build Art Generator for random images for every token</li> <li>Build minting frontend site with web3.js or ethers.js, React.js</li> <li>Support different wallets, </li> <li>PreSale & Public Sale Settings with Countdown</li> <li>Deploy NFT Arts to IPFS and reveal all after public sale</li> <li>Rarely develop Voxel version of NFT for future roadmap</li> <li>Dutch Auction Available</li>",
  },
  {
    title: "Blockchain Lead Developer",
    cardImage: "assets/images/experience-page/payU.jpg",
    place: "PayU",
    time: "(Jul 2020 – Oct 2021)",
    desp: "<li>Built first biggest NFT Marketplace of digital art on Binance Smart Chain. Used ERC721, ERC-1155 both for NFT and      BEP-20 for governance token. </li>"+
          "<li>Implemented basic functionalities of NFT Marketplace such as sale, auction, airdrop and used proxy for service fee calculation.</li>"+
          "<li>Implemented NFT fractionalization so that users are able to co-won NFT and decide further steps like sale, auction, airdrop together. </li>"+
          "<li>Built Staking Rewards contract, so investors earn stable tokens by staking NFTs and LP tokens.</li>"+
          "<li>Demystified Blockchain technology by offering blockchain workshops and events.</li>"+
          "<li>Worked on a Decentralized Apps that utilizes the Ethereum Blockchain for the creation of a supply chain management system interface using React.js, Redux and Node.js </li>",
  },
  {
    title: "Blockchain Developer",
    cardImage: "assets/images/experience-page/robeco.png",
    place: "Robeco",
    time: "(Mar 2019 – Jul 2020)",
    desp: "<li>Developed whole smart contract for Decentralized Exchange, passed Audit from Certik and SlowMist. </li>"+
          "<li>Developed on-chain & off-chain governance protocol with ERC20 based tokens so that users are able to make decision of adding new features a nd modifying current functionalities of platform.</li>"+
          "<li>Built Staking Rewards contract, so investors can receive tokens by staking their fiat crypto currency and LP tokens.</li>"+
          "<li>Implemented Yield Farming, snack pools and involved LP token logic in platform.</li>"+
          "<li>Built web pages for customers using React.js, React native and Redux for responsive and highly-reusable UX/UI system. </li>",
  },
  {
    title: "Senior Full Stack Developer",
    cardImage: "assets/images/experience-page/CXC.jpg",
    place: "CXC Global",
    time: "(Mar 2018 – Feb 2019)",
    desp: "<li>Cooperate diligently with other IT team members to plan, design, and develop smart solutions. </li>"+
          "<li>Liaise with network administrators, systems analysts, programmers, and other software engineers to resolve any defects in products or company systems. </li>"+
          "<li>Knowledge of technology trends, including but not restricted to front end & backend technologies, Rapid Prototyping, Behavior Driven Development, trends in Social Networking/Media, Video and Streaming. </li>"+
          "<li>Bringing mock-ups to life using JavaScript Libraries.</li>"+
          "<li>Reduced build time of Vectorworks Nomad by 30% by splitting the app in to modules. </li>"+
          "<li>Software design and development while remaining concentrate on client needs. </li>",
  },
  {
    title: "Full Stack Developer",
    cardImage: "assets/images/experience-page/siemens.png",
    place: "siemens",
    time: "( Jun 2016 – Feb 2018)",
    desp: "<li>Developed with enterprises and firms and made such a great application to give enormous profits to co-worked firms. </ li>"+
          "<li>Focused on co-works with other developers to plan, design, and develop complete applications. </li>"+
          "<li>Improved efficiency of existing solutions and fixing bugs for stable use in end-user experience. </li>"+
          "<li>Consulted regularly with a number of companies and contacted them to build smart solutions for build user friendly web apps and mobile apps and tried to increase revenue with great efforts. </li>"+
          "<li>Enhanced a number of live web applications and several platforms diligently using more powerful authentication system such as OAuth and customized web tokens. </li>"+
          "<li>Installed Docker and Git including auto scaling EC2 instances and using Elastic Beanstalk to analyze logs, deploying J2EE application with JBOSS WildFly, REDSHIFT on the AWS cloud.</li>",
  },
  {
    title: "FullStack Developer",
    cardImage: "assets/images/experience-page/mujin.jpg",
    place: "mujin inc",
    time: "(apan Sep 2012 – Jul 2016)",
    desp: "<li>Designed and developed for maintenance of secure REST/SOAP web services for payment solutions using PayPal, Stripe and credit card. </li>"+
          "<li>Used Git as source control management giving a huge speed advantage on centralized systems that have to communicate with a server.</li>"+
          "<li>Created and configured new JIRA projects and worked with departments to maintain existing JIRA projects. </li>"+
          "<li>Supported funnel and development work in Agile, waterfall and blends of these methodologies across companies</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);
