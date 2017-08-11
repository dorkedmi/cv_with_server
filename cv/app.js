var express = require('express'); //Load the web server module

var app = express(); //Create a new instance of the server

var port = 5000; //This is the port server - we'll use it later

app.use(express.static('public')); //Serve all the files under /public directly. This will return all the files under /public when you go to /.


  app.get('/', function(req, res) { //Create a new route - this will be ignored because of the previous line!
  res.send('Hello World');
});

app.get('/dor', function(req, res) { //Create a new route '/arik' and execute this code when someone goes to /arik
    res.json({ //res.json simply returns whatever json is passed to it. We return a simple object with basic info and social networks
    	profile: {
    		firstName:'DOR',
            lastName: 'KEDMI',
            title:'WEB & GRAPHIC DESIGNER'
    	},
        contant: {
            phone: '+00 1234 567 89',
            area: '123, street, Tel Aviv, Israel',
            email: 'dorkedmy@gmail.com'  
        },
        about_me: {
            title: "ABOUT ME",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly."
        },
    	socialNetworks: [
	        {
	            name: 'Skype',
	            link: '#',
	            'iconName': 'fa fa-skype'
	        },
	        {
	            name: 'Twitter',
	            link: '#',
	            'iconName': 'fa fa-twitter'
	        },
	        {
	            name: 'Facebook',
	            link: '#',
	            'iconName': 'fa fa-facebook-official'
	        },
	        {
	            name: 'Linkedin',
	            link: '#',
	            'iconName': 'fa fa-linkedin-square'
	        },
	        {
	            name: 'Pinterest',
	            link: '#',
	            'iconName': 'fa fa-pinterest'
	        }
		],
        experience: [
            {
                job_rank: 'SENIOR',
                profession: ' WEB DEVELOPER',
                year: 'Jan 2017 - Dec 2015',
                working_place: "Works in Lorem Ipsum - United States",
                description: "Sudah merupakan fakta bahwa seorang pembaca akan terpengaruh oleh isi tulisan dari sebuah halaman saat ia melihat tata letaknya. Maksud penggunaan Lorem Ipsum adalah karena."
            },
            {
                job_rank: 'SENIOR',
                profession: ' WEB DEVELOPER',
                year: 'Mar 2011 - Feb 2015',
                working_place: "Works in Lorem Ipsum - United States",
                description: "Sudah merupakan fakta bahwa seorang pembaca akan terpengaruh oleh isi tulisan dari sebuah halaman saat ia melihat tata letaknya. Maksud penggunaan Lorem Ipsum adalah karena."
            },
            {
                job_rank: 'SENIOR',
                profession: 'WEB DEVELOPER',
                year: 'Jan 2009 - Dec 2011',
                working_place: "Works in Lorem Ipsum - United States",
                description: "Sudah merupakan fakta bahwa seorang pembaca akan terpengaruh oleh isi tulisan dari sebuah halaman saat ia melihat tata letaknya. Maksud penggunaan Lorem Ipsum adalah karena selama lima kurun, tetapi telah melonjak ke era typesetting elektronik, dengan tiada perubahan ketara Ia telah dipopularkan pada tahun 1960an dengan penerbitan Letraset yang."
            },
        ],
        skills: [
                    {
                    skillName1: "photoshop",
                    progress1: "80%",
                    skillName2: "islustrator",
                    progress2: "50%",
                    skillName3: "Javascript",
                    progress3: "90%",
                    skillName4: "HTML/CSS",
                    progress4: "95%",
                    },
                    {
                    skillName1: "Creativity",
                    progress1: "60%",
                    skillName2: "Team Work",
                    progress2: "70%",
                    skillName3: "Hard Work",
                    progress3: "40%",
                    skillName4: "Leader ship",
                    progress4: "60%",
                    } 
        ],
        Education:[
             {
                        rank: 'SENIOR',
                        lesson: 'WEB DESIGNER',
                        year: 'Jan 2013 - Dec 2015',
                        school: "Boston High School - California",
                        description: "Sudah merupakan fakta bahwa seorang pembaca akan terpengaruh oleh isi tulisan dari sebuah halaman saat ia melihat tata letaknya. Maksud penggunaan Lorem Ipsum adalah karena."
             },
             {
                        rank: 'SENIOR',
                        lesson: 'WEB DESIGNER',
                        year: 'Mar 2011 - Feb 2012',
                        school: "Boston High School - California",
                        description: "Sudah merupakan fakta bahwa seorang pembaca akan terpengaruh oleh isi tulisan dari sebuah halaman saat ia melihat tata letaknya. Maksud penggunaan Lorem Ipsum adalah karena." 
            } 
                ],
        Hobbies:[
            {
               name: 'Photography',
	           'iconName': 'fa fa-camera'
            },
            {
               name: 'Music',
	           'iconName': 'fa fa-music'
            },
            {
               name: 'Football',
	           'iconName': 'fa fa-futbol-o'
            },
            {
               name: 'Cycling',
	           'iconName': 'fa fa-bicycle'
            },
            {
               name: 'Reading',
	           'iconName': 'fa fa-book'
            },
            {
               name: 'Video Game',
	           'iconName': 'fa fa-gamepad'
            }
        ],
        Languages:[
            {
                lang: "Hebrew",
                progress: "100%"
            },
            {
                lang: "English",
                progress: "80%"
            },
            {
                lang: "Spanish",
                progress: "50%"
            }
        ]
        
    });
});

app.listen(port, function(err){ //Start the server on port 5000
    console.log('running server on port ' + port); //This code is exectued when server it up and running. We just print a message
});
