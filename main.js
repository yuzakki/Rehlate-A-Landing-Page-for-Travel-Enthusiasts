let menu = document.querySelector(".header .menu");
let ul = document.querySelector(".hero .header ul");
let menuLinks = document.querySelectorAll('.hero .header ul li a');

// Event listener for the menu button click
menu.addEventListener("click", () => {
  // Event listener for the menu button click
  if (ul.classList.contains('show-list')) {
    ul.style.left = "-100%"; // Move the menu back to the left
  } else {
    ul.style.left = "0"; // Move the menu to the right
  }
  ul.classList.toggle("show-list");;
});

// Event listener for links in the menu
for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', () => {
    ul.style.left = "-100%"; // Move the menu back to the left
    ul.classList.remove('show-list');
  });
}

// Event listener for clicks on the document
document.addEventListener('click', (event) => {
  // Check if the click event originated from outside the menu and menu button
  if (!ul.contains(event.target) && !menu.contains(event.target)) {
    ul.classList.remove('show-list'); // Remove the 'show' class from the menu
  }
});

// ########

let continue_down = document.querySelector('.hero .middle-text .continue-down img');
continue_down.addEventListener("click", () => {
  window.scrollTo({
    top: 765,
    behavior: "smooth",
  })
})


// ######## !! A LOT ISSUES ON THE CODE RIGHT MOMENT !!  ########

// // Get the trip cards
// const trips = document.querySelectorAll('.trip');

// // Store the original positions of the cards
// const originalPositions = Array.from(trips).map((trip) => ({
//   card: trip,
//   position: trip.getBoundingClientRect().left,
// }));

// // Function to start dragging the card
// function startDragging(e) {
//   const card = this;
//   const initialX = e.clientX;
//   const initialOffset = card.getBoundingClientRect().left;
//   const containerWidth = 3000; // Width within which the cards can be moved
//   const cardWidth = card.offsetWidth;
//   const otherCards = Array.from(trips).filter((trip) => trip !== card);
//   let isDragging = true;

//   // Disable transition during dragging
//   card.style.transition = 'none';
//   otherCards.forEach((otherCard) => {
//     otherCard.style.transition = 'none';
//   });

//   // Optimize rendering for transformed elements
//   card.style.willChange = 'transform';
//   otherCards.forEach((otherCard) => {
//     otherCard.style.willChange = 'transform';
//   });

//   // Move the card horizontally
//   function moveCard(event) {
//     const offsetX = event.clientX - initialX;
//     let displacementPercentage = (offsetX / cardWidth) * 100;

//     // Limit the displacement within the container width
//     displacementPercentage = Math.max(displacementPercentage, -100);
//     displacementPercentage = Math.min(displacementPercentage, 100);

//     card.style.transform = `translateX(${displacementPercentage}%)`;

//     // Move other cards along with the dragged card
//     otherCards.forEach((otherCard) => {
//       const otherDisplacement = (displacementPercentage * cardWidth) / otherCard.offsetWidth;
//       otherCard.style.transform = `translateX(${otherDisplacement}%)`;
//     });

//     // Prevent text selection during dragging
//     event.preventDefault();
//   }

//   // Stop dragging
//   function stopDragging() {
//     if (isDragging) {
//       isDragging = false;

//       // Remove event listeners for dragging
//       document.removeEventListener('mousemove', moveCard);
//       document.removeEventListener('mouseup', stopDragging);

//       // Reset card positions and enable transition
//       card.style.transform = '';
//       card.style.transition = '';

//       // Reset positions and transition for other cards
//       otherCards.forEach((otherCard) => {
//         otherCard.style.transform = '';
//         otherCard.style.transition = '';

//         // Reset will-change property
//         otherCard.style.willChange = '';
//       });

//       // Reset will-change property for the dragged card
//       card.style.willChange = '';

//       // Restore the updated positions of the cards
//       originalPositions.forEach((position) => {
//         position.card.style.transform = `translateX(${position.position}px)`;
//       });
//     }
//   }

//   // Attach event listeners for dragging
//   document.addEventListener('mousemove', moveCard);
//   document.addEventListener('mouseup', stopDragging);
// }

// // Add event listeners to each card
// trips.forEach((trip) => {
//   trip.addEventListener('mousedown', startDragging);
// });