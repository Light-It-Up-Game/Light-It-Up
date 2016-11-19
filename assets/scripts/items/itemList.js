var Item = cc.Class({
    name: 'item',
    properties: 
    {
        id: 0,
        itemName: '',
        iconSF: cc.SpriteFrame
    }
});

cc.Class({
    extends: cc.Component,
    properties:
    {
        items:
        {
            default: [],
            type: Item
        },
        itemPrefab: cc.Prefab,
    },

    onLoad: function()
    {
        for (var i = 0; i < this.items.length; i++)
        {
            var item = cc.instantiate(this.itemPrefab);
            var data = this.items[i];
            this.node.addChild(item);
            item.getComponent('itemTemplate').init({
                id: data.id,
                itemName: data.itemName,
                iconSF: data.iconSF
            });
        }
    }

});
