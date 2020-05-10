'use strict';

function Route(name, htmlName, defaultRoute, script) {
    try {
        if(!name || !htmlName) {
            throw 'error: name and htmlName params are mandatories';
        }
        this.constructor(name, htmlName, defaultRoute, script);
    } catch (e) {
        console.error(e);
    }
}

Route.prototype = {
    name: undefined,
    htmlName: undefined,
    default: undefined,
    script: undefined,
    constructor: function (name, htmlName, defaultRoute, script) {
        this.name = name;
        this.htmlName = htmlName;
        this.default = defaultRoute;
        this.script = script;
    },
    isActiveRoute: function (hashedPath) {
        return hashedPath.replace('#', '') === this.name;
    }
}
