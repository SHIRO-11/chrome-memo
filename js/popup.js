let btn = document.getElementById("input-memo-js");

console.log(btn);

btn.addEventListener('click', (e) => {
    e.preventDefault();

    let element = document.getElementById('memo-text-js');
    let valueCount;

    chrome.storage.local.get (function (value) {
        valueCount =  Object.keys(value).length + 1;
        var valueCount =  String(valueCount);
         console.log("1" + valueCount + JSON.stringify(value));
    });

    chrome.storage.local.set({
        [valueCount]: element.value
    }, function () {
         console.log("2" + valueCount);
    });

    chrome.storage.local.get (function (value) {
         console.log("3" + JSON.stringify(value));
    });

    chrome.storage.local.clear();

}, false);