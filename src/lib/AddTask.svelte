<script>
  import { createEventDispatcher } from "svelte";
  let newTask = "";

  const dispatch = createEventDispatcher();

  const addNewTask = () => {
    const data = {
      name: newTask,
      status: "notCompleted",
    };

    dispatch("newTask", { data:data });
    newTask = "";
  };
</script>

<div class="addTask">
  <button on:click={addNewTask}>+</button>
  <input bind:value={newTask} placeholder="Add to-do" />
</div>

<style>
  .addTask {
    display: grid;
    grid-template-columns: repeat(12, 35px);
    margin-top:10px;
  }

  button {
    grid-column: 1;
    border:solid 1px grey;
    padding:0;
    margin:0;
  }

  input {
    grid-column: 2/13;
    padding-top:10px;
    padding-bottom: 10px;
    margin-left: 10px
  }
</style>


