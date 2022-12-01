
export default function ServerSideRendered({ users }) {
  return (
    <>
      {users.map((e) => (
        <h2 key={e.id}>{e.name}</h2>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://6388341ed94a7e50409552be.mockapi.io/experimental/users');
  const users = await res.json();

  return {
    props: {
      users, // will be passed to the page component as props
    },
  };
}
