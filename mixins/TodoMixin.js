let filters = {
  all: (items) => {
    return items
  },
  active: (items) => {
    return items.filter((item) => {
      return !item.completed
    })
  },
  completed: (items) => {
    return items.filter((item) => {
      return item.completed
    })
  }
}
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(["Items"]),
    filterItem: {
      get() {
        return filters[this.visibility](this.Items)
      },
      set(value) {
        return this.$store.dispatch('Items', value)
      }
    },
    itemCounter() {
      return filters.active(this.Items).length
    }
  }
}
