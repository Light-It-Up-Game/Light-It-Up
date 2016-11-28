var progress = {
    doneLevel1: false,
    doneLevel2: false,
    doneLevel3: false,
    doneLevel4: false,
    doneLevel5: false,
    doneLevel6: false,
};
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
        for (var i = 0; i < 6; i++)
        {
            //if ()
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
