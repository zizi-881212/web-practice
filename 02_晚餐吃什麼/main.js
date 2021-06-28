let coolName = ["余上肢鮭魚下肢龜頭", "吳要代替月亮懲罰你鮭魚","洪荒之力大鮭魚"];
/*$(function() {
    $("input").on("click", function() {
        //alert("Hi");
        $("h1").text($("li:first").text());
    });
});
$(function() {
    $("input").on("click", function() {
        //alert("Hi");
        $("h1").text($("li:last").text());
    });
});
$(function() {
    $("input").on("click", function() {
        //alert("Hi");
        $("h1").text($("li").eq(1).text());
    });
}); */
$(function() {
    $("input").on("click", function() {
        //alert("Hi");
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random() * numberOfListItem);
        $("h1").text(coolName[randomChildNumber]);
    });
});