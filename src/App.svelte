<script>
  import Header from "./lib/Header.svelte";
  import TaskList from "./lib/TaskList.svelte";

  const getTaskList = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/tasks");
    const data = await res.json();
    return data;
  };

  const updateTask = async (event) => {
    try {
      await fetch(
        `http://127.0.0.1:8000/api/tasks/${event.detail.id}`,
        {
          method: "PUT",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(event.detail.data),
        }
      );

    } catch (error) {
      console.error("Erreur sur la fonction updateTask", error);
    }
  };

  const deleteTask = async (event) => {
    try {
      await fetch(
        `http://127.0.0.1:8000/api/tasks/${event.detail.id}`,
        {
          method: "DELETE",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

    } catch (error) {
      console.error("Erreur sur la fonction deleteTask", error);
    }
  };
</script>

<Header />

{#await getTaskList()}
  <p>Loading...</p>
{:then data}
  <TaskList {data} on:update={updateTask} on:delete={deleteTask} />
{/await}
