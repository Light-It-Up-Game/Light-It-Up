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

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
    Toggle: function()
    {
        var self = this;
        self.lightOn = !this.lightOn;
        var sprite = self.getComponent(cc.Sprite);
        if (self.lightOn)
        {
            sprite.spriteFrame = self.bulbOnFrame;
        }
        else
        {
            sprite.spriteFrame = self.bulbOffFrame;
        }
        //this.node.parent.getComponent('game1').YouWin(); // should not be here
    },

});
