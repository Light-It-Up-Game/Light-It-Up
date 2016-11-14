cc.Class({
    extends: cc.Component,

    properties: {

    },

    // use this for initialization
    onLoad: function () {
        this.switch = false;
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
    SwitchOn: function()
    {
        this.switch = true;
    },

    SwitchOff: function()
    {
        this.switch = false;
    },

});
