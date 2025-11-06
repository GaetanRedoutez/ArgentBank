import { useRouteError, Link } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError();

  const status = error?.status;
  const message =
    error?.statusText ||
    error?.message ||
    "Une erreur inattendue s'est produite";

  return (
    <div style={{ margin: "auto", textAlign: "center" }}>
      <h1>{status ? `Erreur ${status}` : "Une erreur est survenue"}</h1>
      <p>{message}</p>
    </div>
  );
}
