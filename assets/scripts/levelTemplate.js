cc.Class({
    extends: cc.Component,
    properties: {
        id: 0,
        icon: cc.Sprite,
        levelNum: cc.Label,
    },

    init: function(data)
    {
        this.id = data.id;
        this.icon.spriteFrame = data.icon;
        this.levelNum.string = "Level " + this.id;
    },

    LoadScene: function()
    {
        cc.director.loadScene('Level' + this.id);
    }
});
