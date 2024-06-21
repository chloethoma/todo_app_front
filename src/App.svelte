<script>
import Header from './lib/Header.svelte'
import TaskList from './lib/TaskList.svelte';

const getTaskList = async () => {
  const res = await fetch('http://127.0.0.1:8000/api/tasks');
  const data = await res.json();
  return data;
}

</script>

<Header />

{#await getTaskList()}
  <p>Loading...</p>  
{:then data}
  <TaskList {data}/>
{/await} 


