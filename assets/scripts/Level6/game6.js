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

        nodeBulb6:
        {
            default: null,
            type: cc.Node
        },

        nodeDiode1:
        {
            default: null,
            type: cc.Node
        },

        nodeDiode2:
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
        this.items = ['', '', '', '', '', '', ''];
        this.gridBulbOn = [false, false, false, false, false, false, false];
        this.gridsReady = 0;
        this.diode1On = false;
        this.diode2On = false;
        this.bulb6On= false;
        this.totalBulbNum = 3;
        this.totalSwitchNum = 3;
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
        var self = this;
        if (false == self.switch0)
        {
            if (self.gridsReady >= 6) // all grids had been set an item respectively
            {
                self.switch0 = !self.switch0;
                self.nodeSwitch0.getComponent('switch').Toggle();
                self.warning.active = false;
                if (self.switch0 == true)
                {
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
            for (var i = 0; i < 6; i++)
            {
                if (true == self.gridBulbOn[i])
                {
                    self.grids[i].getComponent('grid').bulb.getComponent('bulb').Toggle();
                }
            }
            if (true == self.diode1On)
            {
                self.nodeDiode1.getComponent('diode').Toggle();
                self.diode1On = !self.diode1On;
            }

            if (true == self.diode2On)
            {
                self.nodeDiode2.getComponent('diode').Toggle();
                self.diode2On = !self.diode2On;
            }

            if (true == self.bulb6On)
            {
                self.nodeBulb6.getComponent('bulb').Toggle();
                self.bulb6On= !self.bulb6On;
            }
        }
    },
    
    YouWin: function()
    {
        this.youwin.active = true;
        this.youlose.active = false;
        var ls = cc.sys.localStorage;
        ls.setItem("doneLevel6", true);
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
        if (gridNum < 6 && gridNum >= 0)  // valid number
        {
            if (self.itemSelected == 'bulb' && self.totalBulbNum > 0)
            {
                self.grids[gridNum].getComponent('grid').SetItem(self.itemSelected);
                self.selectionBulb.getComponent('selectionTemplate').DecreaseNum();
                self.items[gridNum] = self.itemSelected;
                self.gridsReady++;
                self.totalBulbNum--;
            }
            else if (self.itemSelected == 'switch' && self.totalSwitchNum > 0)
            {
                self.grids[gridNum].getComponent('grid').SetItem(self.itemSelected);
                self.selectionSwitch.getComponent('selectionTemplate').DecreaseNum();
                self.items[gridNum] = self.itemSelected;
                self.gridsReady++;
                self.totalSwitchNum--;
            }
        }
    },

    IsOver: function()
    {
        self = this;
        if (false == self.switch0)
        {
            return;
        }
        // turn diodes on
        self.nodeDiode1.getComponent('diode').Toggle();
        self.diode1On = true;
        self.nodeDiode2.getComponent('diode').Toggle();
        self.diode2On = true;

        if (self.items[0] == 'switch' && self.items[1] == 'switch' && self.items[2] == 'switch')
        {
            self.GridTurnOn(4);
            self.GridTurnOn(5);
        }

        else if (self.items[0] == 'switch' && self.items[1] == 'switch' && self.items[3] == 'switch')
        {
            self.GridTurnOn(2);
            self.GridTurnOn(5);
        }

        else if (self.items[0] == 'switch' && self.items[1] == 'switch' && self.items[4] == 'switch')
        {
            self.GridTurnOn(2);
            self.GridTurnOn(5);
        }

        else if (self.items[0] == 'switch' && self.items[1] == 'switch' && self.items[5] == 'switch')
        {
            self.GridTurnOn(2);
            self.GridTurnOn(4);
        }

        else if (self.items[0] == 'switch' && self.items[2] == 'switch' && self.items[3] == 'switch')
        {
            self.GridTurnOn(4);
            self.GridTurnOn(5);
        }

        else if (self.items[0] == 'switch' && self.items[2] == 'switch' && self.items[4] == 'switch')
        {
            self.GridTurnOn(1);
            self.GridTurnOn(3);
            self.GridTurnOn(5);
        }

        else if (self.items[0] == 'switch' && self.items[2] == 'switch' && self.items[5] == 'switch')
        {
            self.GridTurnOn(1);
            self.GridTurnOn(3);
            self.GridTurnOn(4);
        }

        else if (self.items[0] == 'switch' && self.items[3] == 'switch' && self.items[4] == 'switch')
        {
            self.GridTurnOn(2);
            self.GridTurnOn(5);
        }

        else if (self.items[0] == 'switch' && self.items[3] == 'switch' && self.items[5] == 'switch')
        {
            self.GridTurnOn(2);
            self.GridTurnOn(4);
        }

        else if (self.items[0] == 'switch' && self.items[4] == 'switch' && self.items[5] == 'switch')
        {
            self.GridTurnOn(1);
            self.GridTurnOn(2);
            self.GridTurnOn(3);
        }

        else if (self.items[1] == 'switch' && self.items[2] == 'switch' && self.items[3] == 'switch')
        {
            self.GridTurnOn(4);
            self.GridTurnOn(5);
        }

        else if (self.items[1] == 'switch' && self.items[2] == 'switch' && self.items[4] == 'switch')
        {
            self.GridTurnOn(0);
            self.GridTurnOn(3);
            self.GridTurnOn(5);  
            self.nodeBulb6.getComponent('bulb').Toggle();
            self.bulb6On = true;
            self.YouWin();
        }

        else if (self.items[1] == 'switch' && self.items[2] == 'switch' && self.items[5] == 'switch')
        {
            self.GridTurnOn(0);
            self.GridTurnOn(3);
        }

        else if (self.items[1] == 'switch' && self.items[3] == 'switch' && self.items[4] == 'switch')
        {
            self.GridTurnOn(2);
            self.GridTurnOn(5);
        }

        else if (self.items[1] == 'switch' && self.items[3] == 'switch' && self.items[5] == 'switch')
        {
            self.GridTurnOn(2);
            self.GridTurnOn(4);
        }

        else if (self.items[1] == 'switch' && self.items[4] == 'switch' && self.items[5] == 'switch')
        {
            self.GridTurnOn(0);
            self.GridTurnOn(3);
            self.nodeBulb6.getComponent('bulb').Toggle();
            self.bulb6On = true;
        }

        else if (self.items[2] == 'switch' && self.items[3] == 'switch' && self.items[4] == 'switch')
        {
            // no bulbs will be turned on
        }

        else if (self.items[2] == 'switch' && self.items[3] == 'switch' && self.items[5] == 'switch')
        {
            self.GridTurnOn(0);
            self.GridTurnOn(1);
            self.GridTurnOn(4);
            self.nodeBulb6.getComponent('bulb').Toggle();
            self.bulb6On = true;
            self.YouWin();
        }

        else if (self.items[2] == 'switch' && self.items[4] == 'switch' && self.items[5] == 'switch')
        {
            self.GridTurnOn(0);
            self.GridTurnOn(3);
            self.nodeBulb6.getComponent('bulb').Toggle();
            self.bulb6On = true;
        }

        else if (self.items[3] == 'switch' && self.items[4] == 'switch' && self.items[5] == 'switch')
        {
            self.GridTurnOn(0);
            self.GridTurnOn(1);
            self.GridTurnOn(2);
            self.nodeBulb6.getComponent('bulb').Toggle();
            self.bulb6On = true;
            self.YouWin();
        }
    },

    Reload: function()
    {
        cc.director.loadScene('Level6');
    },

    HideWarning: function()
    {
        this.warning.active = false;
    }, 

    GridTurnOn: function(gridNum)
    {
        self.grids[gridNum].getComponent('grid').bulb.getComponent('bulb').Toggle();
        self.gridBulbOn[gridNum] = true;
    }, 

    GotoNextLevel: function()  // load the next level's scene 
    {
        cc.director.loadScene('Level1');
    },
});
