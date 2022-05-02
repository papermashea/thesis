export const FILTERS = {
  SUN: {
    type: "MULTI_SELECT",
    options: [],
    selected: [],
  },
  SOIL: {
    type: "MULTI_SELECT",
    options: [],
    selected: [],
  },
  MOISTURE: {
    type: "MULTI_SELECT",
    options: [],
    selected: [],
  },
  PH: {
    type: "MULTI_SELECT",
    options: [],
    selected: [],
  },
  HARDINESSUSE: {
    type: "MULTI_SELECT",
    options: [],
    selected: [],
  },
  HARDINESS: {
    type: "RANGE",
    options: [],
    selected: [],
  },
  SEARCH: {
    type: "TEXT",
    selected: "",
  },
  GROUP: {
    type: "MULTI_SELECT",
    options: [],
    selected: [],
  },
  SIZE: {
    type: "MULTI_SELECT",
    options: [],
    selected: [],
  },
  GROWTH: {
    type: "MULTI_SELECT",
    options: [],
    selected: [],
  },
  PROP: {
    type: "MULTI_SELECT",
    options: [],
    selected: [],
  },
  SCENT: {
    type: "MULTI_SELECT",
    options: [],
    selected: [],
  },
  POLLINATORS: {
    type: "MULTI_SELECT",
    options: [],
    selected: [],
  },

  // TOLERANCES: {
  //   type: "RANGE",
  //   options: [],
  //   selected: [],
  // },
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