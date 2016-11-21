cc.Class({
    extends: cc.Component,

    properties: {
        bulb1:
        {
            default: null,
            type: cc.Node
        },
        bulb2:
        {
            default: null,
            type: cc.Node
        },
        win:
        {
            default: null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function () {
        this.switch0 = false;
        this.switch1 = false;
        this.switch2 = false;
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

    Switch0Toggle: function()
    {
        this.switch0 = !this.switch0;
        if (this.switch1)
        {
            this.bulb1.getComponent('bulb').Toggle();
        }
        if (this.switch2)
        {
            this.bulb2.getComponent('bulb').Toggle();
        }
        this.Check();
    },

    Switch1Toggle: function()
    {
        this.switch1 = !this.switch1;
        if (this.switch0)
        {
            this.bulb1.getComponent('bulb').Toggle();
        }
        this.Check();
    },

    Switch2Toggle: function()
    {
        this.switch2 = !this.switch2;
        if (this.switch0)
        {
            this.bulb2.getComponent('bulb').Toggle();
        }
        this.Check();
    },

    Check: function()
    {
        if (this.switch0 && this.switch1 && this.switch2)
        {
            this.YouWin();
        }
    },

    GotoNextLevel: function()  // load the next level's scene 
    {
        cc.director.loadScene('Level3');
    },

    YouWin: function()
    {
        this.win.active = true;
    }
});
