var unlock = [true, false, false, false, false, false];
var done = [false, false, false, false, false, false];
cc.Class({
    extends: cc.Component,
    properties:
    {
        readme: 
        {
            default: null,
            type: cc.Node
        },

        text:
        {
            default: null,
            type: cc.Label
        }
    },

    onLoad: function()
    {
        var ls = cc.sys.localStorage;
        ls.setItem("unlockLevel1", true);
        for (var i = 1; i <= 6; i++)
        {
            var dataUnlock = ls.getItem('unlockLevel' + i);
            if (dataUnlock == null)
            {
                ls.setItem("unlockLevel" + i, unlock[i - 1]);
            }
            var dataDone = ls.getItem('doneLevel' + i);
            if (dataDone == null)
            {
                ls.setItem("doneLevel" + i, done[i - 1]);
            }
        }

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

    ShowReadMe: function()
    {
        var self = this;
        cc.loader.loadRes('readme/about', function(err, txt){
            if (err)
            {
                self.text.string = "Error loading readme file";
                return;
            }
            self.text.string = txt;
        });

        // set to active
        self.readme.active = true;
    },
    
    onOKButtonPressed: function()
    {
        this.readme.active = false;
    },

    GotoLevels: function()
    {
        cc.director.loadScene('LevelList');
    }

});
