

export class Blog {
  /**NOTE ctrl + . on data allows you to infer the data types for everything. This will give us better intellisense when interacting with a Blog Class Object
   * @param {{ id: String; title: String; body: String; imgUrl: String; tags: String[]; published: Boolean; creatorId: String; creator: any }} data
   */
  constructor(data){
    this.id = data.id
    this.title = data.title
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.tags = data.tags
    this.published = data.published
    this.creatorId = data.creatorId
    this.creator = data.creator
  }
}