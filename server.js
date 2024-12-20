import jsonServer from "json-server";
import express from "express";
import { getRegExp } from "korean-regexp";
import lodash from "lodash";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use("/images/basic", express.static("images/basic"));

server.use("/images/cooking", express.static("images/cooking"));

server.use(middlewares);

server.get("/searchRecipe", (req, res) => {
  const query = req.query.query;

  if (!query) {
    res.status(400).send({ error: "Query parameter 'query' is required" });
    return;
  }

  const sortBy = "NAME";
  const orderBy = "asc";
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const db = router.db;

  const reg = getRegExp(query, {
    initialSearch: true,
  });

  const data = db.get("basic").value();

  const filteredData = data.filter((item) => item.NAME.match(reg));

  const sortData = lodash.orderBy(filteredData, [sortBy], [orderBy]);

  const startIndex = (page - 1) * limit;
  const responseData = sortData.slice(startIndex, startIndex + limit);

  res.jsonp({
    total: sortData.length,
    page,
    limit,
    totalPages: Math.ceil(sortData.length / limit),
    data: responseData,
  });
});

server.get("/suggestRecipe", (req, res) => {
  const foodType = req.query.foodType;
  const db = router.db;

  const data = db.get("basic").value();

  let filteredData;

  switch (foodType) {
    case "all":
      filteredData = data;
      break;
    case "kor":
      filteredData = data.filter((item) => item.TYPE === "한식");
      break;
    case "chn":
      filteredData = data.filter((item) => item.TYPE === "중식");
      break;
    case "jpn":
      filteredData = data.filter((item) => item.TYPE === "일식");
      break;
    case "west":
      filteredData = data.filter((item) => item.TYPE === "양식");
      break;
    case "etc":
      filteredData = data.filter((item) => item.TYPE === "기타");
      break;
  }

  const randomIndex = Math.floor(Math.random() * filteredData.length);

  const responseData = filteredData[randomIndex];

  res.jsonp(responseData);
});

server.get("/recipeList", (req, res) => {
  const foodType = req.query.foodType;
  const db = router.db;

  const data = db.get("basic").value();

  let filteredData;

  switch (foodType) {
    case "all":
      filteredData = data;
      break;
    case "kor":
      filteredData = data.filter((item) => item.TYPE === "한식");
      break;
    case "chn":
      filteredData = data.filter((item) => item.TYPE === "중식");
      break;
    case "jpn":
      filteredData = data.filter((item) => item.TYPE === "일식");
      break;
    case "west":
      filteredData = data.filter((item) => item.TYPE === "양식");
      break;
    case "etc":
      filteredData = data.filter((item) => item.TYPE === "기타");
      break;
  }

  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;

  const startIndex = (page - 1) * limit;
  const responseData = filteredData.slice(startIndex, startIndex + limit);

  res.jsonp({
    total: filteredData.length,
    page,
    limit,
    totalPages: Math.ceil(filteredData.length / limit),
    data: responseData,
  });
});

server.get("/recipeDetail", (req, res) => {
  const id = parseInt(req.query.id, 10);
  const db = router.db;

  const basicData = db.get("basic").value();
  const ingredientsData = db.get("ingredients").value();
  const cookingData = db.get("cooking").value();

  const filteredBasicData = basicData.find((item) => item.RECIPE_ID === id);
  const filteredIngredientsData = ingredientsData.filter(
    (item) => item.RECIPE_ID === id
  );
  const filteredCookingData = cookingData.filter(
    (item) => item.RECIPE_ID === id
  );

  res.jsonp({
    basicData: filteredBasicData,
    ingredientsData: filteredIngredientsData,
    cookingData: filteredCookingData,
  });
});

server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running port:3000");
});
