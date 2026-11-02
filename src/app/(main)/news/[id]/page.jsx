import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";


const NewsDetailsPage = async({params}) => {
   const {id} = await params;
   const newsDetails = await getNewsDetailsById(id);
   console.log(newsDetails)
   const {title,author,image_url,details} = newsDetails 
   return (
        <div>
            <h2  className="text-2xl">This is NewsDetails</h2>
             <div className="card bg-base-100  shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    
  </div>
  <figure>
    <Image src={image_url} alt="news" width={300} height={300} className="w-full"></Image>
  </figure>
  <p className="truncate">{details}</p>
  <Link href={`/catagory/${newsDetails.category_id}`}>
  <button className="btn btn-primary">See All News From Thid Category</button>
  </Link>
</div>
        </div>
    );
};

export default NewsDetailsPage;