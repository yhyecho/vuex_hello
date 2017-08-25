const _comments = [
  {
    text: 'foo',
    post: '1'
  },
  {
    text: 'bar',
    post: '2'
  },
  {
    text: 'pizaa',
    post: '1'
  }
]

export default {
  getComments (cb) {
    setTimeout(() => cb(_comments), 2000)
  }
}
