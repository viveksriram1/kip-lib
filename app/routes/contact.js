import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return this.store.createRecord('contact');
  },

  actions: {
    saveInvitation(newContact){
      newContact.save().then(() => this.transitionTo('application'));
    },

    willTransition(){
      this.controller.get('model').rollbackAttributes();
    }
  }
});
