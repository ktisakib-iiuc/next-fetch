async function getData() {
  const res = await fetch('https://6388341ed94a7e50409552be.mockapi.io/experimental/users', {cache: 'no-cache'});
  return res.json();
}

export default async function Page() {
  const users = await getData();
  return(
    <>
    {users.map((e)=> <h1 key={e.id}>{e.name}</h1>)}    
    </>
  )
  // ...
}