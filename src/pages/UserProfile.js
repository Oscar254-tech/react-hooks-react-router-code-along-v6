import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewBar from "../components/NewBar";

function UserProfile() {
  const [user, setUser] = useState({});
  const params = useParams();
  const userId = params.id;

  useEffect(() =>{
    fetch(`http://localhost:4000/users/${userId}`)
    .then(r => r.json())
    .then(data => setUser(data))
    .catch(error => console.error(error));
  }, [userId]);

  if(!user.name){
    return <h1>Loading...</h1>;
  };

  return(
    <>
      <header>
        <NewBar />
      </header>
      <main>
        <h1>{user.name}</h1>
      </main>
    </>
  );
}

export default UserProfile;  // ← Make sure this line exists!