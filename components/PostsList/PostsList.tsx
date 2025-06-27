import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";
import PostCard from "../PostCard/PostCard";

async function getArticles(): Promise<Article[]> {
  const collectionReference = collection(db, "posts");
  const collectionSnapshot = await getDocs(collectionReference);

  return collectionSnapshot.docs.map((doc) => {
    const data = doc.data() as Article;
    return {
      id: doc.id,
      ...data,
    };
  });
}

type Article = {
  id?: string;
  title: string;
  description: string;
  slug: string;
  imgURL: string;
  date: string;
};

export default async function PostsList() {
  const articles: Article[] = await getArticles();
  const sortedArticles = articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="flex flex-col items-center lg:items-start lg:justify-center lg:flex-row min-h-screen">
      <div className="w-fit ml-5 xl:ml-20 flex flex-col md:flex-row flex-nowrap md:flex-wrap items-center justify-center gap-3 mt-4">
        {articles.length > 0 ? (
          sortedArticles.map((article) => (
            <PostCard
              key={article.slug}
              title={article.title}
              description={article.description}
              slug={article.slug}
              img={article.imgURL}
            />
          ))
        ) : (
          <p>Žádné články k zobrazení.</p>
        )}
      </div>
    </div>
  );
}