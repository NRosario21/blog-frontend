export function BlogsNew() {
  return (
    <div id="blogs-new">
      <h1>New blog</h1>
      <form>
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Chef: <input type="text" />
        </div>
        <button type="submit">Create blog</button>
      </form>
    </div>
  );
}
