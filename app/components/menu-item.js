import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
  orderManager: service('order-manager'),
  classNames: ['menu-item'],
  tagName: 'li',
  mealCategory: 'breakfast',
  actions: {
    chooseItem(menuItemName) {
      this.get('orderManager').chooseMenuOption(this.get("mealCategory"), menuItemName);
    },
    changeCategory(cat) {
      this.set('mealCategory', cat);
    }
  }
});
