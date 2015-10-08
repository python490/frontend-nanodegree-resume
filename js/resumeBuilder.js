/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*
 $("#main").append("Chris ");

var awesomeThoughts = "I am AWESOME";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
console.log(funThoughts);
$('#main').append(funThoughts);
*/
// var name = "Chris";
// var formattedName = HTMLheaderName.replace("%data%",name);
// var role = "Software Engineer";
// var formattedRole = HTMLheaderRole.replace("%data%", role);

// $('#header').prepend(formattedName);
// $('#header').prepend(formattedRole);

var bio = {
  "name":name,
  "role":role,
  "picture": '<a href="http://imgur.com/Ft5x47U"><img src="http://i.imgur.com/Ft5x47Us.jpg" title="source: imgur.com" /></a>',
  "welcome": "Welcome to my resume",
  "skills": ["Java","C", "HTML"]
}

var work ={}
work['position'] = "Ex-Student";
work['years'] = 4;
work['city'] = "San Jose";

var education ={
  "schools": [
  {
    "name":"San Jose State",
    "location" : "San Jose"
  },
  {
    "name":"Udacity",
    "location" : "Palo Alto"
  }
]
}

var projects = {
  "projects":[
    {
      "name": "Magic The Gathering"
    },
    {
      "name": "Resume Builder JS"
    }
  ]
}
