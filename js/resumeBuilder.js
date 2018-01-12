// $("#main").append("Sohaib Zuhair Mandurah");
//var formattedRole = HTMLheaderRole.replace("%data%",role);


var work = {
  "jobs": [{
      "employer": "Saudi Aramco",
      "title": "Summer Student",
      "location": "Khobar",
      "dates": "June 2017 - September 2017",
      "description": "Trained with CBAD (Corporate Business Application Department ) Quality Management <br>" +
        "* SAP Overview<br>* Creating Tables in SAP<br>* Creating Classical Report using ABAP<br>* Online Courses" +
        "(E-learning) <br>* Presenting A Safety Meeting for the Group<br>* SMARTFORMS using ABAP <br>* Presenting A Safety Meeting for the Division "
    },

    {
      "employer": "Saudi Aramco",
      "title": "Summer Student",
      "location": "Khobar",
      "dates": "June 2016 - August 2016",
      "description": "Trained  with NSSG (Network System Support Group)<br>* firewall parser to detect " +
        "the number of users using the network and detect which one have an overused throughout the month Using " +
        "Python.<br>* Excel Report For the Most Accessed Routers in the previous 3 months<br>*Online Courses<br>*Presenting A Safety Meeting for the Group"
    }

  ]
};



var projects = {
  "projects": [

    {


      "title": "Graduation Project",
      "dates": "April 2017",
      "description": "Visual attention & Decision making in a gaming environment" +
        " is dedicated for the studies of <br>artificial intelligence Science and the study" +
        " and analysis of human Attention and interaction <br>via the computer mouse this book" +
        " gives full analysis for the project and its design and <br> the technologies that was" +
        " used is Unity Gaming Engine And C# language for programing and <br> the book deliver a" +
        " live example of the work done & an explanation for the formulas used.",
      "images": ["images/test1.png", "images/test4.png", "images/test6.png"]
    },

    {
      "title": "Even Odd Game",
      "dates": "June 2015",
      "description": "",
      "images": ["images/even1.png", "images/even2.png", "images/even3.png"]
    },

    {
      "title": "GYM",
      "dates": "June 2015",
      "description": "The	purpose	of	our	app	is	to	remind	users	when	it	is	time" +
        "	to	hit	the	gym	in	order	to	keep <br>them" +
        "accountable.	In	addition,	they	can	view	how	often	they	have	gone	to	the	gym <br>"+
        "in	order	to	track	their	" +"progress.	Our	target	audience	is	users	who	go	to	the"+
        "	gym	on	a	regular	basis",
      "images": ["images/gym1.png", "images/gym2.png", "images/gym3.png"]
    },
    {
      "title": "Quiz",
      "dates": "June 2015",
      "description": "Help to create or take or edit Quizzes",
      "images": ["images/quiz1.png", "images/quiz2.png", "images/quiz3.png"]
    },
    {
      "title": "Home Work",
      "dates": "June 2015",
      "description": "Kepp Track of your Homework with due date",
      "images": ["images/hw1.png", "images/hw2.png", "images/hw3.png"]
    }
  ]
};


var bio = {
  "name": "Sohaib Zuhair Mandurah",
  "role": "Front-End Developer",
  "welcomeMessage": "Welcome to my Interactive Resume",
  "biopic": "images/me.png",
  "contacts": {
    "mobile": "<a href='tel://+966503331527/' class='contatc-link'>+96650331527</a>",
    "email": "<a href='mailto:Sohaib.zh@gmail.com' class='contatc-link' target='_tab'>Sohaib.zh@gmail.com</a>",
    "github": "<a href='https://github.com/Sohaibzh/' class='contatc-link' target='_tab'>sohaibzh</a>",
    "twitter": "<a href='https://twitter.com/sohaibzh' class='contatc-link' target='_tab'>@Sohaibzh</a>",
    "blog": "<a href='blog.sohaibzh.com' class='contatc-link' target='_tab' >blog.sohaibzh.com</a>",
    "location": "Jeddah"
  },
  "skills": ["Java Developer", "Web Developer", "Android Developer", "SAP", "ABAP", "Paython", "Cissco Packet Tracer", "Wireshark", "Oracle Database (CMD)", "SQLit", "MySQL"]
};

