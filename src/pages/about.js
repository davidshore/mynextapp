import { useEffect, useState } from "react";

export default function About() {
  const [username, setUsername] = useState("");

  function getHello() {
    fetch("http://localhost:3000/api/hello")
      .then((response) => response.json())
      .then((data) => setUsername(data.name));
  }

  useEffect(() => {
    getHello();
  }, []);

  return (
    <div className="flex min-h-screen">
      <h1>Username: {username}</h1>
    </div>
  );
}
