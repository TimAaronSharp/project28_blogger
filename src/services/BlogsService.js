import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Blog } from "@/models/Blog.js"



class BlogsService{
  async getAllBlogs() {
    
    const res = await api.get('api/blogs')
    const blogs = res.data.map(pojo => new Blog(pojo))
    AppState.blogs = blogs
  }

}

export const blogsService = new BlogsService()