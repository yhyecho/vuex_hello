import post from '../api/post'

const state = {
  all: []
}

const mutations = {
  loadPosts (state, posts) {
    state.all = posts
  },
  like (state, postId) {
    state.all.map(item => {
      if (item.id === postId) {
        item.likes++
      }
      return item
    })
  }
}

const actions = {
  loadPosts ({commit}) {
    post.getPosts(posts => {
      commit('loadPosts', posts)
    })
  }
}

export default {
  state,
  mutations,
  actions
}
