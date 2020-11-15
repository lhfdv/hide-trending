setInterval( function(){
        var section = document.getElementsByTagName("section");
        for (var i = 0; i<section.length; i++){
            var trend = section[i];
            if (trend.childElementCount !== 3){
                continue;
            }
            if (trend.children[0].innerText.indexOf("トレンド") >= 0){
                trend.style.display = "none";
            }
            if (trend.children[0].innerText.indexOf("Trending") >= 0){
                trend.style.display = "none";
            }
        }
    }
);
