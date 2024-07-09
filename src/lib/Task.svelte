<script>
  import { createEventDispatcher } from 'svelte';
  import Icon from '@iconify/svelte'
  export let task;
  
  const dispatch = createEventDispatcher();
  let isCompleted;
  let updateInput = false;
  let status;
  
  if (task.status !== 'notCompleted') isCompleted = true;
  
  const updateStatus = () => {
    isCompleted = !isCompleted;
    isCompleted == true ? (status = 'completed') : (status = 'notCompleted');

    const data = {
      name: task.name,
      status: status,
    };

    dispatch('updateStatus', { data: data, id: task.id });
  };

  const updateTaskName = (input) => {
    isCompleted == true ? (status = 'completed') : (status = 'notCompleted');

    const data = {
      name: input.value,
      status: status,
    };

    dispatch('updateTaskName', { data:data, id:task.id });
    updateInput = !updateInput;
  }

  const deleteTask = () => {
	dispatch('delete', {id:task.id})
  }


</script>

<div class='task'>
	<input type='checkbox' class='checkbox' bind:checked={isCompleted} on:click={updateStatus} />

  {#if updateInput == false}
	  <div class='taskName' class:isCompleted>{task.name}</div>
    <button class='updateButton' on:click={() => updateInput = !updateInput}><Icon icon='ph:pencil-bold' width='16' height='16' style='color: #9a9996' /></button>
    <button class='deleteButton' on:click={deleteTask}><Icon icon='raphael:cross' width='20' height='20' style='color: #9a9996' /></button>
  {:else}
    <input class='taskNameInput' on:keydown={(event) => event.key === 'Enter' && updateTaskName(event.target)} bind:value={task.name}/>
  {/if}

  </div>
  

<style>
  .task {
    display: grid;
    grid-template-columns: repeat(12, 35px);
    grid-template-rows: 40px;
    align-items:center;
  }

  .checkbox {
    grid-column: 1/2;
  }

  .taskName.isCompleted {
    text-decoration-line: line-through;
  }

  .taskName {
    grid-column: 2/11;
    font-size: 14px;
    overflow-x: hidden;
    white-space: nowrap;
    margin-left:10px;
  }

  .taskNameInput {
    grid-column:2/13;
    font-size: 14px;
    margin-left:10px;
  }

  .updateButton {
    grid-column:11;
    margin:0;
    padding:0;
  }

  .deleteButton {
    grid-column: 12;
    margin:0;
    padding:0;
  }
</style>
