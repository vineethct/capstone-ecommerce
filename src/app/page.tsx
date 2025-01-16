import HomeLanding from "./modules/landing";
import Recommendations from "./modules/recommendation";

export default function Home() {
  return (
    <main className="_container">
      {/* SECTION - 1 */}
      <HomeLanding />

      {/* SECTION - 2 */}
      <Recommendations />
    </main>
  );
}
