import React from "react";
import { useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Error() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="text-center">
      <NavBar />
      <h1 className="m-4">An unexpected error has occurred.</h1>
      <h4>
        Error:{" "}
        <code>
          {error.status} {error.statusText || error.message}
        </code>
        .
      </h4>
    </div>
  );
}
