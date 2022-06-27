<script>
  import data from "./data.json";
  import Post from "./components/Post.svelte";
  import Form from "./components/Form.svelte";
  import Header from "./components/Header.svelte";

  let posts = data.data;

  function addPost(author, date, post) {
    const newPost = {
      id: posts.length + 1,
      author,
      date,
      post,
    };

    posts.push(newPost);
    posts = posts;

    author = "";
    date = "";
    post = "";
  }
</script>

<main class="flex flex-col justify-center items-center h-screen space-y-4">
  <Header name="Billy" text="FE Developer" />
  <Form {addPost} />
  <div class="overflow-auto space-y-4 p-4">
    {#each posts as post}
      <Post {...post} />
    {/each}
  </div>
</main>

<style>
</style>
