document.addEventListener('DOMContentLoaded', function () {
    let backgrounderButton = document.getElementById('backgrounderButton');

    backgrounderButton.onclick = function (element) {
        let color = element.target.value;
        chrome.tabs.query(
            {active: true, currentWindow: true},
            function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, 'engage-backgrounder');
            }
        );
    };
}, false);

