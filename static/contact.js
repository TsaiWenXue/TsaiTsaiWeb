document.getElementById("send").addEventListener('click', function(){
    var s = document.getElementById("comment").value
    console.log(s)
    document.getElementById("comment").value = "";
    document.getElementById("success").style.display = "block";
});

document.getElementById("close").addEventListener('click', function(){
    document.getElementById("success").style.display = "none";
});

