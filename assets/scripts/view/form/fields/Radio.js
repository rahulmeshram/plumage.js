/* globals $, _ */
var Plumage = require('PlumageRoot');
var Field = require('view/form/fields/Field');

var template = require('view/form/fields/templates/Radio.html');

module.exports = Plumage.view.form.fields.Radio = Field.extend({

  template: template,

  //value, label, cls
  items: [],

  getTemplateData: function() {
    var data = Field.prototype.getTemplateData.apply(this, arguments);
    data.items = [];
    for (var i=0; i < this.items.length; i++) {
      var item = _.clone(this.items[i]);
      data.items.push(item);
      if (this.getValue() === item.value) {
        item.selected = true;
      }
    }
    return data;
  },

  updateValue: function() {
    this.value = this.getValueFromModel();
    if (this.isRendered) {
      this.render();
    }
  },

  getValueFromDom: function() {
    return this.$('input:checked').val();
  }
});
