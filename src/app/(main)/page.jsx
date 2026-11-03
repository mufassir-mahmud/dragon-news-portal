import LeftSideBar from "@/components/HomePage/News/LeftSideBar";
import RightSideBar from "@/components/HomePage/News/RightSideBar";
import { getCatagories, newsCastagoriesById } from "@/lib/data";

const NewsPage = async () => {
  let newsCatagories = [];
  let news = [];

  try {
    const catagories = await getCatagories();

    newsCatagories = catagories?.news_category || [];

    news = await newsCastagoriesById({
      categoryId: "03",
    });
  } catch (error) {
    console.error("News Page Error:", error);
  }

  return (
    <div className="grid grid-cols-12 gap-4 my-6">
      <div className="col-span-3">
        <LeftSideBar newsCatagories={newsCatagories} />
      </div>

      <div className="col-span-6 bg-amber-700">
        <h2>All News</h2>
      </div>

      <div className="col-span-3">
        <RightSideBar />
      </div>
    </div>
  );
};

export default NewsPage;