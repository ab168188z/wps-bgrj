function createDownloadLinkbtn(chaid,softype,filepath,referId) {
    var b = new Base64();
    var str = b.decode("eWVza3lfZG93bmxvYWQ=");
    var hexTime = new Number(Math.floor(new Date().getTime() / 1000)).toString(16);
    var md5 = $.md5(str + filepath + hexTime);
    if(softype == '2' || (softype == '6' && chaid != '113567' && chaid != '559860' && chaid != '113563' && chaid != '555900' && chaid != '587623')) {
        var newlink = "https://cdn1.mydown.com/" + hexTime + "/" + md5 + filepath;
    } else {
        var newlink = "https://cdn4.mydown.com/" + hexTime + "/" + md5 + filepath;
    }
    window.location.href = newlink;
    /*if(document.URL.indexOf("sgylq")>=0){
        sem_countone(referId,"sgllq","hx","sgylq")
    }else if(document.URL.indexOf("sgllq")>=0) {
        sem_countone(referId,"sgllq","hx","sgllq")
    }else if(document.URL.indexOf("llqsg")>=0){
        sem_countone(referId,"sgllq","hx","llqsg")  
    }*/
    sem_countone(referId,pstr)
};
/*function countdown(referId) {
    var url = "http://more.yesky.com/soft/mdown.jsp?id=" + referId + "&f=1&rnd=" + Date.parse(new Date());
}*/
/*function sem_countone(id,plan,element,key){
    var url="http://more.yesky.com/soft/mdown.jsp?id="+id+"&f=0&semkey="+plan+"_"+element+"_"+key+"";
    $.getScript(url)
    console.log(url)
}*/
function sem_countone(id,jplan){
    if(id&&jplan){
        var url="https://more.yesky.com/soft/mdown.jsp?id="+id+"&f=0&semkey="+jplan+"";
        $.getScript(url)
        console.log(url)
    }
}