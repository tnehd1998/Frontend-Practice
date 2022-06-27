<script>
  import { onMount, onDestroy } from "svelte";
  import { posts } from "../stores";
  export let author;
  export let date;
  export let post;
  export let id;

  let timeOnScreen = 0;
  let timeInterval = null;

  onMount(() => {
    timeInterval = setInterval(() => {
      ++timeOnScreen;
    }, 1000);
  });

  onDestroy(() => {
    clearInterval(timeInterval);
  });

  function deletePost() {
    const deleteIndex = $posts.findIndex((post) => post.id === id);
    $posts.splice(deleteIndex, 1);
    $posts = $posts;
  }
</script>

<div class="card bordered w-96 bg-white shadow-xl">
  <div on:click={deletePost} class="absolute right-0 pl-2 text-error text-2xl">
    x
  </div>
  <div class="absolute left-0 pl-2 text-black text-2xl">{timeOnScreen}</div>
  <div class="card-body">
    <h2 class="card-title">{author}</h2>
    <p>{date}</p>
    <p>{post}</p>
  </div>
</div>
