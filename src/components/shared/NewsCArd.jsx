import Image from "next/image";
import Link from "next/link";


const NewsCArd = ({news}) => {
    const {title,author,image_url,details} = news
    return (
        <div className="card bg-base-100  shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    
  </div>
  <figure>
    <Image src={image_url} alt="news" width={300} height={300} className="w-full"></Image>
  </figure>
  <p className="truncate">{details}</p>
  <Link href={`/news/${news._id}`}>
  <button className="btn btn-primary">See Details</button>
  </Link>
</div>
    );
};

export default NewsCArd;