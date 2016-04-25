import Ember from 'ember'

App.candidateSearchingRoute = Ember.Route.extend({
    setupController: function (controller, model) {
        controller.set('content', App.TodoList.find());
    }
}); 