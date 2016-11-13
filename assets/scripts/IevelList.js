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

    },

});
