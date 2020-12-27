const siteURL = 'https://williamwhitaker.art'

export const state = () => ({
  posts: [],
  blocks: [],
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
        `${siteURL}/wp-json/wp/v2/wwa_artwork?page=1&per_page=100&_embed=1`
      ).then((res) => res.json())
      artworks = artworks.map(({ id, slug, title, tags, content, acf }) => ({
        id,
        slug,
        title,
        tags,
        content,
        acf,
      }))

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

  async getTags({ state, commit }) {
    if (state.tags.length) return

    let allTags = state.artworks.reduce((acc, item) => {
      return acc.concat(item.tags)
    }, [])
    allTags = allTags.join()

    try {
      let tags = await fetch(
        `${siteURL}/wp-json/wp/v2/tags?page=1&per_page=40&include=${allTags}`
      ).then((res) => res.json())

      tags = tags.map(({ id, name }) => ({
        id,
        name,
      }))

      commit('updateTags', tags)
    } catch (err) {
      console.log(err)
    }
  },
}
