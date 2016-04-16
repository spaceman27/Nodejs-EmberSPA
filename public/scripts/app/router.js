Router.map(function(){
  this.route('index', { path: '/candidate' });
   this.route('candidate', { path: '/candidate' });
   this.route('employer', { path: '/employer' });
   this.route('page-not-found', { path: '/*wildcard' });   
});
App.Router.reopen({
  location: 'hash'
});