cc.Class({
    extends: cc.Component,
    properties: {
        id: 0,
        icon: cc.Sprite,
        itemName: '',  // @NOTE we use itemName to find itemName.md which will be shown on screen
    },

    init: function(data)
    {
        this.id = data.id;
        this.icon.spriteFrame = data.iconSF;
        this.itemName = data.itemName;
    },
    
    LoadInfo: function()
    {
        var self = this;
        self.node.parent.getComponent('itemList').ShowReadMe(self.itemName);
    }
});