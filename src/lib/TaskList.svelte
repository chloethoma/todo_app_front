<script>
    import Task from './Task.svelte';
    import {tasks} from './taskStore';

</script>

{#each $tasks as task (task.id)}
    <Task {task} on:updateStatus on:delete/>
{/each}

