import Link from "next/link";

const Clients = () => {
  const clients = [
    { id: "billy", name: "Billy" },
    { id: "peter", name: "Peter" },
  ];
  return (
    <div>
      <h1>Clients</h1>
      <ul>
        {clients.map((client, index) => (
          <li key={index}>
            <Link href={`/clients/${client.id}`}>
              <a>{client.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clients;
