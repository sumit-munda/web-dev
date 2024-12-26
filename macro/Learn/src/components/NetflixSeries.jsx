import seriesData from "../api/series-data.json";
import SeriesCard from "./SeriesCard.jsx";

const NetflixSeries = () => {
  return (
    <>
      <ul className="grid grid-three-cols">
        {seriesData.map((cur) => (
          <SeriesCard key={cur.id} data={cur} />
        ))}
      </ul>
    </>
  );
};

export default NetflixSeries;
