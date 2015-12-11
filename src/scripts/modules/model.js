/**
 * Created by RENATO on 10/12/2015.
 */
var ko = require('knockout');

var model = module.exports = {
    init: function() {
        console.log("model init");
    },

    registerKoComponent: function() {
      ko.components.register('name-editor', {
          template: "<p>Enter you name: <input data-bind='value: name' /></p><p>You entered <strong data-bind='text: name().toUpperCase()'></strong></p>",
          viewModel: function () {
              this.name =  ko.observable('something');
          }
      })
    },

    applyKoBindings: function() {
        ko.applyBindings();
    },

};