require("./plugins");

testsContext = require.context(".", true, /(^.*.js$)/);
testsContext.keys().forEach(testsContext);