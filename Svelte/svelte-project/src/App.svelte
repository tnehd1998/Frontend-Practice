<script>
  import data from "./data.json";

  let author = "";
  let date = "";
  let post = "";

  let posts = data.data;

  function addPost() {
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
  <div class="overflow-auto space-y-4 p-4">
    {#each posts as post}
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{post.author}</h2>
          <p>{post.date}</p>
          <p>{post.post}</p>
        </div>
      </div>
    {/each}
  </div>
</main>

<style>
</style>
