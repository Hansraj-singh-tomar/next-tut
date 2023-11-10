import { redirect } from "next/navigation";
export default function Page() {
  redirect("/"); // jaise hi ham http://localhost:3000/user url ko access karenge to ye hame home page par redirect kar dega
  return (
    <div>
      <h1>user page</h1>
    </div>
  );
}
