console.log("background running");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    console.log("button clicked");
    
    chrome.tabs.sendMessage(tab.id, "run");
}