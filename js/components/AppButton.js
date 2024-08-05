export default {
  template: `
    <button :class="{
      'border rounded px-2 py-3': true,
      'bg-blue-200 hover:bg-red-300': type == 'primary',
      'is-loading': processing
    }" :disabled="processing">
      <slot/>
    </button>
  `,
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    processing: {
      type: Boolean,
      default: true
    }
  }
}