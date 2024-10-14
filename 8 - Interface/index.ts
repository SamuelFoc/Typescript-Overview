interface Author {
  name: string;
  avatar: string;
}

const authorOne: Author = {
  name: "Jozef",
  avatar: "/img/jsp.png",
};

interface Post {
  title: string;
  body: string;
  tags: string[];
  created_at: Date;
  author: Author;
}

const newPost: Post = {
  title: "My Title",
  body: "Something to say!",
  tags: ["nature", "posts"],
  created_at: new Date(),
  author: authorOne,
};

function createPost(post: Post): void {
  console.log(
    `Created Post: ${post.title} by ${
      post.author.name
    } (${post.created_at.toLocaleDateString("uk")})`
  );
}

createPost(newPost);

let posts: Post[] = [];

posts.push(newPost);
