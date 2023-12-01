import Inflector from 'ember-inflector';

export function initialize() {
  const inflector = Inflector.inflector;

  inflector.irregular('person', 'people');
}

export default {
  name: 'custom-inflector-rules',
  initialize,
};
