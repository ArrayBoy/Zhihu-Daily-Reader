﻿import { Router } from "express";

const router = Router();
const daily = require(__base + "/controllers/proxy/daily");
const apis = [
    "/before",
    "/top",
];

apis.forEach((api) =>
{
    router.use(api, require("." + api));
});

// get specified story.
router.get("/:id", (req, res, next) =>
{
    daily.getStory(req.params.id, res, next);
});

export default router;
