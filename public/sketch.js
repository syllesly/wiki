var search=locsearch();
var db;
var site;
var writeSiteBool=true;
function setup() {
    createCanvas(0,0);
    if(search.site) {
        db=firebase.database().ref().child(search.site);
        db.once('value',function(data) {
            site=data.val();
            for(var i=0;i<site.lines.length;i++) {
                createSpan(site.lines[i]+"<br>");
            }
        });
    }else{
        site={
            lines: [
                "That site you are looking for dosn't exist."
            ]
        }
    }
    noLoop();
} 