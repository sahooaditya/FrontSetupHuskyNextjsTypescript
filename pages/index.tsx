import HomePage from "@/components/frontend/HomePage/HomePage";
import Layout from "@/components/frontend/Layout";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

const Index: NextPage = () => {
    return (
        <Layout>
            <NextSeo
                title="Aditya"
                description="QS ImpACT supports global citizens who contribute to achieving SDGs through their work with communities, local and global. Share your impact with us and gain access to life-changing opportunities."
                canonical={process.env.NEXT_PUBLIC_SITE_URL}
            />
            <div>
                <HomePage />
            </div>
        </Layout>
    );
};
export default dynamic(() => Promise.resolve(Index), { ssr: false });
