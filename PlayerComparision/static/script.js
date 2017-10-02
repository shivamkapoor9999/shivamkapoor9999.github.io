console.log("shivam");

var playerList=[{name:"Virat Kohli", pid:253802
},{name:"Sachin Tendulkar",pid:35320},{name:"MS Dhoni",pid:28081},{name:"Shikhar Dhawan",pid:28235},{name:"Suresh Raina",pid:33335}
,{name:"Rohit Sharma",pid:34102},{name:"KL Rahul",pid:422108},{name:"Ajinkya Rahane",pid:277916},{name:"Kedar Jadhav",pid:290716}
,{name:"Hardik Pandya",pid:625371},{name:"Jasprit Bumrah",pid:625383},{name:"Bhuvneshwar Kumar",pid:326016},{name:"Kuldeep Yaav",pid:559235}];

function givepid(name)
{
	for(let i=0;i<playerList.length;i++)
	{
		if(playerList[i].name==name)
		{
			return playerList[i].pid;
		}
	}
}

function getData()
{
	$('#main-div1 h1').remove();
	$('#main-div1 h2').remove();
	$('#main-div1 h3').remove();
	$('#main-div1 img').remove();
	$('#main-div2 h1').remove();
	$('#main-div2 h2').remove();
	$('#main-div2 h3').remove();
	$('#main-div2 img').remove();

	console.log("Hello How are you");
	$.ajax({
		type: 'GET',
		url: 'https://cricapi.com/api/playerStats',
		data: {
			'apikey': 'jvFOQ5v1VfP8IuSIejfXgNWzAzw2',
			'pid': givepid($("#select1").val())
		},
		success: function(success_data){
			
			displayData(success_data,$("#select1").val(),1);
		},
		error: function(error_data){
			console.log(error_data);
		}
	});

	$.ajax({
		type: 'GET',
		url: 'https://cricapi.com/api/playerStats',
		data: {
			'apikey': 'jvFOQ5v1VfP8IuSIejfXgNWzAzw2',
			'pid': givepid($("#select2").val())
		},
		success: function(success_data){
			
			displayData(success_data,$("#select2").val(),2);
		},
		error: function(error_data){
			console.log(error_data);
		}
	});
}

function displayData(success_data,playerName,l)
{
	//var mydata=success_data;
	// console.log(success_data);
	// console.log(success_data.main.temp);
	// console.log(success_data.weather[0].main);

	// var temp=success_data.main.temp;
	// var weather=success_data.weather[0].main;
	// var humidity=success_data.main.humidity;
	// var E1=$('<h2>',{
	// 	'html':"temp in C : "+(temp-273.15),
	// });
	// var E2=$('<h2>',{
	// 	'html':"Weather : "+weather,
	// });
	// var E3=$('<h2>',{
	// 	'html':"Humidity : "+humidity,
	// });
	// $("#info h1").html($("#cityName").val());
	// $("#main-div").append(E1);
	// $("#main-div").append(E2);
	// $("#main-div").append(E3);

	// $('#info').addClass('infocss');
	//console.log(success_data.keys());
	var newE1=$('<img>',{
		src:success_data.imageURL,
		width:"200",
		height:"200"
	});
	$("#main-div"+l).append(newE1);
	var newEl=$('<h1>',{
		'html':playerName
	})
	$("#main-div"+l).append(newEl);
    for (var key in success_data.data.batting){

    // console.log(key, typeof success_data.data.batting[key]);
    if(key=="tests"||key=="ODIs"||key=="T20Is")
    {
    	console.log(key);
    	console.log("=====================================================");
    	var newElement=$('<h2>',{
    		'html':key,
    	});
    	$("#main-div"+l).append(newElement);

	    for(let k2 in success_data.data.batting[key]){
	    	console.log(k2,success_data.data.batting[key][k2]);
	    	var newE=$('<h3>',{
	    		'html':k2+" : "+success_data.data.batting[key][k2]
	    	})
	    	$('#main-div'+l).append(newE);
	    }
	}
	}
}

function main()
{
	console.log("hi");
	$('#enter').click(getData);
	for(let i=0;i<playerList.length;i++)
	{
		var newElement1=$('<option>',{
			'html':playerList[i].name,
			'value':playerList[i].name
		})
		var newElement2=$('<option>',{
			'html':playerList[i].name,
			'value':playerList[i].name
		})
		$("#select1").append(newElement1);
		$("#select2").append(newElement2);
	}
}
$(document).ready(main);