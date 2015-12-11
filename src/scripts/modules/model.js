/**
 * Created by RENATO on 10/12/2015.
 */
var ko = require('knockout');

var model = module.exports = {
    init: function() {
        console.log("model init");
    },

    viewModel: {
        name: ko.observable('something')
    },

    applyKoBindings: function() {
        ko.applyBindings(model.viewModel);
    }

};