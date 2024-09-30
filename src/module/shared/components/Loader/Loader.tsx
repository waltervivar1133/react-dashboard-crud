import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <TailSpin
      visible={true}
      height="80"
      width="80"
      color="#0d6efd"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      ariaLabel="tail-spin-loading"
    />
  );
};

export default Loader;
