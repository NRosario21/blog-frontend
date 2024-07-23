function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All Posts</a> | <a href="#posts-new">New posts</a>
    </header>
  );
}

function PostsNew() {
  return (
    <div id="post-new">
      <h1>Da Blog</h1>
      <form>
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Author: <input type="text" />
        </div>
        <button type="submit">Read blog</button>
      </form>
    </div>
  );
}

function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <img src={post.image_url} alt="" />
          <p>Author: {post.author}</p>
          <button>More info</button>
        </div>
      ))}
    </div>
  );
}
{
  /* <h1>Da Blog</h1>
      {props.word}
      <div className="blogs">
        <h2>Da Bears</h2>
        <p>
          This is our Year! As Chicagoans those are words we are very accustomed to hearing/reading every year. We
          believe those words whole heartily and we stand by them! Outside noise? Ha, that's music to our ears! So keep
          singning! While we keep believing! Bear Down! Beat the packers!
        </p>
        <img src="https://tse3.mm.bing.net/th?id=OIP.sCUUEXMtb5eWqgQjhp2AKwHaFj&pid=Api&P=0&h=220"></img>
      </div>
      <div className="blogs">
        <h2>Da Pride</h2>
        <p>Going for the Division Title! It's time to get it back! It's time to take over the North!</p>
        <img src="https://tse4.mm.bing.net/th?id=OIP.p2EUaVol2yig3NU_-TUreAHaEK&pid=Api&P=0&h=220"></img>
      </div>
      <div className="blogs">
        <h2>Da Shuffle</h2>
        <p>We'll be dancing this year!</p>
        <img src="https://tse3.mm.bing.net/th?id=OIP.Dw9Z_nYBH1_SrPOenpZi4QHaEy&pid=Api&P=0&h=220"></img>
        <p>Author: Noslen Rosario</p>
        <button>More info</button>
      </div>
      {props.posts.map((post) => (
        <div key={posts.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image_url} alt="" />
          <p>Author: {post.author}</p>
          <button>More info</button>
        </div>
      ))}
    </div>
  );
} */
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2024</p>
    </footer>
  );
}

function PostsPage() {
  let posts = [
    {
      id: 1,
      title: "Da Bears",
      body: "This is our Year! As Chicagoans those are words we are very accustomed to hearing/reading every year.",
      author: "Noslen Rosario",
      image_url: "https://tse3.mm.bing.net/th?id=OIP.sCUUEXMtb5eWqgQjhp2AKwHaFj&pid=Api&P=0&h=220",
    },
    {
      id: 2,
      title: "Da Pride",
      author: "Noslen Rosario",
      body: "Going for the Division Title! It's time to get it back! It's time to take over the North!",
      image_url: "https://tse4.mm.bing.net/th?id=OIP.p2EUaVol2yig3NU_-TUreAHaEK&pid=Api&P=0&h=220",
    },
    {
      id: 3,
      title: "Da Shuffle",
      body: "We'll be dancing this year!",
      author: "Noslen Rosario",
      image_url: "https://tse3.mm.bing.net/th?id=OIP.Dw9Z_nYBH1_SrPOenpZi4QHaEy&pid=Api&P=0&h=220",
    },
  ];
  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
    </div>
  );
}
function App() {
  return (
    <div>
      <Header />
      <PostsPage />
      <Footer />
    </div>
  );
}

export default App;
