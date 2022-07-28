import { FallingLines } from 'react-loader-spinner';
const Loader = () => {
  return (
    <FallingLines
      color="#4d55a9"
      width="100"
      visible={true}
      ariaLabel="falling-lines-loading"
    />
  );
};
export { Loader };
