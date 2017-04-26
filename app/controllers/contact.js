import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/) && Ember.computed.gte('message.length', 1),
  isDisabled: Ember.computed.not('isValid'),

  actions: {
    saveInvitation(){
      const email = this.get('emailAddress');
      const message = this.get('message');

      const newContact = this.store.createRecord('contact', {email: email, message: message});
      newContact.save().then((response) => {
        this.set('responseMessage', `Thank You! We've just saved your email address: ${response.get('id')}`);
        this.set('emailAddress', '');
        this.set('message', '');
      });
    }
  }

});