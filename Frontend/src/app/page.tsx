import type { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import MyComponent from "./Dashboard";
import HabitList from "./HabitList";
import LoginForm from "./LoginForm"; // Add this line at the top of your file
import NavBar from "./Navbar";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const HomePage: NextPageWithLayout = () => {
  return (
    <div>
      <NavBar /> {/* Add this line */}
      <MyComponent />
      <HabitList />
    </div>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <div>{page}</div>;
};

export default HomePage;
