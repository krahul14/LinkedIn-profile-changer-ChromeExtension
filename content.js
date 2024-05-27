var newProfilePic = 'https://cdn.engage-ai.co/wp-content/uploads/2021/02/LinkedIn-Profile-Picture-Background.jpg?strip=all&lossy=1&webp=85&ssl=1';

// Function to change profile pictures
function changeProfilePictures() {
    var profilePics = document.querySelectorAll('.ivm-view-attr__img--centered, .feed-shared-actor__avatar, .presence-entity__image, .my-profile-picture');
    profilePics.forEach(function(pic) {
      pic.src = newProfilePic;
    });
  }

setInterval(changeProfilePictures, 3000);