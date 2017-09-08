//google-chrome --disable-web-security --user-data-dir="/tmp/someFolderName"
$(function(){

    $("#btnLoadRss").on("click", function() {


    $.ajax({
        url:"http://localhost:8080/rss"
    }).done(function(data) {
         console.log(data);


        var channel  = data.getElementsByTagName("channel")[0];

        var ret = constructChannel(channel);
        $("#rss-container").html(ret);

        function printItem(item) {
            var title = getNodeValue(item, "title"),
                link = getNodeValue(item , "link"),
                description = getNodeValue(item, "description"),
                guid = getNodeValue(item, "guid"),
                pubDate = getNodeValue(item, "pubDate"),
                source = getNodeValue(item, "source");
            console.log("<<item>>");
            console.log("title = ", title);
            console.log("link = ", link);
            console.log("description = ", description);
            console.log("guid = " ,guid);
            console.log("pubDate = ", pubDate);
            console.log("source = ", source);
            console.log("");

            //constructItem(item);
        }

        function getNodeValue(parent , tagName) {
            var res = parent.getElementsByTagName(tagName)[0].childNodes[0].nodeValue;
            return res ;
        }



        function constructChannel(channel) {
            var title = getNodeValue(channel, "title"),
                description = getNodeValue(channel, "description"),
                link = getNodeValue(channel, "link"),
                //  atom = getNodeValue("atom"),
                copyright = getNodeValue(channel, "copyright"),
                pubDate = getNodeValue(channel, "pubDate"),
                lastBuildDate = getNodeValue(channel, "lastBuildDate");
            var ret = "<h1><h1>Channel infos</h1><table><tr><th>Key</th><th>Value</th></tr>";
             ret += "<tr><td>title</td><td>"+title+"</td></tr>"
                 +"<tr><td>description</td><td>"+description+"</td></tr>"
                 +"<tr><td>link</td><td>"+link+"</td></tr>"
                 +"<tr><td>copyright</td><td>"+copyright+"</td></tr>"
                 +"<tr><td>pubDate</td><td>"+pubDate+"</td></tr>"
                 +"<tr><td>lastBuildDate</td><td>"+lastBuildDate+"</td></tr>"
                 + "</table>";

            var items = channel.getElementsByTagName("item");
            for(var item of items) {
                ret += constructItem(item);
            }

            return ret ;

        }

        function constructItem(item) {
            var title = getNodeValue(item, "title"),
                link = getNodeValue(item , "link"),
                description = getNodeValue(item, "description"),
                guid = getNodeValue(item, "guid"),
                pubDate = getNodeValue(item, "pubDate"),
                source = getNodeValue(item, "source");
            var ret = "<div><h1>Item</h1><table><tr><td>Key</td><td>Value</td></tr>";
            ret += "<tr><td>title</td><td>"+title+"</td></tr>"
                + "<tr><td>link</td><td>"+link+"</td></tr>"
                + "<tr><td>description</td><td>"+description+"</td></tr>"
                + "<tr><td>guid</td><td>"+guid+"</td></tr>"
                + "<tr><td>pubDate</td><td>"+pubDate+"</td></tr>"
                + "<tr><td>source</td><td>"+source+"</td></tr>"
                + "</table>";
            //console.log(ret);
            return ret ;
        }

    });

    });



    var comments = [
        "This is the first comment by edu.",
        "This is the second comment by tilos.",
        "This is the third comment by foo."
    ];

    function loadComments() {
        var msg = "<ul>";
      for(var comment of comments) {
         msg += "<li>" + comment + "</li>";
      }

        msg += "</ul>";

      $("#comments").html(msg);
    }

    loadComments();



    $("#btnAddComment").on("click", function(){
        var username = $("#username").val(),
            comment = $("#user-comment").val();

        var msg = comment + " by "+ username + ".";
        comments.push(msg);
        loadComments();
    });

});




/*
 <channel>
 <title>
 <description>
 <link>
 <atom>
 <language>
 <copyright>
 <pubDate>
 <lastBuildDate>
 <item> s
 </channel>
 */
/*       console.log(channel);
 var title = getNodeValue(channel, "title"),
 description = getNodeValue(channel, "description"),
 link = getNodeValue(channel, "link"),
 //  atom = getNodeValue("atom"),
 copyright = getNodeValue(channel, "copyright"),
 pubDate = getNodeValue(channel, "pubDate"),
 lastBuildDate = getNodeValue(channel, "lastBuildDate");
 console.log("title = ", title);
 console.log("description = ", description);
 console.log("link = ", link);
 //console.log("atom = ", atom);
 console.log("copyright = ", copyright);
 console.log("pubDate = ", pubDate);
 console.log("lastBuildDate = ", lastBuildDate);*/


/*
 <item>
 <title>
 <link>
 <description>
 <guid>
 <pubDate>
 <source>
 </item>
 */

/*  var items = channel.getElementsByTagName("item");
 for(var item of items) {
 printItem(item);
 }*/