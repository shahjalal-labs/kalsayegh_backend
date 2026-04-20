import multer from "multer";

const storage = multer.memoryStorage();

const ALLOWED_MIME_TYPES = new Set([
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
  "image/webp",
  "video/mpeg",
  "video/mp4",
  "video/quicktime",
  "video/x-matroska",
  "audio/mpeg",
  "audio/mp3",
  "audio/m4a",
  "audio/mp4",
  "video/m4a",
  "application/zip",
  "application/x-zip-compressed",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const upload = multer({
  storage: storage,
  limits: { fileSize: 3000 * 1024 * 1024 }, // 3000 MB limit
  fileFilter: (_req, file, cb) => {
    const mimeType = (file.mimetype || "").toLowerCase().trim();

    if (!ALLOWED_MIME_TYPES.has(mimeType)) {
      return cb(
        new Error(`File type not allowed: ${mimeType}`) as unknown as null,
        false,
      );
    }
    cb(null, true);
  },
});

// upload single image
const profileImage = upload.single("profileImage");
const coverPhoto = upload.single("coverPhoto");
const groupPhoto = upload.single("groupPhoto");

// upload multiple image
const uploadMultiple = upload.fields([
  { name: "classVideo", maxCount: 1 },
  { name: "urls", maxCount: 10 },
  { name: "map", maxCount: 1 },
  { name: "jobRequestsImage", maxCount: 5 },
  { name: "todolistImages", maxCount: 10 },
]);

export const fileUploader = {
  upload,
  uploadMultiple,
  groupPhoto,
  profileImage,
  coverPhoto,
};
