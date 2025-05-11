let square = 
   {
    _x: 0,
    _y: 0,
    _width: 10,
    _heigth: 10,
    _color: 'red',
    

    create: function(x, y, width, height, color) 
    {
        let obj = Object.create(this);
            obj.setX(x);
            obj.setY(y);
            obj.setWidth(width);
            obj.setHeigth(height);
            obj.setColor(color);
            return obj;
    },

    getX: function()
    {
        return this._x;
    },

    getY: function()
    {
        return this._y;
    },

    getWidth: function()
    {
        return this._width;
    },
    
    getHeigth: function()
    {
        return this._heigth;
    },

    getColor: function()
    {
        return this._color;
    },

    setX: function(value)
    {
        this._x = value;
    },

    setY: function(value)
    {
        this._y = value;
    },

    setWidth: function(value)
    {
        this._width = value;
    },

    setHeigth: function(value)
    {
        this._heigth = value;
    },

    setColor: function(value)
    {
        this._color = value;
    }
    
} 
