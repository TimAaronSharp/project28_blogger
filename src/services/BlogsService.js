import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Blog } from "@/models/Blog.js"



class BlogsService{
  async getAllBlogs() {
    //NOTE makes an Axios get request to 'api/blogs' and returns the result (res), which in this case is an array of data that we can use to construct a Blog Class Object
    const res = await api.get('api/blogs')
    //NOTE .map is an array method that iterates over every item in an array and returns a **new** array (meaning it does not alter the array it iterates over, but instead makes a new one) and places the results of the mapping in the variable we are defining (blogs). In this case we are telling it to refer to each item in the array as "pojo", and for every pojo it creates a new Blog Class Object, and passes the pojo to the constructor in the Blog Class to create the object.
    const blogs = res.data.map(pojo => new Blog(pojo))
    //NOTE Assigns the new blogs array (which now is an array of Blog Objects instead of just pojo (plain old javascript object) so that we can access it locally in our app.)
    AppState.blogs = blogs
    //NOTE logger.log(AppState.blogs)
  }
  setActiveBlog(blog) {
    //NOTE This method assigns a 
    AppState.activeBlog = blog
    // logger.log(AppState.activeBlog)
  }
}

export const blogsService = new BlogsService()