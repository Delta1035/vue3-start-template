import { defineComponent } from 'vue';

export const Test = defineComponent({
  name: 'test-component',
  prop: [{}],
  setup() {
    return <p>{{}}</p>;
  }
});
