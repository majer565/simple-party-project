import FourthPage from "@/components/fourth/FourthPage";
import Layout from "@/components/Layout";
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
      <FourthPage />
    </Layout>
  );
}
