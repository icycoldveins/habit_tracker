// Frontend/src/app/page.tsx
"use client";
// Frontend/src/app/page.tsx
import type { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { AuthModalProvider } from "./AuthModalcontext";
import MyComponent from "./Dashboard";
import HabitList from "./HabitList";
import NavBar from "./Navbar";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const HomePage: NextPageWithLayout = () => {
  return (
    <div>
    <AuthModalProvider>

      <NavBar />
      <MyComponent />
      <HabitList />
      </AuthModalProvider>

    </div>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <div>{page}</div>;
};

export default HomePage;
