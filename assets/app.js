

var searchInput = $("#searchInput");

var startYr = "&begin_date=" + $("#startYr") + "0101";

var endYr = "&end_date=" + $("#endYr") + "1230"

var maxArt = $("#maxArt");



$("#searchButton").on("click", function() {
	var authKey = "a1cddd375d3b40acb5e2f5c63ebf1e11"
	// 'api-key': "a1cddd375d3b40acb5e2f5c63ebf1e11"
	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + searchInput + startYr + endYr;

	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(result) {
	  console.log(result);

	  var card = ("div");
	  card.addClass("sampCard");
	  
	  var title = ("<h3>resultTitle</h3>");
	  title.addClass("title");








	}).fail(function(err) {
	  throw err;
	});

})






