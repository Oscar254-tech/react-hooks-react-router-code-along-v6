import { useRouteError } from "react-router-dom";
import NewBar from "../components/NewBar";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <header>
        <NewBar />
      </header>
      <main>
        <h1>Whoops! Something went wrong!</h1>
      </main>
    </>
  );
}

export default ErrorPage;  // ← Make sure this line exists!