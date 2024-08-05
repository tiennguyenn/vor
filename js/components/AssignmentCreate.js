export default {
  template: `
    <form @submit.prevent="add">
      <input v-model="newAssignment" />
      <button>Add</button>
    </form>
  `,
  data() {
    return {
      newAssignment: ''
    }
  },
  methods: {
    add() {
      this.$emit('add', this.newAssignment);
    }
  }
};