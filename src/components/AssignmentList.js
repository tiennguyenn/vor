import AssignmentItem from './AssignmentItem.js'
import AssignmentTags from './AssignmentTags.js'

export default {
  components: { AssignmentItem, AssignmentTags },
  template: `
    <section v-show="filtersByTags.length">
      <h2 class="font-bold mb-2">{{ title }}</h2>
      <assignment-tags :tags="tags" v-model:currentTag="currentTag"/>
      <ul class="border border-gray-600 divide-y divide-gray-600 mt-3">
        <assignment-item v-for="assignment in filtersByTags" :key="assignment.id" :assignment="assignment" />
      </ul>
      <slot name="aaaa"></slot>
    </section>
  `,
  data() {
    return {
      currentTag: 'all'
    }
  },
  computed: {
    filtersByTags() {
      if (this.currentTag === 'all') {
        return this.assignments
      }

      return this.assignments.filter((a) => a.tag === this.currentTag)
    },
    tags() {
      return ['all', ...new Set(this.assignments.map((a) => a.tag))]
    }
  },
  props: {
    assignments: Array,
    title: String
  }
}
