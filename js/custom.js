
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
xmlhttp.open("GET", "http://bitcoin.mubiz.com/info", true);
xmlhttp.send();
xmlhttp.open("GET", "http://bitcoin.mubiz.com/blockchaininfo", true);
xmlhttp.send();
xmlhttp.open("GET", "http://bitcoin.mubiz.com/peerinfo", true);
xmlhttp.send();
xmlhttp.open("GET", "http://bitcoin.mubiz.com/mininginfo", true);
xmlhttp.send();