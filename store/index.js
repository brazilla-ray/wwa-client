const siteURL = 'http://williamwhitaker.local'

export const state = () => ({
  posts: [],
  tags: [],
  artworks: [],
  selected: [],
})

export const getters = {
  sortedArtworks: (state) => {
    return state.artworks.map((el) => {
      return {
        ...el,
        tags: [...el.tags.map((el) => [el.slug]).flat()],
      }
    })
  },
  selectedTag: (state) => {
    return state.selected
  },
}

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
  updateSelected: (state, selected) => {
    state.selected = selected
  },
}

export const actions = {
  async getArtworks({ state, commit, dispatch }) {
    if (state.artworks.length) return

    try {
      let artworks = await fetch(
        `${siteURL}/wp-json/wwap/v1/artwork`
      ).then((res) => res.json())
      artworks = artworks.flatMap(
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
      let tags = await fetch(
        `${siteURL}/wp-json/wwap/v1/artwork/tags`
      ).then((res) => res.json())

      tags = tags.map(({ id, slug }) => ({
        id,
        slug,
      }))

      commit('updateTags', tags)
    } catch (err) {
      console.log(err)
    }
  },
}
