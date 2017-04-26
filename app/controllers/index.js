import Ember from 'ember';

export default Ember.Controller.extend({

  headerMessage: 'Comming Soon',
  responseMessage: '',
  emailAddress: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actions: {
    saveInvitation(){
      const email = this.get('emailAddress');

      const newInvitation = this.store.createRecord('invitation', {email: email});
      newInvitation.save().then((response) => {
        this.set('responseMessage', `Thank You! We've just saved your email address with following id: ${response.get('id')}`);
        this.set('emailAddress', '');
      });
      
    }
  }

});
