import Model, { attr, belongsTo } from '@ember-data/model';

export default class JobModel extends Model {
  @attr name;
  @attr('datetime') created;

  @belongsTo('agent', {
    inverse: 'job',
    async: true,
    polymorphic: true,
  })
  creator;
}
