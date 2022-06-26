import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";
const Repos = () => {
  const { userRepos } = useGlobalContext();

  const chartData = [
    {
      label: "HTML",
      value: "13",
    },
    {
      label: "CSS",
      value: "160",
    },
    {
      label: "Javascript",
      value: "80",
    },
  ];

  const helperSort = (data, property) => {
    return Object.values(data)
      .sort((a, b) => b[`${property}`] - a[`${property}`])
      .slice(0, 5);
  };

  const languages = userRepos.reduce((total, repo) => {
    const { language, stargazers_count } = repo;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1, start: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        start: total[language].start + stargazers_count,
      };
    }
    return total;
  }, {});

  let { starts, forks } = userRepos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item;
      total.starts[stargazers_count] = { label: name, value: stargazers_count };
      total.forks[forks] = { label: name, value: forks };
      return total;
    },
    { starts: {}, forks: {} }
  );

  starts = Object.values(starts).slice(-5).reverse();
  forks = Object.values(forks).slice(-5).reverse();

  const mostPopularLanguages = helperSort(languages, "value");

  const startLanguages = helperSort(languages, "start").map((language) => {
    return { label: language.label, value: language.start };
  });

  return (
    <section className="section">
      <Wrapper className="section=center">
        <Pie3D data={mostPopularLanguages} />
        <Column3D data={starts} />
        <Doughnut2D data={startLanguages} />
        <Bar3D data={forks} />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  column-gap: 3.2rem;
  row-gap: 3.2rem;

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
