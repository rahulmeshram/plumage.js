define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'moment',
  'PlumageRoot',
  'view/form/fields/DropdownSelect',
  'bootstrap'
], function($, _, Backbone, Handlebars, moment, Plumage, DropdownSelect, template) {

  return Plumage.view.form.fields.HourSelect = DropdownSelect.extend({
    className: 'hour-picker',

    maxDate: undefined,
    minDate: undefined,

    hourFormat: 'ha',

    utc: false,

    initialize: function(options) {
      this.listValues = _.map(_.range(24), function(x){
        return {
          value: x,
          label: moment({hour: x}).format(this.hourFormat)
        };
      }.bind(this));
      DropdownSelect.prototype.initialize.apply(this, arguments);
    },



    getTemplateData: function() {
      var data = DropdownSelect.prototype.getTemplateData.apply(this, arguments);
      var modelValue = this.model.get(this.valueAttr);
      var m = this.utc ? moment.utc(modelValue) : moment(modelValue);

      _.each(data.listValues, function(x) {
        x.disabled = !this.isHourInMinMax(x.value);
      }, this);
      return data;
    },

    getValueFromModel: function() {
      if (this.model) {
        var result = this.model.get(this.valueAttr);
        if (result > 1000) {
          var m = this.utc ? moment.utc(result) : moment(result);
          result = m.hour();
        }
        return result === undefined ? '' : result;
      }
    },

    updateModel: function(rootModel, parentModel) {
      var model = this.getModelFromRoot(this.relationship, rootModel, parentModel),
        value = this.getValue();

      var modelValue = model.get(this.valueAttr);
      var m = this.utc ? moment.utc(modelValue) : moment(modelValue);
      value = m.hour(value).valueOf();

      model.set(this.valueAttr, value);
    },

    getMinDate: function() {
      if (this.model && this.minDateAttr) {
        return this.model.get(this.minDateAttr);
      }
      return null;
    },

    /**
     * Set the maximum selectable date (inclusive)
     */
    getMaxDate: function() {
      if (this.model && this.maxDateAttr) {
        return this.model.get(this.maxDateAttr);
      }
      return null;
    },

    setValue: function(value) {
      if (!this.isHourInMinMax(value)) {
        return;
      }
      DropdownSelect.prototype.setValue.apply(this, arguments);
    },

    isHourInMinMax: function(hour) {
      var minDate = this.getMinDate(),
        maxDate = this.getMaxDate();

      var modelValue = this.model.get(this.valueAttr);
      var m = this.utc ? moment.utc(modelValue) : moment(modelValue);
      m.hour(hour);

      return (!minDate || m >= moment(minDate)) && (!maxDate || m <= moment(maxDate));
    },


    onModelChange: function (e) {
      if (e.changed[this.valueAttr] !== undefined || e.changed[this.minDateAttr] !== undefined || e.changed[this.maxDateAttr] !== undefined) {
        this.updateValueFromModel();
      }
    },
  });
});