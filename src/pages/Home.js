import { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
import NewBar from "../components/NewBar";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:4000/users")
      .then(r => r.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error));
  }, []);

  const userList = users.map(user =>{
    return <UserCard key={user.id} user={user}/>;
  });

  return (
    <>
      <header>
        <NewBar />
      </header>
      <main>
        <h1>Home!</h1>
        {userList}
      </main>
    </>
  );
}

export default Home;  // ← Make sure this line exists!