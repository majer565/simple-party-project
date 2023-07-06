import Layout from "@/components/Layout";
import Panel from "@/components/panelimprezy/Panel";
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
      <Panel />
    </Layout>
  );
}
