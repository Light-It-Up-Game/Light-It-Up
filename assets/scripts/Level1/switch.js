cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // use this for initialization
    onload: function()
    {
        this.switch = false;

    }, 
    
    Toggle: function () 
    {
        this.switch = !this.switch;
        var children = this.node.children;
        for (var i = 0; i < children.length; i++)
        {
            if (children[i].name == "switch_on")
            {
                children[i].active = this.switch;
            }
            else if (children[i].name == "switch_off")
            {
                children[i].active = !this.switch;
            }
        }
    },

});
