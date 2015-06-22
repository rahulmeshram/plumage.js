define('PlumageRoot',[], function(){
  /** @namespace Plumage */
  return {
    /** @namespace Plumage.model */
    model: {},
    /** @namespace Plumage.collection */
    collection: {},
    /** @namespace Plumage.controller */
    controller: {},
    /** @namespace Plumage.util */
    util: {},
    /** @namespace Plumage.vendor */
    vendor: {},
    /** @namespace Plumage.view */
    view: {
      /** @namespace Plumage.view.comment */
      comment: {},
      /** @namespace Plumage.view.controller */
      controller: {},
      /** @namespace Plumage.view.form */
      form: {
        /** @namespace Plumage.view.form.fields */
        fields: {
          /** @namespace Plumage.view.form.fields.picker */
          picker: {}
        }
      },
      /** @namespace Plumage.view.grid */
      grid: {},
      /** @namespace Plumage.view.menu */
      menu: {}
    }
  };
});
define('plumage',[
  './PlumageRoot',
  //'App',
  //'collection/ActivityCollection',
  //'collection/BufferedCollection',
  //'collection/Collection',
  //'collection/CommentCollection',
  //'collection/DataCollection',
  //'collection/Selection',
  //'collection/GridSelection',
  //'collection/UserCollection',
  //'controller/BaseController',
  //'controller/ModelController',
  //'ControllerManager',
  //'model/Activity',
  //'model/Model',
  //'model/Comment',
  //'model/Data',
  //'model/SearchResults',
  //'model/User',
  //'RequestManager',
  //'Router',
  //'slickgrid-all',
  //'util/ArrayUtil',
  //'util/D3Util',
  //'util/DateTimeUtil',
  //'util/Logger',
  //'util/ModelUtil',
  //'view/View',
  //'view/CollectionView',
  //'view/comment/CommentForm',
  //'view/comment/CommentsSection',
  //'view/comment/CommentView',
  //'view/comment/ExpandableComments',
  //'view/ContainerView',
  //'view/controller/IndexView',
  //'view/form/fields/ButtonGroupSelect',
  //'view/form/fields/Calendar',
  //'view/form/fields/CategorySelect',
  //'view/form/fields/Checkbox',
  //'view/form/fields/DateField',
  //'view/form/fields/DateRangeField',
  //'view/form/fields/DropdownMultiSelect',
  //'view/form/fields/DropdownSelect',
  //'view/form/fields/DurationField',
  //'view/form/fields/Field',
  //'view/form/fields/FieldWithPicker',
  //'view/form/fields/FilterCheckbox',
  //'view/form/fields/FilterTypeAhead',
  //'view/form/fields/HourSelect',
  //'view/form/fields/InPlaceTextField',
  //'view/form/fields/MultiSelect',
  //'view/form/fields/Radio',
  //'view/form/fields/RadioButtonGroup',
  //'view/form/fields/SearchField',
  //'view/form/fields/Select',
  //'view/form/fields/TextArea',
  //'view/form/fields/TypeAhead',
  //'view/form/fields/picker/DateRangePicker',
  //'view/form/fields/picker/Picker',
  //'view/form/FileDropZone',
  //'view/form/Form',
  //'view/form/SelectField',
  //'view/grid/FilterView',
  //'view/grid/Formatters',
  //'view/grid/GridView',
  //'view/grid/GridData',
  //'view/grid/Pager',
  //'view/ListAndDetailView',
  //'view/ListItemView',
  //'view/ListView',
  //'view/menu/DropdownMenu',
  //'view/ConfirmationDialog',
  //'view/DisplayField',
  //'view/MessageView',
  //'view/ModalDialog',
  //'view/ModelView',
  //'view/NavView',
  //'view/Popover',
  //'view/TabView'
],
function(Plumage) {
  return Plumage;
});

