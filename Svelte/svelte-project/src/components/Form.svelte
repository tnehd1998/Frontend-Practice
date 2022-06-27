<script>
  import { posts } from "../stores";
  import { navigate } from "svelte-navigator";
  let author = "";
  let date = "";
  let post = "";

  let arrayInc = 3;

  function addPost() {
    const newPost = {
      id: ++arrayInc,
      author,
      date,
      post,
    };

    $posts.push(newPost);
    $posts = $posts;

    author = "";
    date = "";
    post = "";

    navigate("/posts");
  }
</script>

<div class="form-control">
  <label for="author" class="label">
    <span class="label-text">Author</span>
  </label>
  <input
    bind:value={author}
    name="author"
    type="text"
    placeholder="username"
    class="input"
  />
  <label for="date" class="label">
    <span class="label-text">Date</span>
  </label>
  <input
    bind:value={date}
    name="date"
    type="text"
    placeholder="username"
    class="input"
  />
  <label for="post" class="label">
    <span class="label-text">Post</span>
  </label>
  <textarea
    bind:value={post}
    name="post"
    class="textarea h-24 textarea-bordered-none "
  />
  <button on:click={addPost} class="btn btn-primary">Submit</button>
</div>
