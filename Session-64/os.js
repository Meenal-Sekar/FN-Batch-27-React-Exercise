const os = require("os");

console.log("User system platform", os.platform());
console.log("OS Type", os.type());
console.log("OS Release", os.release());
console.log("OS Version", os.version());
console.log("Architecture", os.arch());

console.log("Total Memory", (os.totalmem() / (1024 ** 3)).toFixed(2));
console.log("Current Free Memory", (os.freemem() / (1024 ** 3)).toFixed(2));

console.log("Display uptime", (os.uptime() / 3600).toFixed(2));

console.log("Network", os.networkInterfaces());
