import express from "express";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.post("/test-upload", upload.single("resume"), (req, res) => {
  return res.status(200).json({
    success: true,
    message: "File received successfully",
    file: {
      originalName: req.file.originalname,
      size: req.file.size,
      type: req.file.mimetype,
    },
  });
});

export default router;