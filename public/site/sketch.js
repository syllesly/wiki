var search=locsearch();
var db;
var site;
var writeSiteBool=true;
function setup() {
    createCanvas(0,0);
    if(search.site) {
        db=firebase.database().ref().child("sites").child(search.site);
        db.once('value',function(data) {
            site=data.val();
            for(var i=0;i<site.lines.length;i++) {
                createSpan((site.lines[i].startsWith("<h1>"))?site.lines[i]:site.lines[i]+"<br>");
            }
            document.getElementById("editbuttonid").style.display="inline";
        });
    }else{
        noSite();
    }
}
function draw() {
    if(frameCount>=3*60 && !site && writeSiteBool) {
        noSite();
        writeSiteBool=false;
    }
}
function noSite() {
    createSpan("Couldn't load the page");
}
function hrefToEdit() {
    var linkSplit=window.location.href.split("site/");
    window.location.href=linkSplit.join("edit/");
}