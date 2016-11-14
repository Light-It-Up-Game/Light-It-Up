cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onload: function()
    {

    },
    
    SwitchOff: function () {
        var children = this.node.children;
        for (var i = 0; i < children.length; i++)
        {
            if (children[i].name == "switch_on")
            {
                children[i].active = false;
            }
            else if (children[i].name == "switch_off")
            {
                children[i].active = true;
            }
        }
    },

    SwitchOn: function () {
        var children = this.node.children;
        for (var i = 0; i < children.length; i++)
        {
            if (children[i].name == "switch_on")
            {
                children[i].active = true;
            }
            else if (children[i].name == "switch_off")
            {
                children[i].active = false;
            }
        }
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
