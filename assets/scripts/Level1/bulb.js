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

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
    LightOn: function()
    {
        var self = this;
        var sprite = self.getComponent(cc.Sprite);
        sprite.spriteFrame = self.bulbOnFrame;
        this.node.parent.getComponent('game1').YouWin();
    },

    LightOff: function()
    {
        var self = this;
        var sprite = self.getComponent(cc.Sprite);
        sprite.spriteFrame = self.bulbOffFrame;
    },
});
