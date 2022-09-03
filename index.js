chrome.runtime.onMessage.addListener( (request, sender, sendResponse) => {
    var link = request.watch;
    console.log("Switch to " + link);
    location.href = link;    
});