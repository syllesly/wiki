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
        firebase.database().ref().child("sites").child(locsearch().site).once('value', function(data) {
            site=data.val();
            document.body.style.display="inline";
            tarea.style.height=window.innerHeight*0.75+"px";
            console.log(site);
            tarea.value=site.lines.join("\n");
            renderBool=false;
        });
    }else{
        window.location.href="";
    }
    noLoop();
}

function c() {
    var indexDB=firebase.database().ref().child("index");
    indexDB.once('value', (data) => {
        var indexList=data.value;
        console.log(indexList);
        indexList[indexList.length]=siteInput.value;
        indexDB.set(indexList);
        var db=firebase.database().ref().child("sites").child(siteInput.value);
        var val={};
        val.lines=document.getElementById("tarea").value.split("\n");
        db.set(val);
    });
}
function goback() {
    var linkSplit=window.location.href.split("edit/");
    window.location.href=linkSplit.join("site/");
}