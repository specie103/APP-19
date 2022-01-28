'use strict' 
//https://api.github.com/users/repos 
 
function findRepos(username){ 
fetch(`https://api.github.com/users/${username}/repos`) 
.then(response => response.json()) 
.then(responseJson => displayRepos(responseJson)) 
} 
 
function displayRepos(responseJson) { 
// console.log(responseJson); 
$('#results').html(''); 
responseJson.forEach(specie =>{ 
  $('#results').append(` 
   
  <h2><a href='${specie.html_url}'>${specie.full_name}</a></h2> 
  ` 
  ) 
}) 
} 
 
function watchForm(){ 
$('#form').submit(event =>{ 
  event.preventDefault(); 
  const username = event.target.username.value; 
  console.log(username) 
  findRepos(username) 
}) 
} 
 
$(function (){ 
  console.log("My App is loaded! Submission awaits!") 
watchForm() 
})


