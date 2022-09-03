let options = {
    "time": 300000 ,
    "website": "all",
}

function notifyExtension(e) {
    browser.runtime.sendMessage({});
}

if(options["website"] === "all"){
    setInterval(notifyExtension,  options["time"]);
}


