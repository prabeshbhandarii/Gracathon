import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/avatar");
  },
  filename: function (req, file, cb) {
    const prefix = Date.now() + "-"
    cb(null, prefix + file.originalname);
  },
});

export const upload = multer({ storage: storage });
