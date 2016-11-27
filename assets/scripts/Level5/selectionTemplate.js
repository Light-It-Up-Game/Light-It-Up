cc.Class({
    extends: cc.Component,
    properties: {
        id: 0,
        number: 0,
        labelNum: cc.Label,
        icon: cc.Sprite,
        itemName: '',  // @NOTE we use itemName to find itemName.md which will be shown on screen
    },

    onLoad: function()
    {
        this.labelNum.string = 'x' + this.number;
    },
    
    DecreaseNum: function()
    {
        var self = this;
        if (self.number > 1)
        {
            self.number--;
            self.labelNum.string = 'x' + this.number;
        }
        else
        {
            self.node.getComponent(cc.Button).interactable = false;
        }
    }
});