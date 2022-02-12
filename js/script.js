/* eslint-env jquery */
const featuredSpeakers = [{
  id: 1,
  fullName: 'Gianni Infantino',
  profilePicture: '../web/resources/img/GianniInfantinoWWC.png',
  backgroundPicture: '../web/resources/img/chessboard.svg',
  intro: 'Giovanni Vincenzo Infantino is a Swiss-Italian football administrator and the current president of FIFA',
  speech: 'Gianni Infantino\'s presidency has focused on bringing wide-ranging reforms to FIFA, expanding global participation in FIFA\'s flagship competitions and boosting FIFA\'s investment in football development through the Forward Programme.'
 },
 {
  id: 2,
  fullName: 'Jürgen Klinsmann',
  profilePicture: '../web/resources/img/JurgenKlinsmann.png',
  backgroundPicture: '../web/resources/img/chessboard.svg',
  intro: 'A thought leader who draws on experiences in elite sport and business',
  speech: 'Jürgen Klinsmann is a titan of football, both as a player and manager. Jürgen\'s successful playing career saw him lead the line for some of the most prominent teams in Europe, including: Bayern Munich, Tottenham and Inter Milan. A constant attacking threat, Jürgen racked up an impressive 108 international appearances for West Germany, scoring 47 goals.Jürgen boasts the impressive record of scoring in all six of the Major International tournaments that he participated in, from Euro 1988 to the 1998 World Cup. In 2004, Jürgen was subsequently named in the FIFA 100 list of the `125 Greatest Living Footballers` and in 2016 he became the fifth player to be named as honorary captain of Germany.'
 },
 {
  id: 3,
  fullName: 'Eid Hamad Al Qahtani',
  profilePicture: '../web/resources/img/Qahtani.png',
  backgroundPicture: '../web/resources/img/chessboard.svg',
  intro: 'Acting Precinct Director (Education City Stadium), Supreme Committee for Delivery & Legacy',
  speech: 'Putting it all together: stadium opening Eid is responsible for delivering project milestones and objectives at Education City Stadium. His passion and diligence has ensured the stadium build remained on track. His qualifications include a master\'s degree in business administration and a bachelor\'s in mechanical engineering.'
 },
 {
  id: 4,
  fullName: 'Othman Zarzour',
  profilePicture: '../web/resources/img/OthmanZarzour.png',
  backgroundPicture: '../web/resources/img/chessboard.svg',
  intro: 'Executive Director, Competition Venues, Supreme Committee for Delivery & Legacy',
  speech: 'Stadiums: innovation at scale With over 20 years in executive management, project management and business development roles, Othman has worked in sports infrastructure, urban development, renewable energy, oil & gas and construction. After graduating in engineering from Qatar University, he gained a master\'s degree in thermal power and fluid mechanics from the University of Manchester. His interests include technology development and innovation, and he has published several papers and holds two technology patents.'
 },
 {
  id: 5,
  fullName: 'Orjan Lundberg',
  profilePicture: '../web/resources/img/OrjanLundberg.png',
  backgroundPicture: '../web/resources/img/chessboard.svg',
  intro: 'Sustainability and Environmental Subject Matter Expert, Supreme Committee for Delivery & Legacy',
  speech: 'Sustainability in stadium design & development Orjan is a vital part of the team overseeing all sustainability and environmental aspects of infrastructure preparations for the FIFA World Cup Qatar 2022™. Prior to his current position, Orjan was Executive Director at the Green Building Council of Australia, where he led the development and implementation of the Green Star sustainability certification system. He has also lectured on sustainability and environmental management in his native Sweden.'
 },
 {
  id: 6,
  fullName: 'Cynthia J Hebsgaard',
  profilePicture: '../web/resources/img/CynathiaJHebsgaard.png',
  backgroundPicture: '../web/resources/img/chessboard.svg',
  intro: 'Director, Education & Training, Josoor Institute',
  speech: 'Building sports and event capability With 20 years\' experience in Canada\'s higher education sector, Cynthia\'s expertise include student affairs administration, strategic enrollment management, international branch campus management, and programme development for executive and continuing education.She holds a master\'s degree and a doctorate. As well as being published in multiple journals, Cynthia has held high-level positions at Qatar\'s branches of Georgetown University, Texas A & M University and the College of the North Atlantic.'
 },
];

let speakersList = document.querySelector('.featured-speakers-list');
let seeMore = document.getElementById('button-see-more');
// let $speakersList = $('.featured-speakers-list');
// let $seeMoreButton = $('#button-see-more');l
const seeLess = [featuredSpeakers[0], featuredSpeakers[1]];

seeLess.forEach((speaker) => {
 speakersList.innerHTML += `<li class='speaker'>
 <div class='card-img'>
 <img class='profile-img' src=${speaker.profilePicture} alt='Profile picture'>
 <img class='bg-img' src=${speaker.backgroundPicture} alt='Background picture'>
 </div>
 <div class='card-desc'>
 <h3>${speaker.fullName}</h3>
 <h5>${speaker.intro}</h5>
 <p>${speaker.speech}</p>
 </div>
 </li>`;
});

let bool = true;
seeMore.addEventListener('click', () => {
 if (bool) {
  speakersList.innerHTML = ``;
  featuredSpeakers.forEach((speaker) => {
   let newList = speakersList;
   newList.innerHTML += `<li class='speaker'>
      <div class='card-img'>
      <img class='profile-img' src=${speaker.profilePicture} alt='Profile picture'>
      <img class='bg-img' src=${speaker.backgroundPicture} alt='Background picture'>
      </div>
      <div class='card-desc'>
      <h3>${speaker.fullName}</h3>
      <h5>${speaker.intro}</h5>
      <p>${speaker.speech}</p>
      </div>
      </li>`;
   seeMore.innerHTML = `HIDE<i class="fa fa-chevron-up fa-2x mx-3"></i>`
   '<span class="btn-detail">HIDE</span><span><i class="fa fa-chevron-up fa-2x mx-3"></i></span>';
  });
  bool = false;
 } else {
  speakersList.innerHTML = ``;
  seeLess.forEach((speaker) => {
   let shortList = speakersList;
   shortList.innerHTML += `<li class='speaker'>
   <div class='card-img'>
   <img class='profile-img' src=${speaker.profilePicture} alt='Profile picture'>
   <img class='bg-img' src=${speaker.backgroundPicture} alt='Background picture'>
   </div>
   <div class='card-desc'>
   <h3>${speaker.fullName}</h3>
   <h5>${speaker.intro}</h5>
   <p>${speaker.speech}</p>
   </div>
   </li>`;
  })
  seeMore.innerHTML = `MORE<i class="fa fa-chevron-down fa-2x mx-3"></i>`
  bool = true;
 }
});
//  `<span class='button-feature'>HIDE</span><span><i class="fa-light fa-angle-up"></i></span>`
// '<span class="btn-detail">MORE</span><span><i class="fa fa-chevron-down fa-2x mx-3"></i></span>';
//<span class='button-see-less'>HIDE<i class="fa-light fa-angle-up"></i></span>
// $('#button-see-more').on('click', function(event) {
//  alert('IT WORKS BABE');


// });





// let menu = document.querySelector('.featured-speakers-list');

// // create new li element
// let li = document.createElement('li');
// li.textContent = 'About Us';
// // add it to the ul element
// menu.appendChild(li);