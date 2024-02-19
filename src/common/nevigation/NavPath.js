

export class NavPath {
  static ContactRoute = "/contact";
  static AboutRoute = "/about";
  static ProductRoute = "/product";
  static HomeRoute = "/";
  static NotFound = "/not-found";
  static Quality = "/quality";
  static ProducDetailtRoute = (param) => `/product/${param}`;

  static getProductNames() {
    return {
      automotiveParts: { name: "Automotive Parts", value: "automotive-parts" },
      cableGlands: { name: "Cable Glands", value: "cable-glands" },
      earthingLightening: {
        name: "Earthing Lightening",
        value: "earthing-lightening",
      },
      fasteners: { name: "fasteners", value: "fasteners" },
      hydraulicPneumaticFittings: {
        name: "Hydraulic Pneumatic Fittings",
        value: "hydraulic-pneumatic-fittings",
      },
      measuringInstrumentsSensors: {
        name: "Measuring Instruments Sensors",
        value: "measuring-instruments-sensors",
      },
      mouldingInserts: { name: "Moulding Inserts", value: "moulding-inserts" },
      neutralBarBlocks: {
        name: "Neutral Bar Blocks",
        value: "neutral-bar-blocks",
      },
      oilGas: { name: "oilGas", value: "oil-gas" },
      sanitaryPlumbingFittings: {
        name: "Sanitary Plumbing Fittings",
        value: "sanitary-plumbing-fittings",
      },
    };
  }
}




