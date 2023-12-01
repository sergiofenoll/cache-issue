import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AgentComponent extends Component {
  @service store;

  @tracked name;

  @action
  async createJob() {
    if (this.name) {
      const job = this.store.createRecord('job', {
        name: this.name,
        creator: this.args.agent,
        created: new Date(),
      });
      await job.save();
    }
  }
}
