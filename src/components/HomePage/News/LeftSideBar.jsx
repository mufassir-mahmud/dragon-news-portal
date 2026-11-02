'use client';
export const instant = false
import Link from "next/link";
import { Suspense, useState } from "react";

const LeftSideBar = ({ newsCatagories }) => {
    const [activeBtn, setActiveBtn] = useState(null)
    return (
    <div>
      <h2 className="font-semibold text-center mb-3">
        All Categories
      </h2>
        <Suspense fallback={<div>loading.......</div>}>
          <ul className="flex flex-col gap-4 w-8/12 mx-auto">
        {newsCatagories.map((category) => (
          <li className="" key={category.category_id}> <Link href={`/catagory/${category.category_id}`} className="block"><button onClick={() => setActiveBtn(category.category_id)} className={`btn w-full ${
                activeBtn === category.category_id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-black"
              }`}>{category.category_name}</button></Link> 
            
          </li>
        ))}
      </ul>  
        </Suspense>
      
    </div>
  );
};

export default LeftSideBar;