<script>
  import { Router, Route, navigate } from "svelte-navigator";
  import data from "./data.json";
  import Post from "./components/Post.svelte";
  import Form from "./components/Form.svelte";
  import About from "./components/About.svelte";
  import Nav from "./components/Nav.svelte";

  let posts = data.data;

  let arrayInc = 3;

  function addPost(author, date, post) {
    const newPost = {
      id: ++arrayInc,
      author,
      date,
      post,
    };

    posts.push(newPost);
    posts = posts;

    author = "";
    date = "";
    post = "";

    navigate("/posts");
  }

  function deletePost(id) {
    const deleteIndex = posts.findIndex((post) => post.id === id);
    posts.splice(deleteIndex, 1);
    posts = posts;
  }
</script>

<Router>
  <main class="flex flex-col justify-center items-center h-screen space-y-4">
    <Nav />
    <Route>
      <Form {addPost} />
    </Route>
    <Route path="/about">
      <About name="Billy" text="FE Developer" />
    </Route>
    <Route path="posts">
      <div class="overflow-auto space-y-4 p-4">
        {#each posts as post}
          <Post {deletePost} {...post} />
        {/each}
      </div>
    </Route>
  </main>
</Router>

<style>
</style>
