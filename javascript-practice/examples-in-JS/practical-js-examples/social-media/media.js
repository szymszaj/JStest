class Post {
  constructor(id, content, author) {
    this.id = id;
    this.content = content;
    this.author = author;
    this.likes = [];
    this.createdAt = new Date();
  }

  addLike(userId) {
    if (!this.likes.includes(userId)) {
      this.likes.push(userId);
      return true;
    }
    return false;
  }

  removeLike(userId) {
    const index = this.likes.indexOf(userId);
    if (index > -1) {
      this.likes.splice(index, 1);
      return true;
    }
    return false;
  }

  getLikeStats() {
    return {
      totalLikes: this.likes.length,
      likedBy: this.likes,
      lastLiked:
        this.likes.length > 0 ? this.likes[this.likes.length - 1] : null,
    };
  }
}

const post = new Post(1, "Hello World!", "user123");
post.addLike("user456");
post.addLike("user789");
console.log(post.getLikeStats());

// view
// $ node media.js
// {
//   totalLikes: 2,
//   likedBy: [ 'user456', 'user789' ],
//   lastLiked: 'user789'
// }
