export const ENVFILTERS = {
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
  HARDINESS: {
    type: "RANGE",
    options: [],
    selected: [],
  },
  SEARCH: {
    type: "TEXT",
    selected: "",
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