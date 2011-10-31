dom = this.dom || {};

dom.byId = (function () {
    var doc = document;
    return function (id) {
        return doc.getElementById(id);
    };
})();

dom.insert = function (element, placeholder) {
    if (typeof element === "string") {
        placeholder.innerHTML += element;
    } else if (typeof element === "object") {
        placeholder.appendChild(element);
    }
    return element;
};

dom.addEvent = function (target, eventType, callback, bubbles) {
    bubbles = bubbles || false;

    if (target.attachEvent) {
        target.attachEvent("on" + eventType, callback);
    } else if (target.addEventListener) {
        target.addEventListener(eventType, callback, bubbles);
    }
};

dom.onready = function (element, callback) {
    dom.addEvent(element, "load", function () {
        (typeof callback === "function") && callback(element);
    });
};

dom.del = function (placeholder) {
    placeholder.removeChild(placeholder.firstChild);
};