var education = {
  "schools": [{
      "name": "King Abdulaziz University",
      "location": "Jeddah",
      "degree": "Bachelor ",
      "dates": "Sep/2012 - April/2017",
      "url": "<a class='url-address' href='http://Kau.edu.sa' target='_tab'>KAU</a>",
      "majors": ["Computer Science", "Advance Computer Programming"]
    },
    {
      "name": "Al-Andaluis Privet School",
      "location": "Jeddah",
      "degree": "High School ",
      "dates": "April/2009",
      "url": "<a class='url-address' href='http://misk.org.sa/services/misk-udacity-ar/' target='_tab'>Alandalus</a>",
      "majors": ['General']
    }
  ],
  "onlineCourses": [{
    "title": "Front-End Developer",
    "school": "Udacity",
    "dates": "Novmber 2017 - Februry 2017 ",
    "url": "<a class='url-address' href='http://misk.org.sa/services/misk-udacity-ar/' target='_tab'>Misk And Udacity</a>"
  }]

};


// display bio information
bio.display = function () {


  $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
  $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
  $("#topContacts,#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
  $("#topContacts,#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
  $("#topContacts,#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
  $("#topContacts,#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
  $("#topContacts,#footerContacts").append(HTMLblog.replace("%data%", bio.contacts.blog));
  $("#topContacts,#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

  $("#header").append(HTMLbioPic.replace("%data%", bio.bipic));
  $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {

      $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
  }

};


//display work information
work.display=function() {

  $("#workExperience").append(HTMLworkStart);


  //parse the jobs
  for (var i = 0; i < work.jobs.length; i++) {
    var foramttedJobs = HTMLworkEmployer.replace("%data%", work.jobs[i].employer) + HTMLworkTitle.replace("%data%", work.jobs[i].title) + HTMLworkLocation.replace("%data%", work.jobs[i].location) + HTMLworkDates.replace("%data%", work.jobs[i].dates) + HTMLworkDescription.replace("%data%", work.jobs[i].description);
    $(".work-entry:last").append(foramttedJobs);
  }



};


// display the projects
projects.display = function() {
  //check if there projects
  if (projects.projects.length > 0) {
    $("#projects").append(HTMLprojectStart);
    //loop throw the projects
    for (var i = 0; i < projects.projects.length; i++) {
      var formattedProjects = HTMLprojectTitle.replace("%data%", projects.projects[i].title) + HTMLprojectDates.replace("%data%", projects.projects[i].dates) +
        HTMLprojectDescription.replace("%data%", projects.projects[i].description);

      $(".project-entry:last").append(formattedProjects);
      //loop throw the images
      for (var j = 0; j < projects.projects[i].images.length; j++) {
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));
      }

    }


  }


};

// display the education
education.display = function() {
  // check if there schools or online curses to display
  if (education.schools.length > 0 || education.onlineCourses.length > 0) {
    $("#education").append(HTMLschoolStart);

  }

  // loop the schools
  for (var index = 0; index < education.schools.length; index++) {

    var formattedSchools = HTMLschoolName.replace("%data%", education.schools[index].name) + HTMLschoolDegree.replace("%data%", education.schools[index].degree) + HTMLschoolDates.replace("%data%", education.schools[index].dates) +
      HTMLschoolLocation.replace("%data%", education.schools[index].location) + HTMLonlineURL.replace("%data%", education.schools[index].url);

    $(".education-entry:last").append(formattedSchools);

    var formattedMajor = "";
    // check if there is more than one major
    if (education.schools[index].majors.length > 1) {

      // loop the majors
      for (var subIndex = 1; subIndex < education.schools[index].majors.length; subIndex++) {
        formattedMajor = formattedMajor + education.schools[index].majors[subIndex];
        if (subIndex != 1) {
          formattedMajor = formattedMajor + ' , ';
        }

      }

      $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", formattedMajor));
    }
    // if there is one major
    else {
      $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[index].majors[0]));
    }
  }
  // loop throw the online courses
  if (education.onlineCourses.length > 0) {
    $("#education").append(HTMLonlineClasses);
    for (var index_Online = 0; index_Online < education.onlineCourses.length; index_Online++) {
      var formattedOnlineCourses = HTMLonlineTitle.replace("%data%", education.onlineCourses[index_Online].title) + 
      HTMLonlineSchool.replace("%data%", education.onlineCourses[index_Online].school) + HTMLonlineDates.replace("%data%", education.onlineCourses[index_Online].dates) +
 		HTMLonlineURL.replace("%data%", education.onlineCourses[index_Online].url);
      $("#education").append(HTMLonlineClassesStart);
      $(".online-entry:last").append(formattedOnlineCourses);

    }
  }
};






$("#mapDiv").append(googleMap);

// call display functions
bio.display();
work.display();
projects.display();
education.display();
