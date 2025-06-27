import { getDoc, doc } from "firebase/firestore";
import Image from "next/image";
import CommentSection from "@/components/CommentSection/CommentSection";
import { db } from "@/firebase/config";

async function getPostBySlug(slug: string) {
  const docRef = doc(db, "posts", slug);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("Dokument nenalezen");
    return null;
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }) {  const { slug } = await params;
  const article = await getPostBySlug(slug);

  if (!article) {
    return {
      title: "Článek nenalezen",
      description: "Tento článek neexistuje.",
    };
  }

  const description = article.description || article.content.substring(0, 150) + "...";

  return {
    title: article.title,
    description,
    openGraph: {
      type: "article",
      url: `https://www.miss-loba.cz/clanky/${slug}`,
      title: article.title,
      description,
      images: [
        {
          url: article.imgURL,
          alt: article.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description,
      images: [article.imgURL]
    }
  }
}

export default async function PostPage({ params }: {params: {slug: string}}) {
  const { slug } = await params;
  const article = await getPostBySlug(slug);
  if (!article) {
    return <div>Článek nebyl nalezen</div>;
  }

  return <>
    <article className="p-4 lg:rounded-lg lg:mt-6 lg:w-[850px] mx-auto bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-900">{article.title}</h2>
      <p className="text-md text-gray-400 mb-5">{article.date} {article.author}</p>
      <Image className="mx-auto rounded-lg" src={article.imgURL} width={850} height={850} alt="" priority />
      <div className="blog-content max-w-prose mx-auto" dangerouslySetInnerHTML={{ __html: article.content }}></div>
    </article>
    <CommentSection slug={slug} />
  </>
}
