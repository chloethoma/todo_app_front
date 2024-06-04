<script>
    export let task;

    let isCompleted;
    if (task.status === "notCompleted") {
        isCompleted = false;
    } else {
        isCompleted = true;
    }

</script>

<div class="task">
    <input type="checkbox" bind:checked={isCompleted} on:click={() => isCompleted = !isCompleted} />
    <div class="taskName" class:isCompleted>{task.name}</div>
    <button>X</button>
</div>

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

