/**
 * Source and inspiration:
 * {@link https://www.smashingmagazine.com/2020/02/headless-wordpress-site-jamstack/}
 * @namespace store
 * @type {Object}
 */

/**
 * Sets the base URL, i.e the WordPress instance.
 */
const siteURL = 'http://williamwhitaker.local'

/**
 * The global source of truth.
 * @type {Object}
 */

export const state = () => ({
  /**
   * Collection of all posts.
   */
  posts: [],
  /**
   * Collection of all tags.
   */
  tags: [],
  /**
   * Collection of all posts of type 'artworks'.
   */
  artworks: [],
  /**
   * The currently selected tag on the 'artworks' page.
   */
  selected: [],
})
/**
 * Functions to filter data.
 * @type {Object}
 */
export const getters = {
  /**
   * Returns a flattened array of 'artworks' objects.
   * source and inspiration: {@link https://stackoverflow.com/a/53115809/4699931}
   * @param {Object} state - reference to the global state
   * @todo rename to better reflect what it does.
   */
  sortedArtworks: (state) => {
    /**
     * @function artworksMap
     * @param {Object} el - individual post from array of artworks
     */
    return state.artworks.map((el) => {
      return {
        ...el,
        tags: [...el.tags.map((el) => [el.slug]).flat()],
      }
    })
  },
  /**
   * Returns the currently selected tag on the 'artworks' page, and adds it to the state above.
   * @function selectedTag
   * @param {Object} state - reference to the global state
   */
  selectedTag: (state) => {
    if (state.selected.length < 1) return 'all'
    return state.selected
  },
}
/**
 * Functions to alter the state of items in the application store.
 */
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
/**
 * Functions to fetch data from wordpress.
 */
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
      /** @todo replace console.log */
      console.log(err)
    }
  },

  async getPosts({ state, commit, dispatch }) {
    if (state.posts.length) return

    try {
      let posts = await fetch(`${siteURL}/wp-json/wp/v2/posts`).then((res) =>
        res.json()
      )

      posts = posts.map(
        ({ id, slug, title, date, guid, excerpt, content, blocks }) => ({
          id,
          slug,
          title,
          date,
          guid,
          excerpt,
          content,
          blocks,
        })
      )

      commit('updatePosts', posts)
    } catch (err) {
      /** @todo replace console.log */
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
      /** @todo replace console.log */
      console.log(err)
    }
  },
}
