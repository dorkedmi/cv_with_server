$(function(){


    $.get('/dor', function(data) { //This code makes an HTTP request to /arik and puts the data in the 'data' variable

        console.log('Got data', data); //We just print whatever we got from the server

        //profile
        $('#b1 header h1').text(data.profile.firstName);
        $('#b1 header h2').text(data.profile.lastName);
        $('#b1 header h3').text(data.profile.title);
        
        //contant
        $('#phone').text(data.contant.phone);
        $('#adress').text(data.contant.area);
        $('#email').text(data.contant.email);
        
        //about
        $('#about_desc').text(data.about_me.description);
        
        //social
        $('#so1').addClass(data.socialNetworks["0"].iconName);
        $('#so1n').text(data.socialNetworks["0"].name);
        $('#so2').addClass(data.socialNetworks["1"].iconName);
        $('#so2n').text(data.socialNetworks["1"].name);
        $('#so3').addClass(data.socialNetworks["2"].iconName);
        $('#so3n').text(data.socialNetworks["2"].name);
        $('#so4').addClass(data.socialNetworks["3"].iconName);
        $('#so4n').text(data.socialNetworks["3"].name);
        $('#so5').addClass(data.socialNetworks["4"].iconName);
        $('#so5n').text(data.socialNetworks["4"].name);
        
        //experience
        $('#eyear1').text(data.experience["0"].year);
        $('#eyear2').text(data.experience["1"].year);
        $('#eyear3').text(data.experience["2"].year);
        
        $('#art1title').text(data.experience["0"].working_place);
        $('#eart1').text(data.experience["0"].description);
        $('#art2title').text(data.experience["1"].working_place);
        $('#eart2').text(data.experience["1"].description);
        $('#art3title').text(data.experience["2"].working_place);
        $('#eart3').text(data.experience["2"].description);
        
        //pro skills
        $('#po1').text(data.skills["0"].skillName1);
        $('#pm1o').css({"width":data.skills["0"].progress1});
        $('#po2').text(data.skills["0"].skillName2);
        $('#pm2o').css({"width":data.skills["0"].progress2});
        $('#po3').text(data.skills["0"].skillName3);
        $('#pm3o').css({"width":data.skills["0"].progress3});
        $('#po4').text(data.skills["0"].skillName4);
        $('#pm4o').css({"width":data.skills["0"].progress4});
        
        //pre skills
        $('#pe1').text(data.skills["1"].skillName1);
        $('#pm1e').css({"width":data.skills["1"].progress1});
        $('#pe2').text(data.skills["1"].skillName2);
        $('#pm2e').css({"width":data.skills["1"].progress2});
        $('#pe3').text(data.skills["1"].skillName3);
        $('#pm3e').css({"width":data.skills["1"].progress3});
        $('#pe4').text(data.skills["1"].skillName4);
        $('#pm4e').css({"width":data.skills["1"].progress4});
        
        //education
        $('#ej1y').text(data.Education["0"].year);
        $('#sch1').text(data.Education["0"].school);
        $('#sart1').text(data.Education["0"].description);
        $('#ej2y').text(data.Education["1"].year);
        $('#sch2').text(data.Education["1"].school);
        $('#sart2').text(data.Education["1"].description);
        
        //hobbies
        $('#photog').addClass(data.Hobbies["0"].iconName);
        $('#photogN').text(data.Hobbies["0"].name);
        $('#music').addClass(data.Hobbies["1"].iconName);
        $('#musicN').text(data.Hobbies["1"].name);
        $('#foot').addClass(data.Hobbies["2"].iconName);
        $('#footN').text(data.Hobbies["2"].name);
        $('#bike').addClass(data.Hobbies["3"].iconName);
        $('#bikeN').text(data.Hobbies["3"].name);
        $('#book').addClass(data.Hobbies["4"].iconName);
        $('#bookN').text(data.Hobbies["4"].name);
        $('#game').addClass(data.Hobbies["5"].iconName);
        $('#gameN').text(data.Hobbies["5"].name);
        
        //language
        $('#l1').text(data.Languages["0"].lang);
        $('#langmeter1').css({"width":data.Languages["0"].progress});
        $('#l2').text(data.Languages["1"].lang);
        $('#langmeter2').css({"width":data.Languages["1"].progress});
        $('#l3').text(data.Languages["2"].lang);
        $('#langmeter3').css({"width":data.Languages["2"].progress});
     });


    
});
