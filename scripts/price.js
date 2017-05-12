var baseMilPrice = 1.27; // Hinta per Mil

function getPrice(factor, id) {
	var totalPrice = document.getElementById(id);
	console.log(totalPrice);
	totalPrice.innerHTML = (baseMilPrice * factor).toFixed(2).bold().fontcolor("white");
}

// Hakee URL:n muuttujat ja jakaa ne
function getUrlVar() {
    var result = {};
    var location = window.location.href.split('#');
    var parts = location[0].replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        result [key] = value;
    });
    return result;
}