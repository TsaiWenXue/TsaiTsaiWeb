document.getElementById("send").addEventListener('click', function(){
    var s = document.getElementById("comment").value
    if (s === "") {
        document.getElementById("warning").style.display = "block";
    }else {
        document.getElementById("success").style.display = "block";
        document.getElementById("comment").value = "";
    }
    
});

document.getElementById("success-close").addEventListener('click', function(){
    document.getElementById("success").style.display = "none";
});

document.getElementById("warning-close").addEventListener('click', function(){
    document.getElementById("warning").style.display = "none";
});
