import Featured from "@/components/featured/Featured";
import styles from "./homepage.module.css"
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "Homepage | Discover Kashmir",
  description : "Homepage of Discover Kashmir, an app made with next.js to showcase kashmir's beauty to the whole world."
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
      <Suspense fallback = {<Loading />}>
        <CardList />
      </Suspense>
        <Menu />
      </div>
    </div>
  );
}