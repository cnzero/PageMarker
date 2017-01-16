function httpRequest(url, callback)
{
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onreadystatechange = function() 
	{
		if (xhr.readyState == 4)
		{
			callback(xhr.responseText);
		}
	}
	xhr.send();
}

httpRequest('https://www.baidu.com/', function(ip)
{
	document.getElementById('ip_div').innerText = ip;
	// document.getElementById('ip_div').style.color = "yellow";
})