// eslint-disable-next-line import/named
import rn from "random-number";
import { LACES, TEXTURES, TYPES } from "../../constants/admin/types";

export const initType = (product) => {
  if (!product || product === {}) return TYPES[0];
  return TYPES.find((t) => t.value === product.type) || TYPES[0];
};

export const initLaces = (product) => {
  if (!product || product === {}) return [LACES[0]];
  return LACES.filter((l) => Object.keys(product.laces).includes(l.value));
};

export const initTextures = (product) => {
  if (!product || product === {}) return [TEXTURES[0]];
  return TEXTURES.filter((t) =>
    Object.keys(product.textures).includes(t.value)
  );
};

export const initPricing = (product) => {
  const initialPricing = {};
  if (!product || product === {}) return initialPricing;
  // eslint-disable-next-line no-unused-expressions
  !!product.pricing && product.laces.length === 0
    ? Object.keys(product.pricing).forEach((k) => {
        initialPricing[k] = Object.keys(product.pricing[k]).map((l) => ({
          id: rn(),
          length: l,
          price: product.pricing[k][l],
        }));
      })
    : Object.keys(product.pricing).forEach((k) => {
        Object.keys(product.pricing[k]).forEach((t) => {
          if (!initialPricing[k]) initialPricing[k] = {};
          initialPricing[k][t] = Object.keys(product.pricing[k][t]).map(
            (l) => ({
              id: rn(),
              length: l,
              price: product.pricing[k][t][l],
            })
          );
        });
      });

  return initialPricing;
};
