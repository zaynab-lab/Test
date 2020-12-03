import CategoryItems from "../components/CategoryItems";
import TopBar from "../components/TopBar";
import OrderBar from "../components/OrderBar";
import { atom, useSetRecoilState } from "recoil";
import { useEffect } from "react";

export const productsState = atom({
  key: "productsList",
  default: []
});
export const categoriesState = atom({
  key: "categoryList",
  default: []
});

export default function IndexPage({ categories }) {
  const setCategoryList = useSetRecoilState(categoriesState);
  useEffect(() => {
    setCategoryList(categories);
  }, [setCategoryList, categories]);
  return (
    <>
      <div className="container">
        <div className="page">
          <TopBar title="الفئات" cart={true} main={true} />
          <div className="content">
            <OrderBar />
            <CategoryItems categories={categories} />
          </div>
        </div>
      </div>

      <style jsx>{`
        .page {
          display: flex;
          flex-direction: column;
          height: 100vh;
          overflow: hidden;
        }

        .content {
          overflow: auto;
          height: calc(100vh - 3rem);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
      `}</style>
    </>
  );
}

export async function getStaticProps(ctx) {
  const res = await fetch("http://localhost:3000/api/categories");
  const resault = await res.json();
  return { props: { categories: resault.data } };
}
