import React, { useEffect, useState } from "react";
import "./css/App.css";
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import PostFilter from "./Components/PostFilter";
import MyModal from "./Components/UI/Model/MyModal";
import MyButton from "./Components/UI/Button/MyButton";
import { usePosts } from "./Hooks/UsePosts";
import PostService from "./API/PostService";
import Loader from "./Components/UI/Loader/Loader";
import { useFetching } from "./Hooks/UseFetching";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);

  const [fetchPosts, isLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll();
    const newPosts = posts.map((res) => ({
      id: res.id,
      title: res.title,
      description: res.body,
    }));
    setPosts(newPosts);
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton onClick={fetchPosts}>GET POSTS</MyButton>
      <MyButton
        style={{ margin: "15px 10px" }}
        onClick={() => {
          setModal(true);
        }}
      >
        Click here!
      </MyButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm createPost={createPost}></PostForm>
      </MyModal>

      <hr style={{ margin: "15px 0" }} />

      <PostFilter filter={filter} setFilter={setFilter} />

      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "50px 0px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          posts={sortedAndSearchedPosts}
          remove={removePost}
          title="Список про языки программирования"
        />
      )}
    </div>

    // <div className="App_Counter">
    //     <Counter />
    //     <Counter />
    //     <Counter />
    //     <h1>{value}</h1>
    //     <input
    //         type="text"
    //         value={value}
    //         onChange={(event) => setValue(event.target.value)}
    //     />
    // </div>
  );
}

export default App;
