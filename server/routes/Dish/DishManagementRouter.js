import { Router } from "express";
import { DishUpload } from "../../controllers/Dish/DishUploadController.js";
import { DishExists } from "../../controllers/Dish/DishExistsController.js";
import { GetMenuItems } from "../../controllers/Dish/GetMenuItemsController.js";
import { DeleteDish } from "../../controllers/Dish/DishDeleteController.js";

const router = Router();

router.post("/dishUpload",DishUpload);
router.post("/dishExists",DishExists);
router.delete("/deleteDish",DeleteDish);
router.get("/getMenuItems",GetMenuItems);

export default router ;