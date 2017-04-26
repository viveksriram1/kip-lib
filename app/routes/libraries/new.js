import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return this.store.createRecord('library');
  },

  setupController: function(controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create new library');
    controller.set('buttonLabel', 'create');
  },

  renderTemplate() {
    this.render('libraries/form');
  },

  actions: {
    saveLibrary(newLibrary){
      newLibrary.save().then(() => this.transitionTo('libraries'));
    },

    willTransition(){
      this.controller.get('model').rollbackAttributes();
    }
  }
});
