import Model, { belongsTo } from '@ember-data/model';

export default class AgentModel extends Model {
  @belongsTo('job', { inverse: 'creator', async: true }) job;
}
