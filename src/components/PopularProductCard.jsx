import { star } from '../assets/icons';

const PopularProductCard = ({ product }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:full">
      <img
        src={product.imgURL}
        alt={product.name}
        className="w-[280px] h-[280px]"
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          ({product.rating.toFixed(1)})
        </p>
      </div>

      <h3 className="mt-2 text-2xl font-palanquin font-semibold leading-normal">
        {product.name}
      </h3>
      <p className="mt-2 text-2lx font-montserrat leading-normal">
        {product.price}
      </p>
    </div>
  );
};

export default PopularProductCard;
