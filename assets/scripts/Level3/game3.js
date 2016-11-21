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

    onload: function()
    {
        this.switch1 = false;
        this.switch2 = false;
        this.charged = false;
        this.lightOn = false;
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

        else if (!self.switch1)
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
            if (self.switch2 && !self.lightOn)
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
    },

    GotoNextLevel: function()  // load the next level's scene 
    {
        cc.director.loadScene('Level4');
    },

    Release: function()
    {
        self = this;
        if (!self.lightOn)  // if light is off, we first light it up
        {
            self.lightOn= true;
            self.bulb.getComponent('bulb').Toggle();
        }
        // wait 5 seconds to turn off
        var delay = 1;
        self.scheduleOnce(function(){
            self.bulb.getComponent('bulb').Toggle();
            self.lightOn = false;
            self.capacitance.getComponent('capacitance').Toggle();
            self.charged = false;
        }, delay);
    }
});
