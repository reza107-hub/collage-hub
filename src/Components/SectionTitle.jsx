const SectionTitle = ({ heading, subheading }) => {
  return (
    <div className="text-center">
      <h1 className="text-main font-bold text-4xl">{heading}</h1>
      <p className="mt-5 text-gray-500">{subheading}</p>
    </div>
  );
};

export default SectionTitle;
