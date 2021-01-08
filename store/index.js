const siteURL = 'http://williamwhitaker.local'

export const state = () => ({
  posts: [],
  tags: [],
  artworks: [],
})

export const mutations = {
  updateArtworks: (state, artworks) => {
    state.artworks = artworks
  },
  updatePosts: (state, posts) => {
    state.posts = posts
  },
  updateTags: (state, tags) => {
    state.tags = tags
  },
}

export const actions = {
  async getArtworks({ state, commit, dispatch }) {
    if (state.artworks.length) return

    try {
      let artworks = await fetch(
        `${siteURL}/wp-json/wwap/v1/artwork`
      ).then((res) => res.json())
      artworks = artworks.map(
        ({ id, title, medium, dimensions, date, image, tags }) => ({
          id,
          title,
          medium,
          dimensions,
          date,
          image,
          tags,
        })
      )

      commit('updateArtworks', artworks)
    } catch (err) {
      console.log(err)
    }
  },

  async getPosts({ state, commit, dispatch }) {
    if (state.posts.length) return

    try {
      let posts = await fetch(`${siteURL}/wp-json/wp/v2/posts`).then((res) =>
        res.json()
      )

      posts = posts.map(({ id, slug, title, date, guid, content, blocks }) => ({
        id,
        slug,
        title,
        date,
        guid,
        content,
        blocks,
      }))

      commit('updatePosts', posts)
    } catch (err) {
      console.log(err)
    }
  },

  async getTags({ state, commit, dispatch }) {
    if (state.tags.length) return

    try {
      let tags = await fetch(`${siteURL}/wp-json/wwap/v1/artwork`).then((res) =>
        res.json()
      )

      tags = tags.map(({ id, tags }) => ({
        id,
        tags,
      }))

      commit('updateTags', tags)
    } catch (err) {
      console.log(err)
    }
  },
}
