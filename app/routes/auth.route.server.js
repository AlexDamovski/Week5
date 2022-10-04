import { Router } from "express";

const router = Router();


//Display login Page
router.get('/login', DisplayLoginPage);

//Display Registration page
router.get('/register', DisplayRegisterPage);


//Process Login page
router.post('/login', ProcessLoginPage);

//Process Registration Page
router.post('/register', ProcessRegisterPage);

//Process Logout page
router.get('/logout', DisplayLogoutPage);

export default router;