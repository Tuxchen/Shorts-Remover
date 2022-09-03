chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    var shortsRegex = /https:\/\/(www\.)?youtube\.com\/shorts\/(.{11})/;

    if(tab.url.match(shortsRegex)) {
        var id = tab.url.match(shortsRegex)[2];
        //location.href = "https://www.youtube.com/watch?v=" + id;
        var normalLink = "https://www.youtube.com/watch?v=" + id;
        
        chrome.tabs.query({active: true, currentWindow: true}, tabs => {
            chrome.tabs.sendMessage(tabs[0].id, {watch: normalLink}, response => {
                console.log(response);
            });
        });
    }
});