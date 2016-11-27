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
        this.gridBulbOn = [false, false, false, false, false];
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
                console.log('self.switch0: ' + self.switch0);
                if (self.switch0 == true)
                {
                    console.log('IsOver is invoked');
                    self.IsOver();
                }
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
            for (var i = 0; i < 5; i++)
            {
                if (true == self.gridBulbOn[i])
                {
                    self.grids[i].getComponent('grid').bulb.getComponent('bulb').Toggle();
                }
            }

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
                self.items[gridNum] = self.itemSelected;
                self.gridsReady++;
            }
            else if (self.itemSelected == 'switch')
            {
                self.grids[gridNum].getComponent('grid').SetItem(self.itemSelected);
                self.selectionSwitch.getComponent('selectionTemplate').DecreaseNum();
                self.items[gridNum] = self.itemSelected;
                self.gridsReady++;
            }
        }
    },

    IsOver: function()
    {
        self = this;
        console.log(self.switch0);
        for (var i = 0; i < 5; i++)
        {
            console.log(self.items[i]);
        }
        if (false == self.switch0)
        {
            return;
        }

        if (self.items[0] == 'switch' && self.items[1] == 'switch')
        {
            self.grids[2].getComponent('grid').bulb.getComponent('bulb').Toggle();
            self.gridBulbOn[2] = true;
            self.grids[4].getComponent('grid').bulb.getComponent('bulb').Toggle();
            self.gridBulbOn[4] = true;
        }

        else if (self.items[0] == 'switch' && self.items[2] == 'switch')  // a solution
        {
            self.grids[1].getComponent('grid').bulb.getComponent('bulb').Toggle();
            self.gridBulbOn[1] = true;
            self.grids[3].getComponent('grid').bulb.getComponent('bulb').Toggle();
            self.gridBulbOn[3] = true;
            self.grids[4].getComponent('grid').bulb.getComponent('bulb').Toggle();
            self.gridBulbOn[4] = true;
            self.YouWin();
        }

        else if (self.items[0] == 'switch' && self.items[3] == 'switch')
        {
            self.grids[2].getComponent('grid').bulb.getComponent('bulb').Toggle();
            self.gridBulbOn[2] = true;
            self.grids[4].getComponent('grid').bulb.getComponent('bulb').Toggle();
            self.gridBulbOn[4] = true;
        }

        else if (self.items[0] == 'switch' && self.items[4] == 'switch')
        {
            self.YouLose();
        }

        else if (self.items[1] == 'switch' && self.items[2] == 'switch')
        {
            self.grids[0].getComponent('grid').bulb.getComponent('bulb').Toggle();
            self.gridBulbOn[0] = true;
            self.grids[3].getComponent('grid').bulb.getComponent('bulb').Toggle();
            self.gridBulbOn[3] = true;
        }

        else if (self.items[1] == 'switch' && self.items[3] == 'switch')
        {
            self.grids[2].getComponent('grid').bulb.getComponent('bulb').Toggle();
            self.gridBulbOn[2] = true;
            self.grids[4].getComponent('grid').bulb.getComponent('bulb').Toggle();
            self.gridBulbOn[4] = true;
        }

        else if (self.items[1] == 'switch' && self.items[4] == 'switch')
        {
            self.grids[0].getComponent('grid').bulb.getComponent('bulb').Toggle();
            self.gridBulbOn[0] = true;
            self.grids[3].getComponent('grid').bulb.getComponent('bulb').Toggle();
            self.gridBulbOn[3] = true;
        }

        else if (self.items[2] == 'switch' && self.items[3] == 'switch')
        {
            self.YouLose();
        }

        else if (self.items[2] == 'switch' && self.items[4] == 'switch')
        {
            self.grids[0].getComponent('grid').bulb.getComponent('bulb').Toggle();
            self.gridBulbOn[0] = true;
            self.grids[3].getComponent('grid').bulb.getComponent('bulb').Toggle();
            self.gridBulbOn[3] = true;
        }

        else if (self.items[3] == 'switch' && self.items[4] == 'switch')  // a solution
        {
            self.grids[0].getComponent('grid').bulb.getComponent('bulb').Toggle();
            self.gridBulbOn[0] = true;
            self.grids[1].getComponent('grid').bulb.getComponent('bulb').Toggle();
            self.gridBulbOn[1] = true;
            self.grids[2].getComponent('grid').bulb.getComponent('bulb').Toggle();
            self.gridBulbOn[2] = true;
            self.YouWin();
        }

    },

    Reload: function()
    {
        cc.director.loadScene('Level5');
    },

    HideWarning: function()
    {
        this.warning.active = false;
    }
});
