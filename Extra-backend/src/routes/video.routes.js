const router = require("express").Router();
const videoController = require("../controllers/video.controller");
const upload = require("../middlewares/multer.middleware");
const verifyJWT = require("../middlewares/auth.middleware");

//unprotected routes.
router.route("/get-videos").get(videoController.getAllVideos);

//protected routes.
router.route("/publish-video").post(
   verifyJWT,
   upload.fields([
      {
         name: "thumbnail",
         maxCount: 1,
      },
      {
         name: "video",
         maxCount: 1,
      },
   ]),
   videoController.publishAVideo
);

router.route("/get-video/:videoId").get(verifyJWT, videoController.getVideo);

router
   .route("/update-details/:videoId")
   .patch(verifyJWT, videoController.updateVideoDetails);

router
   .route("/update-thumbnail/:videoId")
   .patch(verifyJWT, upload.single("thumbnail"), videoController.updateVideoThumbnail);

router.route("/delete/:videoId").delete(verifyJWT, videoController.deleteVideo);

router.route(
   "/toggle-publish-status/:videoId",
   verifyJWT,
   videoController.togglePublishStatus
);

module.exports = router;
