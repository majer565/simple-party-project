import Layout from "@/components/Layout";
import ThirdPage from "@/components/third/ThirdPage";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const isLogged = getCookie("loginValid");

  useEffect(() => {
    if (!isLogged) {
      router.push("/login");
    }
  }, []);

  return (
    <Layout>
      <ThirdPage />
    </Layout>
  );
}
