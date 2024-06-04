<script>
    import Task from './Task.svelte'
    export let data;
</script>

{#each data as task}
    <Task {task}/>
{/each}

