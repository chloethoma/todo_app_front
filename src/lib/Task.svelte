<script>
  import { createEventDispatcher } from "svelte";
  import {fade} from 'svelte/transition';
  export let task;

  const dispatch = createEventDispatcher();

  let isCompleted;
  let visible = true;
  
  if (task.status !== "notCompleted") isCompleted = true;

  const updateStatus = () => {
    isCompleted = !isCompleted;
    let status;
    isCompleted == true ? (status = "completed") : (status = "notCompleted");

    const data = {
      name: task.name,
      status: status,
    };

    dispatch("update", { data: data, id: task.id });
  };

  const deleteTask = () => {
	visible = false;
	dispatch("delete", {id:task.id})
  }
</script>

{#if visible}
<div class="task" out:fade>
	<input type="checkbox" bind:checked={isCompleted} on:click={updateStatus} />
	<div class="taskName" class:isCompleted>{task.name}</div>
	<button class="deleteButton" on:click={deleteTask}>X</button>
  </div>
{/if}
  

<style>
  .task {
    display: grid;
    grid-template-columns: repeat(10, minmax(min-content, 30px));
  }

  input {
    grid-column: 1/2;
  }

  .taskName.isCompleted {
    text-decoration-line: line-through;
  }

  .taskName {
    grid-column: 2/10;
  }

  button {
    grid-column: 10;
  }
</style>
