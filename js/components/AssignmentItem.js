export default {
  template: `
    <li>
      <label :key="assignment.id">
        {{ assignment.name }}
        <input type="checkbox" v-model="assignment.complete" />
      </label>
    </li>
  `,
  props: {
    assignment: Object
  }
}