import { ColorRing } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperclassName="blocks-wrapper"
        colors={['#006877', 'black']}
      />
    </div>
  );
};

export default Spinner;
