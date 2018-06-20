
$(document).ready(function() {
    var sourceCode = document.getElementsByTagName('html')[0].innerHTML;
    var sideBarContent = "";
    var navigationContent = "";
    var headers = "";
    var paragraphContent = "";
    var lists = "";
    var tableContent = "";
    var imageAlt = "";
   
    function addToContent(content, tag) {
       var count = document.getElementsByTagName(tag).length;
       for (var i = 0; i < count; i++) {
         content += document.getElementsByTagName(tag)[i].innerHTML + " ";
        }
      console.log(content);
    }
   
    addToContent(sideBarContent, "aside");
    addToContent(headers, "h");
    addToContent(paragraphContent, "p");
    addToContent(lists, "li");
    addToContent(tableContent, "table");
    addToContent(navigationContent, "a");
    var count = document.getElementsByTagName("img").length;
    for (var i = 0; i < count; i++) {
      imageAlt += document.getElementsByTagName("img")[i].getAttribute("alt") + " ";
    }
   
});
   
   