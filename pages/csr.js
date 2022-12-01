// client side rendered
import { useEffect, useState } from 'react';

export default function ClientSideRendered() {
  const [state, setState] = useState([]);

  async function getData() {
    const res = await fetch('https://6388341ed94a7e50409552be.mockapi.io/experimental/users');
    const users = await res.json();
    setState(users);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {state.map((e) => (
        <h2 key={e.id}>{e.name}</h2>
      ))}
    </>
  );
}
