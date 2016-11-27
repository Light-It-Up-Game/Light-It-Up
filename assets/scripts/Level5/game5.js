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
        this.items = ['banana', 'apple', 'orange', 'pear', 'grape'];
    },

    Switch0Toggle: function()
    {
        var self = this;
        self.switch0 = !self.switch0;
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
        console.log(gridNum);
        console.log(self.itemSelected);
        if (gridNum < 5 && gridNum >= 0)  // valid number
        {
            if (self.itemSelected == 'bulb' || self.itemSelected == 'switch')
            {
                self.grids[gridNum].getComponent('grid').SetItem(self.itemSelected);
                self.selectionBulb.getComponent('selectionTemplate').DecreaseNum();
                console.log(self.items[gridNum]);
                self.items[gridNum] = self.itemSelected;
            }
        }
    },

    update: function(dt)
    {

    },

    Reload: function()
    {
        cc.director.loadScene('Level4');
    },
});
