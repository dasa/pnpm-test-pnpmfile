export const hooks = {
  updateConfig(config) {
    console.log("updateConfig called");
    return Object.assign(config, {
      enablePrePostScripts: false,
      optimisticRepeatInstall: true,
      resolutionMode: "lowest-direct",
      verifyDepsBeforeRun: "install",
    });
  },
};
