import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
// import { configure } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";

// configure({ adapter: new Adapter() });
// global.fetch = require("jest-fetch-mock");

export default {
  moduleDirectories: ["node_modules", "<rootDir>"],
  testEnvironment: "jsdom",
  transform: {
    transform: {
      "^.+\\.ts?$": "ts-jest",
      "^.+\\.(js|jsx)$": "babel-jest",
    },
      "^.+\\.(ts|tsx)?$": "ts-jest",
      "\\.(js|jsx)?$": "babel-jest",
      ".+\\.(png|jpg|svg|ttf|woff|woff2)$": "jest-transform-stub",
  },
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/jest.setup.ts",
    },
  },
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.js",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

