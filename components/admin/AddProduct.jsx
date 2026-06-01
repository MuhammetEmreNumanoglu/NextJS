import React, { useEffect, useState } from "react";
import Image from "next/image";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import { GiCancel } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";

const AddProduct = ({ setIsProductModal }) => {
  const [file, setFile] = useState(null);
  const [imageSrc, setImageSrc] = useState("");

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("pizza");
  const [prices, setPrices] = useState([]);

  const [extra, setExtra] = useState({
    text: "",
    price: "",
  });

  const [extraOptions, setExtraOptions] = useState([]);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/categories`,
        );

        setCategories(res.data);
      } catch {
        return;
      }
    };

    getCategories();
  }, []);

  const handleExtra = () => {
    if (extra.text && extra.price) {
      setExtraOptions((prev) => [...prev, extra]);

      setExtra({
        text: "",
        price: "",
      });
    }
  };

  const handleOnChange = (e) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) return;

    setFile(selectedFile);

    const reader = new FileReader();

    reader.onload = (event) => {
      if (event.target?.result) {
        setImageSrc(event.target.result);
      }
    };

    reader.readAsDataURL(selectedFile);
  };

  const changePrice = (e, index) => {
    const currentPrices = [...prices];

    currentPrices[index] = Number(e.target.value);

    setPrices(currentPrices);
  };

  const handleCreate = async () => {
    if (!file) {
      toast.error("Please select an image");
      return;
    }

    const data = new FormData();

    data.append("file", file);
    data.append("upload_preset", "food-ordering");

    try {
      const uploadRes = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY}/image/upload`,
        data,
      );

      const { url } = uploadRes.data;

      const newProduct = {
        img: url,
        title,
        desc,
        category: category.toLowerCase(),
        prices,
        extraOptions,
      };

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/products`,
        newProduct,
      );

      if (res.status === 201) {
        toast.success("Product created successfully!");
        setIsProductModal(false);
      }
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 after:content-[''] after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:left-0 after:opacity-60 grid place-content-center">
      <OutsideClickHandler onOutsideClick={() => setIsProductModal(false)}>
        <div className="w-full h-full grid place-content-center relative">
          <div className="relative z-50 md:w-[600px] w-[370px] bg-white border-2 p-10 rounded-3xl">
            <Title addClass="text-[40px] text-center">Add a New Product</Title>

            <div className="flex flex-col text-sm mt-6">
              <label className="flex gap-2 items-center">
                <input
                  type="file"
                  onChange={handleOnChange}
                  className="hidden"
                />

                <button
                  type="button"
                  className="btn-primary !rounded-none !bg-blue-600 pointer-events-none"
                >
                  Choose an Image
                </button>

                {imageSrc && (
                  <Image
                    src={imageSrc}
                    alt="preview"
                    width={48}
                    height={48}
                    unoptimized
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
              </label>
            </div>

            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-[2px]">Title</span>

              <input
                type="text"
                className="border-2 p-1 text-sm px-1 outline-none"
                placeholder="Write a title..."
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-[2px]">Description</span>

              <textarea
                className="border-2 p-1 text-sm px-1 outline-none"
                placeholder="Write a description..."
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>

            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-[2px]">Select Category</span>

              <select
                className="border-2 p-1 text-sm px-1 outline-none"
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option
                    value={category.title.toLowerCase()}
                    key={category._id}
                  >
                    {category.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col text-sm mt-4 w-full">
              <span className="font-semibold mb-[2px]">Prices</span>

              {category === "pizza" ? (
                <div className="flex justify-between gap-6 w-full md:flex-nowrap flex-wrap">
                  <input
                    type="number"
                    className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36"
                    placeholder="small"
                    onChange={(e) => changePrice(e, 0)}
                  />

                  <input
                    type="number"
                    className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36"
                    placeholder="medium"
                    onChange={(e) => changePrice(e, 1)}
                  />

                  <input
                    type="number"
                    className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36"
                    placeholder="large"
                    onChange={(e) => changePrice(e, 2)}
                  />
                </div>
              ) : (
                <input
                  type="number"
                  className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36"
                  placeholder="price"
                  onChange={(e) => changePrice(e, 0)}
                />
              )}
            </div>

            <div className="flex flex-col text-sm mt-4 w-full">
              <span className="font-semibold mb-[2px]">Extra</span>

              <div className="flex gap-6 w-full md:flex-nowrap flex-wrap">
                <input
                  type="text"
                  className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36"
                  placeholder="item"
                  name="text"
                  value={extra.text}
                  onChange={(e) =>
                    setExtra({
                      ...extra,
                      [e.target.name]: e.target.value,
                    })
                  }
                />

                <input
                  type="number"
                  className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36"
                  placeholder="price"
                  name="price"
                  value={extra.price}
                  onChange={(e) =>
                    setExtra({
                      ...extra,
                      [e.target.name]: e.target.value,
                    })
                  }
                />

                <button
                  type="button"
                  className="btn-primary ml-auto"
                  onClick={handleExtra}
                >
                  Add
                </button>
              </div>

              <div className="mt-2 flex gap-2 flex-wrap">
                {extraOptions.map((item, index) => (
                  <span
                    key={index}
                    className="inline-block border border-orange-500 text-orange-500 p-1 rounded-xl text-xs cursor-pointer"
                    onClick={() =>
                      setExtraOptions(
                        extraOptions.filter((_, i) => i !== index),
                      )
                    }
                  >
                    {item.text}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                className="btn-primary !bg-success"
                onClick={handleCreate}
              >
                Create
              </button>
            </div>

            <button
              className="absolute top-4 right-4"
              onClick={() => setIsProductModal(false)}
            >
              <GiCancel size={25} />
            </button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default AddProduct;
