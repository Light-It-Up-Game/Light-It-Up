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
        // detect EXIT key event
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event) 
            {
                if (keyCode === cc.KEY.back) 
                {
                    // the back button of Android Device is pressed
                    // maybe it's not work in Web environment
                    cc.director.end();
                }
                else if (keyCode === cc.KEY.backspace) 
                {
                    // the backspace of PC/Mac is pressed
                }
                else if (keyCode === cc.KEY.escape) 
                {
                    // the escape of PC/Mac is pressed
                    cc.director.end();
                }
            }
        }, this.node);
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
