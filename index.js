//let delayInMilliseconds = 2000; //2 second

//setTimeout(function() {
//  document.getElementById('Pixel').src="./Images/Pixel-Angel-Hello.png";
//}, delayInMilliseconds);



function handleStartClick () {

  let start = document.getElementById('Start');
  let newProject = document.getElementById('New-Project');
  let load = document.getElementById('Continue');


  if (start.style.display= 'block'){

    start.style.display= 'none';
    newProject.style.display= 'block';
    load.style.display= 'block';
  }
  else {null}
}
