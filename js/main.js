// $("body").append("<div id='fractal-wrapper'></div>");
// $("#fractal-wrapper").append("<div></div>");


// for (i = 0; i < 49; i++) {
//     console.log("i", i);
//     $("#fractal-wrapper").append("<div class='fractal-div'></div>");
// }
//
//
//

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

let parser = new RSSParser();
parser.parseURL(CORS_PROXY + 'https://www.reddit.com/.rss', function(err, feed) {
    // console.log(feed.title);
    // console.log("feed", feed);
    feed.items.slice(-10).forEach(function(entry) {

        // console.log(entry.title + ':' + entry.link);

        // $("#reddit").append("<div class='title'>" + entry.title + "</div>" + "<div class='link'>" + entry.link + "</div>");
        // $("#reddit").append("<div class='title'>" + entry.title + "</div>" + "<a href='" + entry.link + "' class='link'>" + entry.link + "</div>");
        $("#reddit").append(entry.content);

    })
})


$(document).ready(function() {
    $('#reddit > :not(table)').hide();
});
