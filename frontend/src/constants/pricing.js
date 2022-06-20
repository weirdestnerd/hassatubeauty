const pricingChart = {
  hairTextures: [
    {
      id: 1,
      inStock: true,
      key: "human-hair",
      name: "Human hair",
      description: "12A 1B# 100% HUMAN HAIR",
      popular: true,
    },
    {
      id: 2,
      inStock: true,
      key: "hd-closure",
      name: "HD Closure",
      description: "HD Closure/ fronatl",
      popular: false,
    },
    {
      id: 3,
      inStock: true,
      key: "hd-lace",
      name: "HD Lace",
      description: "613# HD LACE",
      popular: false,
    },
    {
      id: 4,
      inStock: true,
      key: "blonde",
      name: "Blonde",
      description: "12A BLONDE COLOR 613#",
      popular: false,
    },
  ],
  availableLengths: {
    "human-hair": [
      10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40,
    ],
    "hd-closure": [10, 12, 14, 16, 18, 20, 22],
    "hd-lace": [8, 10, 12, 14, 16, 18, 20, 22],
    blonde: [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
  },
};

export default pricingChart;
