import { homeStaticProps } from "screens/home/serverData";

import React from "react";
import { Home } from "screens/home/home";



export async function getData() {
  const response = await homeStaticProps();

  return response.props;
}

export default async function Page() {

  const propsData = await getData();

  return <Home propsData={propsData.dataFromGraph}/>
}
