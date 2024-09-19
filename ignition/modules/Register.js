const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const RegisterDisasterModule = buildModule("RegisterDisasterModule", (m) => {
  // ใช้สัญญา PersonalInfo แทน Token
  const RegisterDisaster = m.contract("RegisterDisaster");

  return { RegisterDisaster };
});

module.exports = RegisterDisasterModule;
