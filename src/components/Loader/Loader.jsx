import {Audio} from "react-loader-spinner"

export const Loader = () => {
  return (
<Audio
  height="100"
  width="100"
  color="rgb(61, 62, 48);"
  ariaLabel="audio-loading"
  wrapperStyle={{}}
  wrapperClass="wrapper-class"
  visible={true}
/>
  );
};