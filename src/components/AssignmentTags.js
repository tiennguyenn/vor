export default {
  template: `
    <button 
      v-for="tag in tags"
      :class="{
        'border border-gray-600 rounded mr-2': true,
        'text-xs': currentTag === tag
      }"
      @click="$emit('update:currentTag', tag)"
    >
      {{ tag }}
    </button>
  `,
  props: {
    tags: Array,
    currentTag: String
  }
}
