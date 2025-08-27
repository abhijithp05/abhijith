import { Layout } from "@/components/layout";
import { Suspense, useEffect } from "react";
import { getCount } from "@/utility/getCount";
import {
  employeeRoleConst,
  employeeStatusConst,
} from "@/constants/appConstants";
import { useAppContext } from "@/context/AppContext";
import { Loader } from "@/components/ui";
import { useTheme } from "@/context/ThemeContext";

const HomeScreen = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <div
          className={`min-h-screen ${theme === "light" ? "bg-light-bg text-light-text" : "bg-dark-bg text-dark-text"} transition-all`}
        >
          <main className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold mb-4">
              Welcome to Theme Switcher
            </h1>
            <p className="mb-8 text-xl">
              This is a simple Next.js app with TailwindCSS and theme switching.
            </p>
            <button
              onClick={toggleTheme}
              className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-white"
            >
              {theme === "light" ? "🌙 Dark Mode" : "🌞 Light Mode"}
            </button>
          </main>
        </div>
      </Suspense>
    </Layout>
  );
};

export default HomeScreen;
