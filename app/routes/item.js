import Route from '@ember/routing/route';
// import jQuery from 'jquery';
import $ from 'jquery';

export default Route.extend({
  model(params) {
    return $.get('/menu/' + params.item_name +  '.json');
  }
    // model(params) {
    //   return Ember.$.get('/menu/' + params.item_name + '.json');
    //   // return this.element.get('/menu/' + params.item_name + '.json');
    // }
});
