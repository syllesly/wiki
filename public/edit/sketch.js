var siteInput;
var tarea;
function setup() {
    noCanvas();
    tarea=document.getElementById("tarea");
    tarea.style.height=window.innerHeight*0.75+"px";
    siteInput=document.getElementById("site");
    if(window.location.search.split("=")[1]) {
        siteInput.value=window.location.search.split("=")[1];
    }else{
        window.location.href="../";ddd
    }
}
function draw() {

}
function c() {
    var db=firebase.database().ref().child(siteInput.value);
    var val={};
    val.lines=document.getElementById("tarea").value.split("\n");
    db.set(val);
}