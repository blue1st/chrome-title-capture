window.onload = function(){
    var btn = document.getElementById("btn-save");
    var textarea = document.getElementById("text-format");

    // initialize
    var init = function(){
        var pattern = load_setting();
        textarea.textContent = pattern;
    };
    init();

    // set save event
    btn.addEventListener("click", function(){
        save_setting(textarea.value);
        alert("save!");
    });
}


