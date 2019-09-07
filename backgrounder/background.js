chrome.runtime.onInstalled.addListener(function() {

    // uses storage API to set a value for the "color"
    chrome.storage.sync.set({color: '#cccccc'}, function() {
        console.log("The color is GREY.");
    });

    // let pageUrlObj = {hostEquals: 'developer.chrome.com'};
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'developer.chrome.com'},
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });

});
