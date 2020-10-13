export const state = () => ({
  number: '',
  errorMessage: '',
  error: false,
  Numbers: [],
  NewItem: '',
  items: [],
  editedItem: null,
  userInfo: [],
  changingItem: null,
})
export const getters = {
  Num: state => {
    return state.number
  },
  Err: state => {
    return state.error
  },
  Numbers: state => {
    return state.Numbers
  },
  Items: state => {
    return state.items
  },
  ChangeItem: state => {
    return state.changingItem
  },
  NewItem: state => {
    return state.NewItem
  },
  EditItem: state => {
    return state.editedItem
  },
  SaveItem: state => {
    return state.items
  }
}


export const mutations = {
  Items(state, item) {
    return state.items = item
  },

  ChangeItem(state, item) {
    return state.changingItem = item
  },

  AddUserInfo(state, data) {
    state.userInfo = data
  },

  Num: (state, payload) => {
    return state.number = payload
  },
  Increment: (state) => {
    if (state.number === '') {
      state.error = true;
      state.errorMessage = 'please first enter your number...';
    } else {
      state.error = false;
      state.errorMessage = ''
      return state.number++
    }
  },
  checkInput: (state) => {
    if (!state.error) {
      state.errorMessage = 'please fill in the blank'
    }

  },
  Decrement: (state) => {
    if (state.number === '') {
      state.error = true;
      state.errorMessage = 'please first enter your number...';
    } else {
      state.error = false;
      state.errorMessage = ''
      return state.number--
    }
  },
  AddNum: (state) => {
    if (state.number === '') {
      state.error = true
      state.errorMessage = 'first enter number!!!'
    } else {
      state.error = false
      state.errorMessage = ''
      return state.Numbers.push(state.number)
    }
  },

  Completed: (state, item) => {
    if (item.completed) {
      return item.completed = false
    } else {
      return item.completed = true
    }

  },
  NewItem: (state, payload) => {
    return state.NewItem = payload
  },
  AddItem: (state) => {
    if (state.NewItem == '') {
      return
    }
    let subject = state.NewItem
    state.items.push({
      title: subject,
      completed: false
    })
    state.NewItem = ''
  },
  RemoveItem: (state, item) => {
    state.items.splice(state.items.indexOf(item), 1)
  },
  RemoveEmpty: (state, item) => {
    if (state.changingItem == null || state.changingItem === "" || state.changingItem === " ") {
      state.items.splice(state.items.indexOf(item), 1)
    } else {
      return
    }
  },
  RemoveActiveItem: (state) => {
    for (let index = 0; index < state.items.length; index++) {
      if (state.items[index].completed) {
        state.items.splice(index, 1)
        index--
      }
    }
  },
  EditItem: (state, item) => {
    return state.editedItem = item
  },
  SaveItem: (state, item) => {
    item.title = state.changingItem
    if (!state.changingItem) {
      return
    }
    state.editedItem = null
    state.changingItem = null
  }
}


export const actions = {
  Items: ({commit}, value) => {
    commit('Items', value)
  },
  ChangeItem: ({commit}, value) => {
    commit('ChangeItem', value)
  },

  AddUserInfo: ({commit}, {data}) => {
    commit('AddUserInfo', data)
  },

  Num: ({commit}, payload) => {
    commit('Num', payload)
  },
  Increment: ({commit}) => {
    commit('Increment')
  },
  Decrement: ({commit}) => {
    commit('Decrement')
  },
  AddNum: ({commit}) => {
    commit('AddNum')
  },
  Completed: ({commit}, {item}) => {
    commit('Completed', item)
  },
  NewItem: ({commit}, payload) => {
    commit('NewItem', payload)
  },
  AddItem: ({commit}) => {
    commit('AddItem')
  },
  RemoveItem: ({commit}, {item}) => {
    commit('RemoveItem', item)
  },
  RemoveEmpty: ({commit}, {item}) => {
    commit('RemoveEmpty', item)
  },
  RemoveActiveItem: ({commit}) => {
    commit('RemoveActiveItem')
  },
  EditItem: ({commit}, {item}) => {
    commit('EditItem', item)
  },
  SaveItem: ({commit, state}, {item}) => {
    if (state.changingItem === "" || state.changingItem == null || state.changingItem === " ") {
      commit('RemoveEmpty', item)
    }
    commit('SaveItem', item)
  },
}



