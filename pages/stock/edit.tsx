import { GetServerSideProps } from "next";
import React from "react";
import Layout from "../../components/layouts/layout";

type Props = {
  data: any[];
};

export default function StockEdit({ data }: Props) {
  return (
    <Layout>
      <h1>edit</h1>
      <span>{JSON.stringify(data)}</span>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: { data: [1, 2, 3, 4, parseInt(context.query.id.toString())] },
  };
};
