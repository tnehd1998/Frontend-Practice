<script>
  export let author;
  export let date;
  export let post;
</script>

<div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">{author}</h2>
    <p>{date}</p>
    <p>{post}</p>
  </div>
</div>
