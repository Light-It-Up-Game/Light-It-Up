var Level = cc.Class({
    name: 'Level',
    properties:
    {
        id: 0,
        icon: cc.SpriteFrame
    }
});

cc.Class({
    extends: cc.Component,

    properties:
    {
        levels:
        {
            default: [],
            type: Level
        },

        levelPrefab: cc.Prefab
    },

    // use this for initialization
    onLoad: function () {
        for (var i = 0; i < this.levels.length; i++)
        {
            var level = cc.instantiate(this.levelPrefab);
            var data = this.levels[i];
            this.node.addChild(level);
            level.getComponent('levelTemplate').init({
                id: data.id,
                icon: data.icon
            });
        }
        // detect EXIT key event
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event) 
            {
                if (keyCode === cc.KEY.back) 
                {
                    // the back button of Android Device is pressed
                    // maybe it's not work in Web environment
                    cc.director.end();
                }
                else if (keyCode === cc.KEY.backspace) 
                {
                    // the backspace of PC/Mac is pressed
                }
                else if (keyCode === cc.KEY.escape) 
                {
                    // the escape of PC/Mac is pressed
                    cc.director.end();
                }
            }
        }, this.node);

    },

});
