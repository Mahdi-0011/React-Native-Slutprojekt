import React from "react";
import { Text, View } from "react-native";
import Layout from "../Layout/Layout";
import MovieSearchScreen from "../Servies/Searchapi";

function Searchpage() {
  return (
    <>
      <Layout>
          <MovieSearchScreen />
      </Layout>
    </>
  );
}

export default Searchpage;
