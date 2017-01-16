function httpRequest(url, callback)
{
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onreadystatechange = function()
	{
		if(xhr.readyState == 4)
		{
			callback(xhr.responseText);
		}
	}
	xhr.send();
}

function showWeather(result)
{
	result = JSON.parse(result);
	var list = result.list;
	var table = '<table><tr> <th>Date</th> <th>Wether</th> <th>Low T</th> <th>High T</th></tr>';

	for(var i in list)
	{
		var d = new Date(list[i].dt*1000);
		table += '<tr>';
		table += '<td>'+d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+'</td>';
		table += '<td>'+list[i].weather[0].description+'</td>';
		table += '<td>'+Math.round(list[i].temp.min-273.15)+'C</td>';
		table += '<td>'+Math.round(list[i].temp.max-273.15)+'C</td>';
		table += '</tr>';
	}
	table += '</table>';
	document.getElementById('weather').innerHTML = table;
}

var city = localStorage.city;
city = city?city:'beijing';
var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+city+',china&lang=zh_cn';
alert(url)
httpRequest(url, showWeather);
