cc.Class({
    extends: cc.Component,
    properties:
    {

    },

    onLoad: function()
    {

    },

    GotoLevels: function()
    {
        cc.director.loadScene('LevelList');
    }

});
