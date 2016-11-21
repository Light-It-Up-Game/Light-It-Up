cc.Class({
    extends: cc.Component,

    properties: {
        capacitanceChargedFrame:
        {
            default: null,
            type: cc.SpriteFrame
        },

        capacitanceUnchargedFrame:
        {
            default: null,
            type: cc.SpriteFrame
        }
    },

    // use this for initialization
    onLoad: function () {
        this.charged = false;

    },

    Toggle: function()
    {
        var self = this;
        self.charged = !self.charged;
        var sprite = self.getComponent(cc.Sprite);
        if (self.charged)
        {
            sprite.spriteFrame = self.capacitanceChargedFrame;
        }
        else
        {
            sprite.spriteFrame = self.capacitanceUnchargedFrame;
        }
    },

});
