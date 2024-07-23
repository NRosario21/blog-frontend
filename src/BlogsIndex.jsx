export function BlogsIndex(props) {
  console.log(props);
  return (
    <div id="blogs-index">
      <h1>All blogs</h1>
      {props.blogs.map((blog) => (
        <div key={blog.id} className="blogs">
          <h2>{blog.title}</h2>
          <img src={blog.image_url} alt="" />
          <p>Author: {blog.author}</p>
          <button>More info</button>
        </div>
      ))}
      <div className="cards">
        {props.blogs.map((blog) => (
          <div key={blog.id} className="card">
            <h2>{blog.title}</h2>
            <img src={blog.image_url} alt="" />
            <p>Author: {blog.author}</p>
            <button>More info</button>
            <div className="card-body">
              <h2>{blog.title}</h2>
              <p>Author: {blog.authour}</p>
              <button>More info</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
