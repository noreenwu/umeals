import Component from '@ember/component';
import {inject as service} from '@ember/service';

// export default Component.extend({
//   orderManager: Ember.inject.service('order-manager')
//   // orderManager: import @ember/service('order-manager')
// });

export default Component.extend({
    orderManager: service('order-manager'),
    actions: {
      setDayTo(day) {
        this.get('orderManager').setSelectedDayTo(day);
      },
      remove(day, menuCategory) {
        this.get('orderManager').removeMenuOption(day, menuCategory);
      }
    }
});
