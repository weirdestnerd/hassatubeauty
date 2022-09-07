import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { TrashIcon } from "@heroicons/react/outline";
import { RadioGroup } from "@headlessui/react";
import rn from "random-number";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/solid";
import SideNav from "./SideNav";
import ListboxSelect from "./ListboxSelect";
import Divider from "../common/Divider";
import LoadingOverlay from "../loading/LoadingOverlay";
import { useSignedInUser } from "../../hooks/UserHook";
import {
  DEFAULT_DETAILS,
  DEFAULT_FEATURES,
  LACES,
  TEXTURES,
  TYPES,
} from "../../constants/admin/types";
import { productType as ProductType } from "../../proptypes/productType";
import {
  addInventoryProduct,
  deleteInventoryProduct,
  liveGallery,
  updateInventoryProduct,
} from "../../firebase";
import RollbarError from "../../helpers/Rollbar";
import Notification from "../alerts/Notification";
import {
  initLaces,
  initPricing,
  initTextures,
  initType,
} from "../../helpers/admin/ProductInit";
import ProductImages from "./ProductImages";

const showOnSiteOptions = [
  { name: "Show on site", description: "Show this product to customers" },
  { name: "Hide on site", description: "Hide this product from customers" },
];

function AdminProduct({ isEdit, product }) {
  const [productType, setProductType] = useState(initType(product));
  const [productName, setProductName] = useState(
    (!!product && product.name) || ""
  );
  const [productDesc, setProductDesc] = useState(
    (!!product && product.description) || ""
  );
  const [laces, setLaces] = useState(initLaces(product));
  const [textures, setTextures] = useState(initTextures(product));

  const [pricing, setPricing] = useState(initPricing(product));
  const [images, setImages] = useState((!!product && product.images) || {});
  const [pricingLace, setPricingLace] = useState(
    laces.length !== 0 ? laces[0] : null
  );
  const [pricingTexture, setPricingTexture] = useState(
    textures.length !== 0 ? textures[0] : null
  );
  const [imagesTexture, setImagesTexture] = useState(
    textures.length !== 0 ? textures[0] : null
  );
  const [showOnSite, setShowOnSite] = useState(
    !!product && product.show ? showOnSiteOptions[0] : showOnSiteOptions[1]
  );
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const [details, setDetails] = useState(
    (!!product && product.details) || DEFAULT_DETAILS
  );
  const [features, setFeatures] = useState(
    (!!product && product.features) || DEFAULT_FEATURES
  );
  const [quickDesc, setQuickDesc] = useState(
    (!!product && product.quickDescription) || ""
  );
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    setLoading(true);

    liveGallery((querySnapshot) => {
      setGallery([]);
      querySnapshot.forEach((doc) => {
        setGallery((currentPhotos) =>
          currentPhotos.concat([{ ...doc.data(), id: doc.id, uploaded: true }])
        );
      });
    });

    setLoading(false);
  }, []);

  const navigate = useNavigate();
  const user = useSignedInUser();
  if (!user)
    navigate(
      `/sign-in?redirect=/admin/${
        isEdit ? `${product.type}/${product.id}` : "products/new"
      }`
    );

  if (
    user &&
    !["odgbadebo@gmail.com", "dhassatu75@gmail.com"].includes(user.email)
  )
    navigate("/404");

  const noLace = () => laces.length === 0;

  const availableLengths = (nPrices) => {
    const lengths = [
      "10",
      "12",
      "14",
      "16",
      "18",
      "20",
      "22",
      "24",
      "26",
      "28",
      "30",
    ];
    const selectedLengths = nPrices.map((e) => e.length);
    return lengths
      .filter((l) => !selectedLengths.includes(l))
      .map((l, i) => ({
        id: i,
        value: l,
      }));
  };

  const asProduct = () => {
    const convertLaces = () => {
      const r = {};
      // eslint-disable-next-line no-return-assign
      laces.forEach((l) => (r[l.value] = l.label));
      return r;
    };

    const convertPricing = () => {
      const r = {};
      // eslint-disable-next-line no-unused-expressions
      noLace()
        ? Object.keys(pricing).forEach((k) => {
            const rr = {};
            // eslint-disable-next-line no-return-assign
            pricing[k].forEach((p) => (rr[p.length] = p.price));
            r[k] = rr;
          })
        : Object.keys(pricing).forEach((k) => {
            Object.keys(pricing[k]).forEach((t) => {
              const rr = {};
              // eslint-disable-next-line no-return-assign
              pricing[k][t].forEach((p) => (rr[p.length] = p.price));
              // eslint-disable-next-line no-unused-expressions
              r[k] ? (r[k][t] = rr) : (r[k] = { [`${t}`]: rr });
            });
          });

      return r;
    };

    const convertTextures = () => {
      const r = {};
      // eslint-disable-next-line no-return-assign
      textures.forEach((t) => (r[t.value] = t.label));
      return r;
    };

    const key = productName
      .split(" ")
      .map((k) => k.toLocaleLowerCase())
      .join("-");

    return {
      ...product,
      type: productType.value,
      name: productName || "Product Name",
      description:
        productDesc ||
        "The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.",
      laces: convertLaces(),
      show: showOnSite === showOnSiteOptions[0],
      href: `/shop/${productType.value}/${key}`,
      pricing: convertPricing(),
      textures: convertTextures(),
      key,
      images,
      details,
      features,
      quickDescription: quickDesc,
    };
  };

  const saveProduct = () => {
    setLoading(true);
    const data = asProduct();
    let actions;

    if (!!product && product.type !== data.type) {
      actions = [deleteInventoryProduct(data.id, product.type)];
      delete data.id;
      actions.push(addInventoryProduct(data));
    } else {
      actions = isEdit
        ? [updateInventoryProduct(product, data)]
        : [addInventoryProduct(data)];
    }

    Promise.all(actions)
      .then(() => navigate("/admin?showProductActionToast=true"))
      .catch((error) => {
        RollbarError(error);
        setToast({
          message: "Something went wrong.",
          description: "Let Olu know!!!",
          type: "danger",
        });
      })
      .finally(() => setLoading(false));
  };

  const updateDetailName = (name, ind) => {
    const u = { ...details[ind] };
    u.name = name;
    setDetails(details.slice(0, ind).concat([u], details.slice(ind + 1)));
  };

  const updateDetailItem = (item, ind, inde) => {
    const u = { ...details[ind] };
    u.items[inde] = item;
    setDetails(details.slice(0, ind).concat([u], details.slice(ind + 1)));
  };

  const deleteDetailItem = (ind, inde) => {
    const u = { ...details[ind] };
    u.items.splice(inde, 1);
    setDetails(details.slice(0, ind).concat([u], details.slice(ind + 1)));
  };

  const addDetailItem = (ind) => {
    const u = { ...details[ind] };
    u.items.push("");
    setDetails(details.slice(0, ind).concat([u], details.slice(ind + 1)));
  };

  const deleteDetail = (ind) => {
    setDetails(details.slice(0, ind).concat(details.slice(ind + 1)));
  };

  const addDetail = () => {
    setDetails([...details, { name: "", items: [""] }]);
  };

  const updateFeatureName = (name, ind) => {
    const u = { ...features[ind] };
    u.name = name;
    setFeatures(features.slice(0, ind).concat([u], features.slice(ind + 1)));
  };

  const deleteFeature = (ind) => {
    setFeatures(features.slice(0, ind).concat(features.slice(ind + 1)));
  };

  const addFeature = () => {
    setFeatures([...features, { name: "", desc: "" }]);
  };

  const updateFeatureDesc = (desc, ind) => {
    const u = { ...features[ind] };
    u.name = desc;
    setFeatures(features.slice(0, ind).concat([u], features.slice(ind + 1)));
  };

  const renderPricingRow = (
    prices,
    eachPrice,
    pTexture,
    pLace,
    ind,
    editable
  ) => {
    const priceLength = () =>
      eachPrice ? eachPrice.length : availableLengths(prices)[0].value;

    const update = (nPrices) => {
      const nPricing = { ...pricing };
      if (noLace()) nPricing[pTexture] = nPrices;
      else {
        if (!nPricing[pLace]) nPricing[pLace] = {};
        nPricing[pLace][pTexture] = nPrices;
      }
      setPricing({ ...pricing, ...nPricing });
    };

    return (
      <div
        className="w-full flex mt-10 items-stretch gap-1"
        key={priceLength()}
      >
        <div
          className={classNames("self-stretch", {
            "basis-64": !editable,
            "basis-full": editable,
            "opacity-50": !editable,
          })}
        >
          <ListboxSelect
            values={availableLengths(prices)}
            setSelectedValue={(data) => {
              prices.push({ length: data.value, price: 0 });
              update(prices);
            }}
            selectedValue={{
              id: rn(),
              value: priceLength(),
            }}
            label={editable ? "Add length" : "Length"}
            disabled={!editable}
          />
        </div>
        <div
          className={classNames("self-stretch", {
            "basis-64": !editable,
            hidden: editable,
          })}
        >
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                name="price"
                id="price"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder="0.00"
                aria-describedby="price-currency"
                value={eachPrice ? eachPrice.price : ""}
                onChange={(e) => {
                  let index = 0;
                  prices.forEach((p, i) => {
                    const l = eachPrice ? eachPrice.length : priceLength();
                    index = p.length === l ? i : index;
                  });
                  // eslint-disable-next-line no-param-reassign
                  prices[index].price = e.target.value;
                  update(prices);
                }}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm" id="price-currency">
                  USD
                </span>
              </div>
            </div>
          </label>
        </div>
        <div
          className={classNames("mt-auto self-stretch", {
            "basis-1/6": !editable,
            hidden: editable,
          })}
        >
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => {
              prices.splice(ind, 1);
              update(prices);
            }}
          >
            <TrashIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    );
  };

  const renderPricingSection = () => {
    if (textures.length === 0) return null;
    const pLace = (!!pricingLace && pricingLace.value) || null;
    const pTexture = pricingTexture.value || null;
    if (!pLace && !pTexture) return null;
    const prices =
      // eslint-disable-next-line no-nested-ternary
      (noLace()
        ? pricing[pTexture]
        : pricing[pLace]
        ? pricing[pLace][pTexture]
        : []) || [];
    const rows = prices.map((eachPrice, i) =>
      renderPricingRow(prices, eachPrice, pTexture, pLace, i, false)
    );

    return (
      <>
        {rows}
        {availableLengths(prices).length !== 0 &&
          renderPricingRow(prices, null, pTexture, pLace, 0, true)}
      </>
    );
  };

  return (
    <div className="min-h-full">
      {loading && <LoadingOverlay />}
      {toast && (
        <Notification
          onClose={() => setToast(null)}
          message={toast.message || ""}
          description={toast.description || ""}
          type={toast.type || ""}
        />
      )}

      <SideNav activeNav="Inventory" />

      <main className="max-w-lg mx-auto pt-10 pb-12 px-4 lg:pb-16">
        <div className="space-y-6">
          <div>
            <h1 className="text-lg leading-6 font-medium text-gray-900">
              {isEdit ? "Edit" : "Add new product"}
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              {isEdit ? "Make changes to the product" : "Create a new product"}
            </p>
          </div>

          <ListboxSelect
            values={TYPES}
            setSelectedValue={setProductType}
            selectedValue={productType}
            label="Type"
          />

          <Divider />

          {/* Product name */}
          <div>
            <label
              htmlFor="project-name"
              className="block text-sm font-medium text-gray-700"
            >
              Product Name
              <div className="mt-1">
                <input
                  type="text"
                  name="project-name"
                  id="project-name"
                  className="block w-full shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm border-gray-300 rounded-md"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>
            </label>
          </div>

          <Divider />

          {/* Product Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
              <div className="mt-1">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  className="block w-full shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm border border-gray-300 rounded-md"
                  value={productDesc}
                  onChange={(e) => setProductDesc(e.target.value)}
                />
              </div>
            </label>
          </div>

          <Divider />

          <ListboxSelect
            selectedValue={textures}
            label="Textures"
            values={TEXTURES}
            setSelectedValue={setTextures}
            truncate={false}
            multiple
          />

          <Divider />

          <ListboxSelect
            selectedValue={laces}
            label="Laces"
            values={LACES}
            setSelectedValue={setLaces}
            multiple
          />

          <Divider />

          <div>
            <p className="block text-sm font-medium text-gray-700">Pricing</p>
          </div>
          <div className="grid gap-1 grid-cols-2">
            <div className="grid-col-2">
              {laces.length === 0 ? (
                <div className="block text-sm font-medium text-gray-700">
                  Lace
                  <p className="py-3 pl-4">No lace</p>
                </div>
              ) : (
                <ListboxSelect
                  values={laces}
                  setSelectedValue={setPricingLace}
                  selectedValue={pricingLace}
                  label="Lace"
                />
              )}
            </div>
            <div className="grid-col-2">
              {textures.length === 0 ? (
                <div className="block text-sm font-medium text-gray-700">
                  Texture
                  <p className="py-3 pl-4">Select textures above</p>
                </div>
              ) : (
                <ListboxSelect
                  values={textures}
                  setSelectedValue={setPricingTexture}
                  selectedValue={pricingTexture}
                  label="Texture"
                />
              )}
            </div>
          </div>

          {renderPricingSection()}

          <Divider />

          {/* Image section */}
          <div>
            <p className="block text-sm font-medium text-gray-700">Images</p>
          </div>
          <div className="w-full flex mt-10 items-stretch gap-1">
            <div className="basis-full self-stretch">
              {textures.length === 0 ? (
                <div className="block text-sm font-medium text-gray-700">
                  Texture
                  <p className="py-3 pl-4">
                    Select textures above to add images
                  </p>
                </div>
              ) : (
                <ListboxSelect
                  values={textures}
                  setSelectedValue={setImagesTexture}
                  selectedValue={imagesTexture}
                  label="Texture"
                />
              )}
            </div>
          </div>
          {imagesTexture && (
            <ProductImages
              setImages={setImages}
              imagesTexture={imagesTexture}
              images={images}
              gallery={gallery}
            />
          )}

          <Divider />

          <div>
            <p className="block text-sm font-medium text-gray-700">
              Product details
            </p>
          </div>
          {details.map((d, ind) => {
            return (
              <div className="space-y-2" key={rn()}>
                <div className="flex items-stretch gap-1">
                  <label
                    htmlFor={d.name}
                    className="basis-full block text-sm font-medium text-gray-700"
                  >
                    Name
                    <div className="mt-1">
                      <input
                        type="text"
                        name={d.name}
                        id={d.name}
                        className="block w-full shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm border-gray-300 rounded-md"
                        value={d.name}
                        onChange={(e) => updateDetailName(e.target.value, ind)}
                      />
                    </div>
                  </label>
                  <div className="mt-auto basis-1/6 self-stretch">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => deleteDetail(ind)}
                    >
                      <TrashIcon
                        className="-ml-0.5 mr-2 h-4 w-4"
                        aria-hidden="true"
                      />
                      Remove
                    </button>
                  </div>
                </div>
                <div>
                  <p className="block text-sm font-medium text-gray-700">
                    Details
                  </p>
                </div>
                {d.items.map((item, inde) => {
                  return (
                    <div className="flex items-stretch gap-1">
                      <label
                        htmlFor={item}
                        className="block text-sm font-medium text-gray-700 basis-full self-stretch"
                      >
                        <div className="mt-1">
                          <input
                            type="text"
                            name={item}
                            id={item}
                            className="block w-full shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm border-gray-300 rounded-md"
                            value={item}
                            onChange={(e) =>
                              updateDetailItem(e.target.value, ind, inde)
                            }
                          />
                        </div>
                      </label>
                      <div className="mt-auto basis-1/6 self-stretch">
                        <button
                          type="button"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          onClick={() => deleteDetailItem(ind, inde)}
                        >
                          <TrashIcon
                            className="-ml-0.5 mr-2 h-4 w-4"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </div>
                  );
                })}
                <div className="flex items-stretch">
                  <button
                    type="button"
                    className="basis-full inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => addDetailItem(ind)}
                  >
                    <PlusIcon
                      className="-ml-0.5 mr-2 h-4 w-4"
                      aria-hidden="true"
                    />
                    Add row
                  </button>
                </div>
              </div>
            );
          })}
          <div className="flex basis-full self-stretch">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={addDetail}
            >
              <PlusIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
              Add Detail
            </button>
          </div>

          <Divider />

          <div>
            <p className="block text-sm font-medium text-gray-700">
              Product features
            </p>
          </div>
          {features.map((f, ind) => {
            return (
              <div className="space-y-2">
                <div className="flex items-stretch gap-1">
                  <label
                    htmlFor={f.name}
                    className="basis-full block text-sm font-medium text-gray-700"
                  >
                    Name
                    <div className="mt-1">
                      <input
                        type="text"
                        name={f.name}
                        id={f.name}
                        className="block w-full shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm border-gray-300 rounded-md"
                        value={f.name}
                        onChange={(e) => updateFeatureName(e.target.value, ind)}
                      />
                    </div>
                  </label>
                  <div className="mt-auto basis-1/6 self-stretch">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => deleteFeature(ind)}
                    >
                      <TrashIcon
                        className="-ml-0.5 mr-2 h-4 w-4"
                        aria-hidden="true"
                      />
                      Remove
                    </button>
                  </div>
                </div>
                <label
                  htmlFor={f.name}
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                  <div className="mt-1">
                    <input
                      type="text"
                      name={f.description}
                      id={f.description}
                      className="block w-full shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm border-gray-300 rounded-md"
                      value={f.description}
                      onChange={(e) => updateFeatureDesc(e.target.value, ind)}
                    />
                  </div>
                </label>
              </div>
            );
          })}
          <div className="flex basis-full self-stretch">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={addFeature}
            >
              <PlusIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
              Add Feature
            </button>
          </div>

          <Divider />

          <div>
            <label
              htmlFor="project-name"
              className="block text-sm font-medium text-gray-700"
            >
              Product quick description
              <div className="mt-1">
                <input
                  type="text"
                  name="project-quick-desc"
                  id="project-quick-desc"
                  className="block w-full shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm border-gray-300 rounded-md"
                  value={quickDesc}
                  onChange={(e) => setQuickDesc(e.target.value)}
                />
              </div>
            </label>
          </div>

          <Divider />

          <RadioGroup
            value={showOnSite.name}
            onChange={(value) =>
              setShowOnSite(showOnSiteOptions.find((v) => v.name === value))
            }
          >
            <RadioGroup.Label className="sr-only">Available?</RadioGroup.Label>
            <div className="bg-white rounded-md -space-y-px">
              {showOnSiteOptions.map((eachOption, settingIdx) => (
                <RadioGroup.Option
                  key={eachOption.name}
                  value={eachOption.name}
                  className={({ checked }) =>
                    classNames(
                      settingIdx === 0 ? "rounded-tl-md rounded-tr-md" : "",
                      settingIdx === showOnSiteOptions.length - 1
                        ? "rounded-bl-md rounded-br-md"
                        : "",
                      checked
                        ? "bg-indigo-50 border-indigo-200 z-10"
                        : "border-gray-200",
                      "relative border p-4 flex cursor-pointer focus:outline-none"
                    )
                  }
                >
                  {({ active, checked }) => (
                    <>
                      <span
                        className={classNames(
                          checked
                            ? "bg-indigo-600 border-transparent"
                            : "bg-white border-gray-300",
                          active ? "ring-2 ring-offset-2 ring-indigo-500" : "",
                          "h-4 w-4 mt-0.5 cursor-pointer shrink-0 rounded-full border flex items-center justify-center"
                        )}
                        aria-hidden="true"
                      >
                        <span className="rounded-full bg-white w-1.5 h-1.5" />
                      </span>
                      <span className="ml-3 flex flex-col">
                        <RadioGroup.Label
                          as="span"
                          className={classNames(
                            checked ? "text-indigo-900" : "text-gray-900",
                            "block text-sm font-medium"
                          )}
                        >
                          {eachOption.name}
                        </RadioGroup.Label>
                        <RadioGroup.Description
                          as="span"
                          className={classNames(
                            checked ? "text-indigo-700" : "text-gray-500",
                            "block text-sm"
                          )}
                        >
                          {eachOption.description}
                        </RadioGroup.Description>
                      </span>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>

          <Divider />

          <div className="flex justify-end">
            <button
              type="button"
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              onClick={() => navigate("/admin")}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              onClick={saveProduct}
            >
              {isEdit ? "Save" : "Add"}
            </button>
          </div>

          <Divider />
        </div>
      </main>
    </div>
  );
}

AdminProduct.propTypes = {
  isEdit: PropTypes.bool,
  product: ProductType,
};

AdminProduct.defaultProps = {
  isEdit: true,
  product: {},
};

export default AdminProduct;
