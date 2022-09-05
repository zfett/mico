---
---
/*
 * code-copy.js - Finds all <pre> elements with <code> tags in them and adds a "copy" button to allow code copying.
 * Created by Zachary Fetters on Sep. 4th, 2022. Available under the MIT license.
 */

const allowCopy = {{ site.allowCodeCopy }};
const codeBoxes = document.querySelectorAll("pre.highlight");
let setElem = 0;

var _createElem = (s) => { // used to create the buttons for the pre elements, internal function only
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = s;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

const copyText = (i, e) => { // the function attached to the buttons via a onClick event handler
    var txt = new DOMParser().parseFromString(codeBoxes[i].childNodes[1].innerHTML, 'text/html');
    navigator.clipboard.writeText(txt.body.textContent).then(() => {
        e.innerHTML = "COPIED!";
        return true;
    }, () => {
        console.error("Couldn't copy text: ", err);
        return false;
    });
}

if (allowCopy && codeBoxes.length !== 0) {
    console.debug(`Found ${codeBoxes.length} code block(s) on page (excluding inline <code> tags)`);

    for ([idx,elem] of codeBoxes.entries()) {
        var btn = _createElem(`<button class='copy-code' onClick='copyText(${idx}, this)' title='Copy this text to your clipboard!'>COPY</button>`);
        elem.insertBefore(btn, elem.childNodes[0]);
        setElem++;
    }

    if (setElem == codeBoxes.length) {
        console.debug(`Success! Created ${setElem} of ${codeBoxes.length} code copy links`);
    } else {
        console.warn(`Created ${setElem} of ${codeBoxes.length} code copy links`);
    }
} else if (!allowCopy) {
    console.warn("Code copying is not allowed on this site. If you're the site admin and want to enable this feature, change the 'allowCodeCopy' variable in your site's '_config.yml' file to 'true'.");
} else if (codeBoxes.length == 0) {
    console.error("Couldn't find any code blocks on this page");
} else {
    console.error("An unknown error is preventing the generation of code copy links");
}
