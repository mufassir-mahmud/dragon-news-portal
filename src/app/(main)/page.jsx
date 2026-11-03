import LeftSideBar from "@/components/HomePage/News/LeftSideBar";
import RightSideBar from "@/components/HomePage/News/RightSideBar";
import { getCatagories, newsCastagoriesById } from "@/lib/data";



const NewsPage = async() => {
  const catagories = await getCatagories();
  const newsCatagories = catagories.news_category
  console.log(newsCatagories)
  const news = await newsCastagoriesById({categoryId : "03"});
  console.log(news)
  return (
   <div className="grid grid-cols-12 gap-4 my-6">
      <div className="col-span-3 ">
        <LeftSideBar  newsCatagories={newsCatagories}></LeftSideBar>
        </div>
      <div className="col-span-6 bg-amber-700"><h2>All News</h2></div>
      <div className="col-span-3 ">
        <RightSideBar></RightSideBar>
      </div>
   </div>
  );
}
export default NewsPage;