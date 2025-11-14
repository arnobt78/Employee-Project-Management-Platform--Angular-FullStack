const fs = require("fs");
const path = require("path");

const envProdPath = path.resolve(
  __dirname,
  "../src/environments/environment.prod.ts"
);

const content = `export const environment = {
  production: true,
  demoLogin: {
    username: '${process.env.NG_APP_DEMO_USERNAME || "admin"}',
    password: '${process.env.NG_APP_DEMO_PASSWORD || "112233"}',
  },
  api: {
    baseUrl: '${
      process.env.NG_APP_API_BASE_URL || "/api/employee-management/"
    }',
  },
};
`;

fs.writeFileSync(envProdPath, content, { encoding: "utf8" });
console.log("Generated environment.prod.ts");
