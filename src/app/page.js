import styles from "./page.module.css";
import { API_BASE_URL } from "@/config/constants";
// npm run build and npm start karne par ye develoment mode me on ho jayega

export default function Home() {
  // console.log(process.env);
  console.log(process.env.NODE_ENV); // development
  // console.log() production mode me work nhi karta hai to ham isse vha par check kaise karenge
  // to check we can ad condition

  console.log(process.env.SERVER_PASSWORD); // admin@123
  return (
    <main className={styles.main}>
      <div>
        {process.env.NODE_ENV == "development" ? (
          <h1>Your are on development mode</h1>
        ) : (
          <h1>Your are on production mode</h1>
        )}
        <h1>Environment Variables in Next js</h1>
        <h1>{API_BASE_URL}</h1>
      </div>
    </main>
  );
}
