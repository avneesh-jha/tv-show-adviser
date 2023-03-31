import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";

export function FiveStarRating({ rating }) {
  //declare star icon array
  const starList = [];
  //store number of filled star
  const starFilledCount = Math.floor(rating);
  //store if a half star is there in yes or no
  const hasHalfStar = rating - parseInt(rating) >= 0.5;
  // store the empty stars
  const emptyStars = 5 - starFilledCount - (hasHalfStar ? 1 : 0);
  //pushed the filled stars
  for (let i = 1; i <= starFilledCount; i++) {
    starList.push(<StarFill key={"star-fill" + i} />);
  }
  if (hasHalfStar) {
    starList.push(<StarHalf key="star-half" />);
  }

  for (let i = 1; i <= emptyStars; i++) {
    starList.push(<StarEmpty key={"star-empty" + i} />);
  }

  return <div>{starList}</div>;
}
