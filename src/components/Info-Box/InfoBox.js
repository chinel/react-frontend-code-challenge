import React from "react";
import useStyles from "./InfoBoxStyles";
import InfoItem from "../InfoItem/InfoItem";
import { useQuery } from "@apollo/client";
import { GET_METRICS } from "../../graphql-endpoint/queries";
import { LoadingProgress } from "..";

function InfoBox() {
  const classes = useStyles();
  const { data, loading, error } = useQuery(GET_METRICS);

  if (loading) {
    return <LoadingProgress />;
  }

  if (error) return <div>Error fetching Metrics</div>;
  return (
    <div className={classes.cardContainer}>
      {data.metric.map((metric, index) => (
        <InfoItem title={metric.title} key={metric.id} total={metric.total} />
      ))}
    </div>
  );
}

export default InfoBox;
