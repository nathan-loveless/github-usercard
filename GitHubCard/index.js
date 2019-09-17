/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['nathan-loveless', 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

followersArray.forEach(element => {

  axios.get(`https://api.github.com/users/${element}`)
  .then(response => {
    console.log(response);
    document.querySelector('.cards').appendChild(createComponents(response.data));
    console.log(response.data);
  })
  
  .catch(err => {
    console.log(`Error: ${err}`);
  });
});



function createComponents(data)
{
     // Create the components
  const comp = document.createElement('div');
  const compImg = document.createElement('img');
  const compData = document.createElement('div');
  const compName = document.createElement('h3');
  const compUN = document.createElement('p');
  const compLoc = document.createElement('p');
  const compPair = document.createElement('div');
  const compProfile = document.createElement('p');
  const compURL = document.createElement('a');
  const compFollowers = document.createElement('p');
  const compFollowing = document.createElement('p');
  const compBio = document.createElement('p');

    // Create the structure
    comp.appendChild(compImg);
    comp.appendChild(compData);
    compPair.appendChild(compProfile);
    compPair.appendChild(compURL);
    //compProfile.appendChild(compURL);
    compData.appendChild(compName);
    compData.appendChild(compUN);
    compData.appendChild(compLoc);   
    compData.appendChild(compPair);     
    //compData.appendChild(compProfile);
    compData.appendChild(compFollowers);
    compData.appendChild(compFollowing);
    compData.appendChild(compBio);

   // Add the classes
   comp.classList.add('card');
   compData.classList.add('card-info');
   compName.classList.add('name');
   compUN.classList.add('username');

   compPair.style.display = 'flex';
   compPair.style.fontSize = '1.5em';
   compProfile.style.paddingRight = '3px';

   compImg.setAttribute('src', data.avatar_url);
   compName.textContent = data.name;
   compUN.textContent = data.login;
   compLoc.textContent = 'Location: ' + data.location;
   compProfile.textContent = 'Profile: ';
   compURL.setAttribute('href', data.html_url);
   compURL.textContent = data.html_url;
   compFollowers.textContent = 'Followers: ' + data.followers;
   compFollowing.textContent = 'Following: ' + data.following;
   compBio.textContent = 'Bio: ' + data.bio;
   return comp;
}


