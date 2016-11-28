cc.Class({
    extends: cc.Component,
    properties:
    {
        diode:
        {
            default: null,
            type: cc.Node
        },

        youwin:
        {
            default: null,
            type: cc.Node
        },

        youlose:
        {
            default: null,
            type: cc.Node
        },
    },

    onload: function()
    {
        this.switch1 = false;
        this.switch2 = false;
        this.lightOn = false;
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

    Switch1Toggle: function()
    {
        var self = this;
        self.switch1 = !self.switch1;
    },

    Switch2Toggle: function()
    {
        var self = this;
        self.switch2 = !self.switch2;
    },
    
    YouWin: function()
    {
        this.youwin.active = true;
        this.youlose.active = false;
    },

    YouLose: function()
    {
        this.youlose.active = true;
        this.youwin.active = false;
    },

    update: function(dt)
    {
        if (this.switch1 && this.switch2)
        {
            if (this.lightOn)
            {
                this.diode.getComponent('diode').Toggle();
                this.lightOn = !this.lightOn;
            }
            this.YouLose();
        }

        else if (!this.switch1 && this.lightOn)
        {
            this.diode.getComponent('diode').Toggle();
            this.lightOn = !this.lightOn;
        }

        else if (this.switch1 && !this.lightOn)
        {
            this.diode.getComponent('diode').Toggle();
            this.lightOn = !this.lightOn;
        }

        if (this.lightOn)
        {
            this.YouWin();
        }
    },

    Reload: function()
    {
        cc.director.loadScene('Level4');
    },

    GotoNextLevel: function()  // load the next level's scene 
    {
        cc.director.loadScene('Level5');
    },

});