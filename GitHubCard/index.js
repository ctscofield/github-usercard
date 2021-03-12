import axios from 'axios';

axios
  .get('https://api.github.com/users/ctscofield')
  .then((res) => {
    res.data;
    const obj = res.data;
    return obj;
  })
  .catch((err) => {
    console.log(err);
  });


function structure(obj) {
  const base = document.createElement("div");
  const uImg = document.createElement("img");
  const cInfo = document.createElement("div");
  const cName = document.createElement("h3");
  const uName = document.createElement("p");
  const uLocate = document.createElement("p");
  const prof = document.createElement("p");
  const page = document.createElement("a");
  const uFollower = document.createElement("p");
  const uFollowing = document.createElement("p");
  const uBio = document.createElement("p");
  
  base.classList.add("card");
  uImg.src = obj.avatar_url;
  cInfo.classList.add("card-info");
  cName.classList.add("name");
  uName.classList.add("username");
  uLocate.textContent = `Location: ${obj.location}`;
  prof.textContent = `Profile:`
  document.getElementsByTagName("a").href = obj.html_url;
  page.textContent = `${obj.html_url}`;
  uFollower.textContent = `Followers: ${obj.followers_url}`;
  uFollowing.textContent = `Following: ${obj.following_url}`;
  uBio.textContent = `Bio: ${obj.bio}`;

  return base;
}

console.log(structure());

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
