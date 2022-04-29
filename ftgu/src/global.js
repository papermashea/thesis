export const FILTERS = {
  SUN: {
    type: "MULTI_SELECT",
    options: [],
    selected: [],
  },
  HARDINESS: {
    type: "RANGE",
    options: [],
    selected: [],
  },
};

export const PARAMS = {
  SORT: {
    id: "SORT",
    type: "SINGLE_SELECT",
    options: [
      {
        label: "Plant name",
        value: "latinname",
      },
      {
        label: "Hardiness",
        value: "hardiness",
      },
    ],
    selected: "hardiness",
    asc: false,
  },
};