import { reactive } from 'vue'

//NOTE AppState is a reactive object to contain app level data
//NOTE @type {import} tells the app what types of data each of these are so that we can have better intellisense elsewhere in our code.
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
/** @type {import('./models/Blog.js').Blog[]} blogs from the database*/
  blogs: [],
/** @type {import('./models/Blog.js').Blog} active blog from AppState.blogs*/
  activeBlog: null,
/** @type {import('./models/Account.js').Account} ANOTHER PERSON POTENTIALLY SEPARATE FROM THE LOGGED IN USER from the database*/
  activeProfile: null
})

