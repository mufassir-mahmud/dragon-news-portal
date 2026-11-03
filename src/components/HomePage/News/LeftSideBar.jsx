"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LeftSideBar = ({ newsCatagories = [] }) => {
  const pathname = usePathname();

  return (
    <div>
      <h2 className="font-semibold text-center mb-3">
        All Categories
      </h2>

      <ul className="flex flex-col gap-4 w-8/12 mx-auto">
        {newsCatagories.map((category) => {
          const categoryPath = `/catagory/${category.category_id}`;
          const isActive = pathname === categoryPath;

          return (
            <li key={category.category_id}>
              <Link
                href={categoryPath}
                className={`btn w-full ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                {category.category_name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSideBar;