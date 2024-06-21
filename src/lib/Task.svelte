<script>
  export let task;

  let isCompleted;
  if (task.status !== "notCompleted") isCompleted = true;
  
  const updateTask = async () => {
	isCompleted = !isCompleted;
	let status;
	isCompleted == true ? status="completed" : status="notCompleted";

	const data = {
		"name":task.name,
		"status":status
	}

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/tasks/${task.id}`,
        {
          method: "PUT",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const resultat = await response.json();
      console.log("reussite", resultat);
    } catch (error) {
      console.error("Erreur", error);
    }
  };

</script>

<div class="task">
  <input
    type="checkbox" bind:checked={isCompleted} on:click={updateTask}/>
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
