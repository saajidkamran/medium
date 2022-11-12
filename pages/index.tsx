import type { NextPage } from "next";
import Head from "next/head";
import { sanityClient } from "../sanity";
import Header from "../components/Header";
interface Props{
  post : [posts] // post[] 
}

const Home: NextPage = (props:Props) => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex justify-between items-center lg:bg-green-300 bg-yellow-300  border-black py-10 lg:py-0">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl max-w-xl font-serif">
            <span className="underline decoration-black decoration-4">
              Medium
            </span>{" "}
            is a place to write ,read , and connect
          </h1>
          <h2>
            {" "}
            It's easy and free to post your think here on a topic and connect
            with million readers 🖐{" "}
          </h2>
        </div>
        <div>
          <img
            className="hidden md:inline-flex h-32 lg:h-full "
            src=" https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/Medium-900x0.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    author->{
    name,
    image
  },
  description,
    slug,
  mainImage
  }`;
  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts,
    },
  };
};
