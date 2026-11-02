import Marquee from "react-fast-marquee";


const BreakingNews = () => {
   const news = [
  {
    "id": 1,
    "title": "Breaking News: Bangladesh announces new economic development plans"
  },
  {
    "id": 2,
    "title": "Technology: AI innovations are transforming the digital world"
  },
  {
    "id": 3,
    "title": "Sports: Exciting matches bring thrilling moments for fans"
  },
  {
    "id": 4,
    "title": "World News: Global leaders meet to discuss major challenges"
  }
]
    return (
        <div className="flex justify-baseline gap-4 items-center bg-gray-200 py-4 px-2 container mx-auto">
            <button className="btn btn-error">Latest</button>
            <Marquee pauseOnHover={true}>
                {
                    news.map((n) =>( 
                        <span key={n.id} className="mx-8">{n.title}</span>
                    ))
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;