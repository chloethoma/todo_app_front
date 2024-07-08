<script>
  import { createEventDispatcher } from "svelte";
  export let task;
  
  let name = task.name;
  let isCompleted;

  const dispatch = createEventDispatcher();
  
  if (task.status !== "notCompleted") isCompleted = true;

  const updateStatus = () => {
    isCompleted = !isCompleted;
    let status;
    isCompleted == true ? (status = "completed") : (status = "notCompleted");

    const data = {
      name: name,
      status: status,
    };

    dispatch("updateStatus", { data: data, id: task.id });
  };

  const deleteTask = () => {
	dispatch("delete", {id:task.id})
  }
</script>

<div class="task">
	<input type="checkbox" class="checkbox" bind:checked={isCompleted} on:click={updateStatus} />
	<input type="text" class="taskName" class:isCompleted bind:value={name}/>
	<button class="deleteButton" on:click={deleteTask}>X</button>
  </div>
  

<style>
  .task {
    display: grid;
    grid-template-columns: repeat(12, 35px);
  }

  .checkbox {
    grid-column: 1/2;
  }

  .taskName.isCompleted {
    text-decoration-line: line-through;
  }

  .taskName {
    grid-column: 2/12;
    font-size: 14px;
    overflow-x: hidden;
    white-space: nowrap;
    margin-left:10px;
  }


  .deleteButton {
    grid-column: 12;
  }
</style>
