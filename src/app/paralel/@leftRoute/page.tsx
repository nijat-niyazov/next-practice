
const LeftPage = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return <div className="w-full h-full bg-blue-600">LeftPage</div>;
};

export default LeftPage;
