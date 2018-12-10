function locsearch() {
    var val={};
    if(window.location.search.split("?")[1]) {
        var s=window.location.search.split("?")[1].split("&");
        for(var i=0;i<s.length;i++) {
            var v=s[i].split("=");
            val[decodeURI(v[0])]=decodeURI(v[1]);
        }
    }
    return val;
    
}