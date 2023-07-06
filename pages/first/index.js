import Layout from "@/components/Layout";
import FirstPage from "@/components/first/FirstPage";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
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
      <FirstPage />
    </Layout>
  );
}
