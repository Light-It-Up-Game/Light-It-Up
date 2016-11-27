cc.Class({
    extends: cc.Component,
    properties:
    {
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

        warning:
        {
            default: null,
            type: cc.Node
        },

        nodeSwitch0:
        {
            default: null,
            type: cc.Node
        },

        selectionBulb:
        {
            default: null,
            type: cc.Node
        },

        selectionSwitch:
        {
            default: null,
            type: cc.Node
        }, 

        grids: 
        {
            default: [],
            type: cc.Node
        },
    },
    
    onLoad: function()
    {
        this.switch0 = false;
        this.itemSelected = '';
        this.items = ['', '', '', '', ''];
        this.gridsReady = 0;
    },

    Switch0Toggle: function()
    {
        var self = this;
        if (false == self.switch0)
        {
            if (self.gridsReady >= 5) // all grids had been set an item respectively
            {
                self.switch0 = !self.switch0;
                self.nodeSwitch0.getComponent('switch').Toggle();
                self.warning.active = false;
                self.switch0 = !self.switch0;
            }
            else
            {
                self.warning.active = true;
            }
        }
        else
        {
            self.switch0 = !self.switch0;
            self.nodeSwitch0.getComponent('switch').Toggle();
        }
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

    BulbSelected: function()
    {
        this.itemSelected = 'bulb';
    },

    SwitchSelected: function()
    {
        this.itemSelected = 'switch';
    },

    ItemSet: function(event, customEventData)
    {
        var self = this;
        var gridNum = parseInt(customEventData);
        if (gridNum < 5 && gridNum >= 0)  // valid number
        {
            if (self.itemSelected == 'bulb')
            {
                self.grids[gridNum].getComponent('grid').SetItem(self.itemSelected);
                self.selectionBulb.getComponent('selectionTemplate').DecreaseNum();
                console.log(self.items[gridNum]);
                self.items[gridNum] = self.itemSelected;
                self.gridsReady++;
            }
            else if (self.itemSelected == 'switch')
            {
                self.grids[gridNum].getComponent('grid').SetItem(self.itemSelected);
                self.selectionSwitch.getComponent('selectionTemplate').DecreaseNum();
                console.log(self.items[gridNum]);
                self.items[gridNum] = self.itemSelected;
                self.gridsReady++;
            }
        }
    },

    update: function(dt)
    {
        self = this;
        if (self.gridsReady < 5 || false == self.switch0)
        {
            return;
        }

        if (self.items[3] == 'switch' && self.items[4] == 'switch')
        {
            for (var i = 0; i < 3; i++)
            {
                self.grids[i].bulb.getComponent('bulb').Toggle();
            }
            self.YouWin();
        }

        else if (self.items[0] == 'switch' && self.items[1] == 'switch')
        {
            self.grids[2].bulb.getComponent('bulb').Toggle();
            self.grids[4].bulb.getComponent('bulb').Toggle();
        }

    },

    Reload: function()
    {
        cc.director.loadScene('Level4');
    },

    HideWarning: function()
    {
        this.warning.active = false;
    }
});
