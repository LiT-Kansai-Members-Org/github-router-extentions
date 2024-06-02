function addButton() {
    try {
        if (document.getElementById("extentions-button-container") == null && document.querySelector(".pagehead-actions") != null) {
            var newElement = document.createElement('li');
            newElement.id = "extentions-button-container";
            newElement.innerHTML = '<div class="BtnGroup ml-0 flex-1"><button class="btn-sm btn BtnGroup-item" id="extentions-button"><span>Copy your own domain URL</span></button></div>'
            var repositoryContainerHeader = document.querySelector(".pagehead-actions");
            repositoryContainerHeader.prepend(newElement);
            document.getElementById("extentions-button").addEventListener("click", function () {
                var url = window.location.href;
                var newUrl = url.replace("https://github.com/LiT-Kansai-Members-Org/", "https://github.lit-kansai-members.com/");
                navigator.clipboard.writeText(newUrl);
                document.getElementById("extentions-button").textContent = "Copied!";
            });
        } else {
            if (document.getElementById("extentions-button-container") == null) {
                setTimeout(function () {
                    addButton();
                }, 1000);
            }
        }
    } catch { }
}

document.addEventListener("DOMContentLoaded", function () {
    addButton()
});

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "tab_updated") {
            addButton();
        }
    }
);