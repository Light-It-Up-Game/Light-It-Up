cc.Class({
    extends: cc.Component,
    properties:
    {

    },

    onLoad: function()
    {
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

    GotoLevels: function()
    {
        cc.director.loadScene('LevelList');
    }

});
