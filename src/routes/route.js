const express = require('express');
const router = express.Router();
const AuthorController=require("../controller/authorController")
const BlogsController=require("../controller/blogController")
const Middleware=require("../middleware/authenticationAndAuthorisation")


//////////////////////////////////////////////////////////////////////////////////////////////////////////
//Phase1:
router.post("/authors",AuthorController.createAuthor )

router.post("/blogs",Middleware.authenticationUser, BlogsController.createBlogs )

router.get("/blogs",Middleware.authenticationUser, BlogsController.getBlogs)

router.put("/blogs/:blogId/:authorId",Middleware.authenticationUser, Middleware.authorisationUser, BlogsController.updateBlogs)

router.delete("/blogs/:blogId/:authorId",Middleware.authenticationUser, Middleware.authorisationUser, BlogsController.deleteBlogById)

router.delete("/blogs",Middleware.authenticationUser,BlogsController.deleteBlogByQueryParams)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Phase2:
router.post("/login", AuthorController.loginUser)

module.exports = router;
