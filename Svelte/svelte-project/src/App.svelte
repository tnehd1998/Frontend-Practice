<script>
  import { Router, Route } from "svelte-navigator";
  import Post from "./components/Post.svelte";
  import Form from "./components/Form.svelte";
  import About from "./components/About.svelte";
  import Nav from "./components/Nav.svelte";
  import { posts } from "./stores";
</script>

<Router>
  <main class="flex flex-col justify-center items-center h-screen space-y-4">
    <Nav />
    <Route>
      <Form />
    </Route>
    <Route path="/about">
      <About name="Billy" text="FE Developer" />
    </Route>
    <Route path="posts">
      <div class="overflow-auto space-y-4 p-4">
        {#each $posts as post}
          <Post {...post} />
        {/each}
      </div>
    </Route>
  </main>
</Router>

<style>
</style>
