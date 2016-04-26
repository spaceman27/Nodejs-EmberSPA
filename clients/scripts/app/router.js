import Ember from 'ember';
var Router = Ember.Router.extend({

});

Router.map(function(){
  this.route('index', { path: '/' });
   this.route('candidate', { path: '/candidate/:c_id' });
   this.route('employer', { path: '/employer' });
   this.route('page-not-found', { path: '/*wildcard' });   
});

export default Router;