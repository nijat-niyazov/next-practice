
const RightPage = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return <div className="w-full h-full bg-green-600">RightPage</div>;
};

export default RightPage;
