export const getCatagories = async() =>{
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories',  {
      next: { revalidate: 3600 },
    });
     if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  const data = await res.json();
  return data.data
}

export const newsCastagoriesById = async({categoryId}) =>{
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`)
  const data = await res.json()
  return data.data
}
export const getNewsDetailsById = async(news_id) =>{
  const res = await fetch(`https://openapi.programming-hero.com/api/news/${news_id}`)
  const data = await res.json()
  return data.data[0]
}