Router.map(function(){
  this.route('index', { path: '/' });
   this.route('candidateSearching', { path: '/candidateSearching' });

   this.route('page-not-found', { path: '/*wildcard' });
});