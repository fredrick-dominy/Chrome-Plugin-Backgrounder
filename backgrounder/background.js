chrome.runtime.onInstalled.addListener(function () {

    let rule = {
        conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: '<all_urls>'},})],
        actions: [new chrome.declarativeContent.ShowPageAction()]
    };

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([rule]);
    });
});
