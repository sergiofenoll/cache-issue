import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;

  model(_params, _transition) {
    return this.store.query('agent', {});
  }
}
