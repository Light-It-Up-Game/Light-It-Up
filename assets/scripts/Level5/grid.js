cc.Class({
    extends: cc.Component,

    properties:
    {
        button:
        {
            default: null,
            type: cc.Node
        },

        bulb:
        {
            default: null,
            type: cc.Node
        },

        switch:
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
        this.button.getComponent(cc.Button).interactable = false;
        if (itemName == 'bulb')
        {
            this.bulb.active = true;
        }
        if (itemName == 'switch')
        {
            this.switch.active = true;
        }
    }

})