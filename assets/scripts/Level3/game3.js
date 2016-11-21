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
        this.bulb = false;
        this.win = false;
    },

    Switch1Toggle: function()
    {
        var self = this;
        self.switch1 = !self.switch1;
        if (self.switch1 && self.switch2 && !this.bulb)  // battery lights the bulb up
        {
            self.bulb.getComponent('bulb').Toggle();
            self.bulb= !self.bulb;
        }
        else if (self.switch1 && self.charged && !self.switch2)
        {
            self.capacitance.getComponent('capacitance').Toggle();
            self.bulb.getComponent('bulb').Toggle();
            // wait 5 seconds to turn off
            var delay = 5;
            self.scheduleOnce(function(){
                if (!self.bulb)
                {
                    self.bulb.getComponent('bulb').Toggle();
                    self.bulb= !self.bulb;
                }
            }, delay);
            // @NOTE only when we light the bulb up using the capacitance as power will we win
            self.win = true;  
            this.YouWin();
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
        }
        
        if (self.switch1)
        {
            self.bulb.getComponent('bulb').Toggle();
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
});
