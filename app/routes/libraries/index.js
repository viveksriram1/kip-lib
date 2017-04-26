import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('library');
  },
  
  actions: {
    deleteLibrary(library) {
      let confirmation = confirm('Are you sure? want to delete this library !!!');

      if(confirmation) {
        library.destroyRecord();
      }
    }
  }
});
