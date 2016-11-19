cc.Class({
    extends: cc.Component,

    properties: {
        win:
        {
            default: null,
            type: cc.Node
        }
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
        this.YouWin();
    },

    SwitchOff: function()
    {
        this.switch = false;
    },

    Back2LevelList: function()
    {
        cc.director.loadScene('LevelList');
    },

    GotoNextLevel: function()  // load the next level's scene 
    {
        cc.director.loadScene('Level2');
    },

    YouWin: function()
    {
        this.win.active = true;
    }
});
