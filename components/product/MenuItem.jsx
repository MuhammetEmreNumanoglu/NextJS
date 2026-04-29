import Image from "next/image";
import { RiShoppingCart2Fill } from "react-icons/ri";

const MenuItem = ({ img, title, desc, price }) => {
  return (
    <div className="bg-secondary rounded-3xl overflow-hidden group hover:shadow-xl transition-all duration-300">
      
      {/* IMAGE AREA */}
      <div className="w-full bg-[#f1f2f3] h-[210px] grid place-content-center rounded-bl-[46px] rounded-tl-2xl rounded-tr-2xl overflow-hidden">
        <div className="relative w-[350px] h-[500px]  transition-transform duration-300 group-hover:scale-110">
          <Image
            src={img}
            alt={title}
            fill
            sizes="(max-width: 768px) 150px, 200px"
            className="object-contain"
            priority={false}
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6 text-white flex flex-col gap-3">
        <h4 className="text-xl font-semibold tracking-wide">
          {title}
        </h4>

        <p className="text-sm text-gray-300 line-clamp-3">
          {desc}
        </p>

        <div className="flex justify-between items-center mt-3">
          <span className="text-lg font-bold">
            ${price}
          </span>

          <button
            aria-label="Add to cart"
            className="btn-primary !w-10 !h-10 !rounded-full !p-0 grid place-content-center hover:scale-110 transition-all duration-200"
          >
            <RiShoppingCart2Fill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;