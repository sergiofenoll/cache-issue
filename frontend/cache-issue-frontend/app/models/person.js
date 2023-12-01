import AgentModel from 'cache-issue-frontend/models/agent';
import { attr } from '@ember-data/model';

export default class PersonModel extends AgentModel {
  @attr name;
}
