import { MutatingDots } from 'react-loader-spinner';
export default function Loader() {
  return (
    <MutatingDots
      height="100"
      width="100"
      color="#4d6aa9"
      secondaryColor="#4d6aa9"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{
        dispay: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      wrapperClass=""
      visible={true}
    />
  );
}
