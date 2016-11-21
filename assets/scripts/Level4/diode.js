cc.Class({
    extends: cc.Component,

    properties: {
        diodeOnFrame:
        {
            default: null,
            type: cc.SpriteFrame
        },

        diodeOffFrame:
        {
            default: null,
            type: cc.SpriteFrame
        }
    },

    // use this for initialization
    onLoad: function () {
        this.diodeOn = false;

    },

    Toggle: function()
    {
        var self = this;
        self.diodeOn = !self.diodeOn;
        var sprite = self.getComponent(cc.Sprite);
        if (self.diodeOn)
        {
            sprite.spriteFrame = self.diodeOnFrame;
        }
        else
        {
            sprite.spriteFrame = self.diodeOffFrame;
        }
    },

});
