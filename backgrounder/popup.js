document.addEventListener('DOMContentLoaded', function () {
    let backgrounderButton = document.getElementById('backgrounderButton');

    backgrounderButton.onclick = function (element) {
        chrome.tabs.query(
            {active: true, currentWindow: true},
             tabs => chrome.tabs.sendMessage(tabs[0].id, 'engage-backgrounder')
        );
    };

    let aemOverlay = document.getElementById('removeAEMGraniteOverlay');

    aemOverlay.onclick = function (element) {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs => chrome.tabs.sendMessage(tabs[0].id, 'remove-AEM-overlay')));
    };

    }, false);

