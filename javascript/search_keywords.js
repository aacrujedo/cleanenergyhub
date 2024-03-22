function searchOnPage() {
  
    var searchQuery = document.getElementById("searchInput").value.toLowerCase();
    var elementsToSearch = document.querySelectorAll("p, h1, h2, h3, span, div, etc.");
 
    document.getElementById("search-results").innerHTML = "";
    elementsToSearch.forEach(function (element) {
        var elementText = element.innerText.toLowerCase();
        if (elementText.includes(searchQuery)) {
            
            var resultItem = document.createElement("div");
            resultItem.textContent = elementText;
            document.getElementById("search-results").appendChild(resultItem);
        }
    });

   
    return false;
}