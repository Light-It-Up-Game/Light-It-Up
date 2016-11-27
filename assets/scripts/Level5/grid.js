cc.Class({
    extends: cc.Component,

    properties:
    {
        button:
        {
            default: null,
            type: cc.Node
        },

        id: 0,
    },

    onLoad: function()
    {
        this.name = 'grid';
        this.full = false;
    },

    SetItem: function(itemName)
    {
        // the button should be disabled from now on
    }

})