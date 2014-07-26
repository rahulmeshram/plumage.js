define([
  'jquery',
  'underscore',
  'backbone',
  'moment',
  'plumage',
  'example/model/User',
  'example/model/TestAsyncModel',
  'text!kitchen_sink/view/example/form/templates/Validation.html',
  'text!data/countries.json'
], function($, _, Backbone, moment, Plumage, User, TestAsyncModel, template, countries) {

  return Plumage.view.ModelView.extend({

    modelCls: User,

    template: template,

    formInvalid: true,

    subViews: [{
      viewCls: Plumage.view.form.fields.DateField,
      selector: '.past-date',
      label: 'Date this week',
      minDate: moment().startOf('week'),
      maxDate: moment().startOf('week').add({day: 6})
    }, {
      viewCls: Plumage.view.form.fields.Field,
      selector: '.validated-field',
      label: 'At least 2 characters',
      validationRules: {
        minLength: 2,
        required: true
      }
    }, {
      viewCls: Plumage.view.form.Form,
      selector: '.server-form',
      name: 'serverForm',
      modelCls: TestAsyncModel,
      className: 'form-horizontal',
      template: '<div class="fields"></div><div class="address"></div><input type="submit" value="Submit"/>',
      subViews: [{
        viewCls: Plumage.view.form.fields.Field,
        selector: '.fields',
        label: 'Invalid then Valid',
        valueAttr: 'name'
      }]
    }],
    initialize: function(options) {
      Plumage.view.ModelView.prototype.initialize.apply(this, arguments);

      var form = this.getSubView('serverForm');

      var model = new TestAsyncModel({}, {
        ajaxResponse: [{
          meta: {success: false, validationError: {'name': 'invalid'}}
        }, {
          meta: {success: true}
        }]
      });

      form.setModel(model);
    }
  });
});