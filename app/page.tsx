import PostsList from "@/components/PostsList/PostsList";
import RandomTip from "@/components/RandomTip/RandomTip";
export const revalidate = 86400; //once a day

export const metadata = {
  title: "Flow & Focus - Daily Routines and Time Management Tips",
  description: "Flow & Focus is a blog dedicated to building better daily habits, mastering time management, and creating routines that support productivity and well-being.",
  googleSiteVerification: "TfZD_m9CgF1hb_SL83YnfKBx01he8y1UKVj2Lq_lLtI",
  openGraph: {
    title: "Flow & Focus - Daily Routines and Time Management Tips",
    description: "Discover practical strategies for managing your time, staying focused, and designing daily routines that work for your lifestyle. Tips, reflections, and real-life inspiration.",
    images: [
      {
        url: "https://www.miss-loba.cz/og-image.webp", //přepsat
        alt: "Flow & Focus blog illustration"
      }
    ]
  }
};

export default async function HomePage() {
  return (
    <>
      <RandomTip />
      <PostsList />
    </>
  );
}