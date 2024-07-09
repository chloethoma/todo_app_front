<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const addNewTask = (input) => {
    const data = {
      name: input.value,
      status: 'notCompleted',
    };

    dispatch('newTask', { data:data });
    input.value = '';
  };
</script>

<div class='addTask'>
  <input on:keydown={(event) => event.key === 'Enter' && addNewTask(event.target)} placeholder='Add to-do and press Enter' />
</div>

<style>
  .addTask {
    display: grid;
    grid-template-columns: 1fr;
    margin-top:10px;
  }

  input {
    font-size:14px;
    height:30px;
  }

</style>


