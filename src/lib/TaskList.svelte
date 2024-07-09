<script>
    import Task from './Task.svelte';
    import {tasks} from './taskStore';

</script>

{#each $tasks as task (task.id)}
<div class='wrapper'> 
    <Task {task} on:updateStatus on:updateTaskName on:delete/>
</div>
{/each}

<style>
    .wrapper {
        margin:10px;
    }
</style>
