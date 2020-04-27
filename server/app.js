import Koa from "koa";
import routes from "./router";
import fs from "fs";
import path from "path";
import { Provider } from "react-redux";
// import createStore from "../app/redux/store/create";
import templating from "./templating";

const app = new Koa();
app.use(templating);
app.use(routes.routes(), routes.allowedMethods());

app.listen(9000, () => {
  console.log(`node服务已经启动, 请访问localhost:9000`);
});
