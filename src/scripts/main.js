/**
 * Created by RENATO on 10/12/2015.
 */
var model = require('./modules/model.js');

var app = {
    init: function() {
        model.init();
    }
};

app.init();

model.registerKoComponent();

model.applyKoBindings();
