
console.log("shivam");
function getData()
{
	$("#main-div h2").remove();
	console.log("Hello How are you");
	$.ajax({
		type: 'GET',
		url: 'https://api.openweathermap.org/data/2.5/weather',
		data: {
			'APPID': 'd81418778f58d0953f57a29cde138e0d',
			'q': $("#cityName").val()
		},
		success: function(success_data){
			
			displayData(success_data);
		},
		error: function(error_data){
			console.log(error_data);
			$("info h1").remove();
			console.log("You Entered Invalid City Name");
		}
	});
}

function displayData(success_data)
{
	//var mydata=success_data;
	// console.log(success_data);
	// console.log(success_data.main.temp);
	// console.log(success_data.weather[0].main);

	var temp=success_data.main.temp;
	var weather=success_data.weather[0].main;
	var humidity=success_data.main.humidity;
	var E1=$('<h2>',{
		'html':"temp in C : "+(temp-273.15),
	});
	var E2=$('<h2>',{
		'html':"Weather : "+weather,
	});
	var E3=$('<h2>',{
		'html':"Humidity : "+humidity,
	});
	$("#info h1").html($("#cityName").val());
	$("#main-div").append(E1);
	$("#main-div").append(E2);
	$("#main-div").append(E3);

	$('#info').addClass('infocss');
}

function main()
{
	$('#submit').click(getData);
}
$( document ).ready(main);