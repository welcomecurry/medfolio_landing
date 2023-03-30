import { BoxesLoader } from "react-awesome-loaders";
export const BuildLoader = () => {
  return (
    <>
      <BoxesLoader
        boxColor={"#6366F1"}
        style={{ marginBottom: "20px" }}
        desktopSize={"128px"}
        mobileSize={"80px"}
      />
    </>
  );
};