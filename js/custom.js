
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
var myObj = this.responseText;
var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
document.getElementById("demo").innerHTML = jsonPretty;
}
};
xmlhttp.open("GET", "https://api.blockcypher.com/v1/btc/main", true);
xmlhttp.send();
à mettre dans le fichier index.html
<pre>
<code id="demo" class="json kljs"></code>
</pre>