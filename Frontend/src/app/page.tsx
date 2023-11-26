import type { ReactElement } from "react";
import NextPageWithLayout from "./_app";
import MyComponent from "./Dashboard";
import HabitList from "./HabitList";

const HomePage: NextPageWithLayout = () => {
  return (
    <div>
      <MyComponent />
      <HabitList />
    </div>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <div>{page}</div>;
};

export default HomePage;
