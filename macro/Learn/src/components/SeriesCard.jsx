import styles from "./Netflix.module.css";
import styled from "styled-components";

const SeriesCard = ({ data }) => {
  const { img_url, name, rating, description, cast, genre, watch_url } = data;

  // const Button = styled.button({
  //   padding: "1.2rem 2.4rem",
  //   border: "none",
  //   backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
  //   color: "var(--btn-color)",
  //   fontWeight: "bold",
  //   cursor: "pointer",
  // });

  const btn_style = {
    padding: "1.2rem 2.4rem",
    border: "none",
    backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    color: "var(--btn-color)",
    fontWeight: "bold",
    cursor: "pointer",
  }

  const Rating = styled.h3({
    fontSize: "1.6rem",
    color: "#7dcea0",
    textTransform: "capitalize",
  });

  const ratingClass = rating >= 8.5 ? styles["super-hit"] : styles.average;

  return (
    <li className={styles.card}>
      <div>
        <img src={img_url} alt={`${name}`} />
      </div>
      <div className="flex flex-col gap-6 py-6 px-6">
        <h2>Name: {name}</h2>
        <h3>
          <Rating>
            Rating:
            <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
          </Rating>
        </h3>
        <p className="text-3xl font-bold underline">Summary: {description}</p>
        <p>Genre: {genre.join(",")}</p>
        <p>Cast: {cast.join(",")}</p>
        <div></div>
        <div></div>
        <a href={watch_url} target="_blank">
          <button style={btn_style}>Watch Now</button>
          {/* <Button rating={rating}>Watch Now</Button> */}
        </a>
      </div>
    </li>
  );
};

export default SeriesCard;
