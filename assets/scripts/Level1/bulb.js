cc.Class({
    extends: cc.Component,

    properties: {
        bulbOnFrame:
        {
            default: null,
            type: cc.SpriteFrame
        },

        bulbOffFrame:
        {
            default: null,
            type: cc.SpriteFrame
        }
    },

    // use this for initialization
    onLoad: function () {
        this.lightOn = false;

    },

    Toggle: function()
    {
        var self = this;
        self.lightOn = !self.lightOn;
        var sprite = self.getComponent(cc.Sprite);
        if (self.lightOn)
        {
            sprite.spriteFrame = self.bulbOnFrame;
        }
        else
        {
            sprite.spriteFrame = self.bulbOffFrame;
        }
    },

});
