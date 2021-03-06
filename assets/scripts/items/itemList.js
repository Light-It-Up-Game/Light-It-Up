var Item = cc.Class({
    name: 'item',
    properties: 
    {
        id: 0,
        itemName: '',
        iconSF: cc.SpriteFrame,
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
        readme:
        {
            default: null,
            type: cc.Node
        },
        text:
        {
            default: null,
            type: cc.Label
        },
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
    },

    ShowReadMe: function(itemName)
    {
        var self = this;
        cc.loader.loadRes('readme/' + itemName, function(err, txt){
            if (err)
            {
                self.text.string = "Error loading readme file";
                return;
            }
            self.text.string = txt;
        });

        // set to active
        self.readme.active = true;
    },
    
    onOKButtonPressed: function()
    {
        this.readme.active = false;
    }
});
