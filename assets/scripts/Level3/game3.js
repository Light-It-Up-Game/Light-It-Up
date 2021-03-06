cc.Class({
    extends: cc.Component,
    properties:
    {
        bulb:
        {
            default: null,
            type: cc.Node
        },

        capacitance:
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

    onLoad: function()
    {
        this.switch1 = false;
        this.switch2 = false;
        this.charged = false;
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
        if (self.switch1 && self.switch2 && !this.lightOn)  // battery lights the bulb up
        {
            self.bulb.getComponent('bulb').Toggle();
            self.lightOn= !self.lightOn;
        }
        else if (self.switch1 && self.charged && !self.switch2)
        {
            this.Release();
            // @NOTE only when we light the bulb up using the capacitance as power will we win
            this.YouWin();
        }

        else if (!self.switch1 && self.lightOn)
        {
            self.bulb.getComponent('bulb').Toggle();
            self.lightOn= !self.lightOn;
        }
    },

    Switch2Toggle: function()
    {
        var self = this;
        self.switch2 = !self.switch2;
        if (self.switch2)  // charge the capacitance
        {
            self.charged = true;
            self.capacitance.getComponent('capacitance').Toggle();
            if (self.switch1 && !self.lightOn)
            {
                self.bulb.getComponent('bulb').Toggle();
                self.lightOn = !self.lightOn;
            }
        }
        
        else if (self.switch1)
        {
            if (self.charged)  // we can still light it up
            {
                this.Release();
            }
            else
            {
                self.bulb.getComponent('bulb').Toggle();
                self.lightOn = !self.lightOn;
            }
        }
    },
    
    YouWin: function()
    {
        this.win.active = true;
        var ls = cc.sys.localStorage;
        ls.setItem("doneLevel3", true);
        ls.setItem("unlockLevel4", true);
    },

    GotoNextLevel: function()  // load the next level's scene 
    {
        cc.director.loadScene('Level4');
    },

    Release: function()
    {
        var self = this;
        if (!self.lightOn)  // if light is off, we first light it up
        {
            self.lightOn= true;
            self.bulb.getComponent('bulb').Toggle();
        }
        // wait 1 seconds to turn off
        var delay = 0.5;
        self.scheduleOnce(function(){
            self.bulb.getComponent('bulb').Toggle();
            self.lightOn = false;
            self.capacitance.getComponent('capacitance').Toggle();
            self.charged = false;
        }, delay);
        /*
            self.bulb.getComponent('bulb').Toggle();
            self.lightOn = false;
            self.capacitance.getComponent('capacitance').Toggle();
            self.charged = false;
         */
    }
});
