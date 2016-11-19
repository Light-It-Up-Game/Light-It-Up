cc.Class({
    extends: cc.Component,
    properties: {
        id: 0,
        icon: cc.Sprite,
        itemName: '',
    },

    init: function(data)
    {
        this.id = data.id;
        this.icon.spriteFrame = data.iconSF;
        this.itemName = data.itemName;
    },
    
    LoadInfo: function()
    {
        var i = 0;
    }
});