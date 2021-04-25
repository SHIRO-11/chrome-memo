let btn = document.getElementById("input-memo-js");

btn.addEventListener('click', (e) => {
    e.preventDefault();

    let element = document.getElementById('memo-text-js');
    let valueCount;

    chrome.storage.local.get(function (value) {
        valueCount = Object.keys(value).length + 1;
        valueCount = String(valueCount);

        chrome.storage.local.set({
            [valueCount]: element.value
        }, function () {

            console.log("2" + valueCount);

            chrome.storage.local.get(function (value) {
                console.log("3" + JSON.stringify(value));
            });
        });

    });

}, false);