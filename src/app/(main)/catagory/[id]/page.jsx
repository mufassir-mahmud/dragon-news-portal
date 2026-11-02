import LeftSideBar from '@/components/HomePage/News/LeftSideBar';
import RightSideBar from '@/components/HomePage/News/RightSideBar';
import NewsCArd from '@/components/shared/NewsCArd';
import { getCatagories, newsCastagoriesById } from '@/lib/data';
import React from 'react';

const CatagoryPage = async({params}) => {
    const {id}= await params;
    console.log(id)
      const catagories = await getCatagories();
      const newsCatagories = catagories.news_category
      console.log(newsCatagories)
      const news = await newsCastagoriesById({categoryId : id});
      console.log(news)
    return (
        <div>
            <div className="grid grid-cols-12 gap-4 my-6">
      <div className="col-span-3 ">
        <LeftSideBar  newsCatagories={newsCatagories}></LeftSideBar>
        </div>
      <div className="col-span-6  space-y-4">
        <h2 className='text-2xl font-semibold text-center'> All News</h2>
        {news.length >0 ? news.map(n => <NewsCArd className='border-2 rounded-2xl space-y-4 p-4' key={n._id} news={n}></NewsCArd>) : <h2 >There is No News</h2>}
      </div>
      <div className="col-span-3 ">
        <RightSideBar></RightSideBar>
      </div>
   </div>
        </div>
    );
};

export default CatagoryPage;