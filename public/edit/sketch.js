var siteInput;
var tarea;
var saveButton;
var renderBool=true;
var site;
function setup() {
    noCanvas();
    tarea=document.getElementById("tarea");
    siteInput=document.getElementById("site");
    if(locsearch().site) {
        siteInput.value=locsearch().site;
        firebase.database().ref().child(locsearch().site).once('value', function(data) {
            site=data.val();
            document.body.style.display="inline";
            tarea.style.height=window.innerHeight*0.75+"px";
            console.log(site);
            tarea.value=site.lines.join("\n");
            renderBool=false;
        });
    }else{
        window.location.href="";ddd
    }
    noLoop();
}

function c() {
    var db=firebase.database().ref().child(siteInput.value);
    var val={};
    val.lines=document.getElementById("tarea").value.split("\n");
    db.set(val);
}