cc.Class({
    extends: cc.Component,

    properties: {
        //winPrefab: cc.Prefab,
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
        //var win = cc.instantiate(this.winPrefab);
        //this.node.addChild(win);
    }
});
