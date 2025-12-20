


//  function updateClock() {
// 				const now = new Date();
  
//     // Get the current hour, minute, and second
//     const hours = now.getHours().toString().padStart(2, '0');
//     const minutes = now.getMinutes().toString().padStart(2, '0');
//     const seconds = now.getSeconds().toString().padStart(2, '0');

//     // Update the clock display with the current time
//     document.getElementById('hour').textContent = hours;
//     document.getElementById('minute').textContent = minutes;
//     document.getElementById('second').textContent = seconds;

//     // Get the current day of the week, month, date, and year
//     const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
//     const day = dayNames[now.getDay()];
//     const month = monthNames[now.getMonth()];
//     const date = now.getDate();
//     const year = now.getFullYear();

//     // Update the date display with the current day, date, month, and year
//     document.getElementById('date').textContent = `${day}, ${date} ${month} ${year}`;
//   }

//   // Call the updateClock function every 1000 milliseconds (1 second)
//   setInterval(updateClock, 1000);
//   // Initial call to display the time immediately when the page loads
//   updateClock();





//   var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }



var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


