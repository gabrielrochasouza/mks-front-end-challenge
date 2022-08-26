import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { CardContainer } from "../card/style";

const CardSkeleton = () => {
  return (
    <CardContainer >
      <Skeleton height={"140px"} />
      <p >
        <Skeleton
          height={"20px"}
          width={"50%"}
          style={{ display: "inline-block" }}
        />
        <Skeleton
          height={"20px"}
          width={"30%"}
          style={{ display: "inline-block" }}
        />
      </p>
      <p>
        <Skeleton height={"10px"} count={23} />
      </p>

      <Skeleton height={"36px"} />
    </CardContainer>
  );
};

export default CardSkeleton;
