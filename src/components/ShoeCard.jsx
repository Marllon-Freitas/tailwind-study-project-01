const ShoeCard = ({ imgURL, changeShowImage, currentImageURL }) => {
  const handleClick = () => {
    if (currentImageURL !== imgURL.bigShoe) {
      changeShowImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        currentImageURL === imgURL.bigShoe
          ? 'border-coral-red'
          : 'border-transparent'
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-cover sm:w-40 h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="Shoe Collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
