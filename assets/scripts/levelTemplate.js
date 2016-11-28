cc.Class({
    extends: cc.Component,
    properties: {
        id: 0,
        icon: cc.Sprite,
        levelNum: cc.Label,
        btn:
        {
            default: null,
            type: cc.Node,
        }
    },

    init: function(data)
    {
        var self = this;
        self.id = data.id;
        var ls = cc.sys.localStorage;
        var done = ls.getItem("doneLevel" + data.id);
        var unlock = ls.getItem("unlockLevel" + data.id);
        console.log("unlock: " + unlock);
        console.log("done: " + done);
        if (done == "true")
        {
            self.icon.spriteFrame = data.iconDone;
            self.btn.getComponent(cc.Button).interactable = true;
        }
        else if (unlock == "true")
        {
            self.icon.spriteFrame = data.icon;
            self.btn.getComponent(cc.Button).interactable = true;
        }

        else  // not unlock and not done yet
        {
            self.icon.spriteFrame = data.icon;
            self.btn.getComponent(cc.Button).interactable = false;
        }

        this.levelNum.string = "Level " + self.id;
    },

    LoadScene: function()
    {
        cc.director.loadScene('Level' + this.id);
    }
});
