import axios from "axios";
import { BlogsIndex } from "./BlogsIndex";
import { BlogsNew } from "./BlogsNew";

export function BlogsPage() {
  // let blogs = []; this is how its done in js
  const [blogs, setBlogs] = useState([]);

  const handleIndexBlogs = () => {
    axios.get("http://localhost:3000/blog.json").then((response) => {
      console.log(response);
      // recipes = response.data;
      setBlogs(response.data);
    });
  };

  useEffect(handleIndexBlogs, []);
  // {
  //   id: 1,
  //   title: "Da Bears",
  //   body: "This is our Year! As Chicagoans those are words we are very accustomed to hearing/reading every year.",
  //   author: "Noslen Rosario",
  //   image_url: "https://tse3.mm.bing.net/th?id=OIP.sCUUEXMtb5eWqgQjhp2AKwHaFj&pid=Api&P=0&h=220",
  // },
  // {
  //   id: 2,
  //   title: "Da Pride",
  //   author: "Noslen Rosario",
  //   body: "Going for the Division Title! It's time to get it back! It's time to take over the North!",
  //   image_url: "https://tse4.mm.bing.net/th?id=OIP.p2EUaVol2yig3NU_-TUreAHaEK&pid=Api&P=0&h=220",
  // },
  // {
  //   id: 3,
  //   title: "Da Shuffle",
  //   body: "We'll be dancing this year!",
  //   author: "Noslen Rosario",
  //   image_url: "https://tse3.mm.bing.net/th?id=OIP.Dw9Z_nYBH1_SrPOenpZi4QHaEy&pid=Api&P=0&h=220",
  // },

  return (
    <div>
      <BlogsNew />
      <BlogsIndex blogs={blogs} />
    </div>
  );
}
