chrome.tabs.getSelected(null, function(tab){
    var title = tab.title;
    var url = tab.url;
    var favIconUrl = tab.favIconUrl;
    
    var text = load_setting();
    text = text.replace(/\$\{title\}/g, title);
    text = text.replace(/\$\{url\}/g, url);
    text = text.replace(/\$\{favIconUrl\}/g, favIconUrl);

    var textarea = document.getElementById("url-space");
    textarea.textContent = text;
});

window.onload = function(){
    var btn = document.getElementById("btn-copy");
    btn.addEventListener("click", function(){
        var textarea = document.getElementById("url-space");
        textarea.select();
        document.execCommand("copy");
    })
}
