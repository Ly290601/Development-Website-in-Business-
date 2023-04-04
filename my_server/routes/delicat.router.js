const express = require('express');
const router = express.Router();
const Product = require('../models/Product')
const Category = require('../models/Category')
const User = require('../models/User')
const Admin = require('../models/Admin')
const Fgpw = require('../models/Fgpw')
const md5 = require('md5');
const Blog = require('../models/Blog');
const RegisEmail = require('../models/RegisEmail')
const Feedback = require('../models/Feedback');
const Cart = require('../models/Cart');
// get product
router.get('/products', async(req, res) => {
    Product.find({})
        .then(product => { res.json(product); })
        .catch(err => { res.json({ "Error": err.message }); })
})

router.get('/products/bestseller', async(req, res) => {
    Product.find({ "note": "bestseller" })
        .then(product => { res.json(product); })
        .catch(err => { res.json({ "Error": err.message }); })
})

router.get('/products/category/:id', async(req, res) => {
    Product.find({ "cadId": req.params.id })
        .then(product => { res.json(product); })
        .catch(err => { res.json({ "Error": err.message }); })
})

router.get('/products/bestseller', async(req, res) => {
    Product.find({ "note": "bestseller" })
        .then(product => { res.json(product); })
        .catch(err => { res.json({ "Error": err.message }); })
})


router.get('/products/:id', async(req, res) => {
    try {
        let productInfo = await Product.findById(req.params.id);
        res.json(productInfo)
    } catch (err) {
        res.json(err.message)
    }
})


// post product
router.post('/product', async(req, res) => {
    const product = new Product({
        id: req.body.id,
        name: req.body.name,
        icon_url: req.body.icon_url,
        url: req.body.url,
        price: req.body.price,
        category: req.body.category,
        note: req.body.note,
        cadId: req.body.cadId,
    })
    try {
        const saveProduct = product.save();
        res.json({ message: "success" })
    } catch (error) {
        res.json({ message: error.message })
    }
})

router.patch('/:id', async(req, res) => {
    try {
        await Product.findByIdAndUpdate(req.params.id, req.body)
        res.json({ message: 'success' })
    } catch (error) {
        res.json({ message: error.message })
    }
})


router.delete('/:id', async(req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        await Cart.findByIdAndDelete(req.params.id);
        res.json({ message: 'success' })
    } catch (error) {
        res.json({ message: error.message })
    }
})

// get category
router.get('/categories', async(req, res) => {
    Category.find({})
        .then(category => { res.json(category); })
        .catch(err => { res.json({ "Error": err.message }); })
})

// get cart
router.get('/carts', async(req, res) => {
    Cart.find({})
        .then(cart => { res.json(cart); })
        .catch(err => { res.json({ "Error": err.message }); })
})

router.get('/:ID', async(req, res) => {
    try {
        let data = await Product.findById(req.params.ID);
        res.json(data)
    } catch (err) {
        res.json({ "Error": err.message });
    }
});

router.delete("/:id", async(req, res) => {
    try {
        await Cart.findByIdAndDelete({ _id: req.params.id });
        res.json({ message: "success" })
    } catch (err) {
        res.json({ message: err.message });
    }
})


// get user
router.get('/users', async(req, res) => {
        User.find({})
            .then(user => { res.json(user); })
            .catch(err => { res.json({ "Error": err.message }); })
    })
    //regis
router.post('/regis', async(req, res, next) => {
    var userInfo = req.body;
    if (!userInfo.phone || !userInfo.pass) {
        res.send();
    } else {
        User.findOne({ phone: userInfo.phone }, function(err, data) {
            if (!data) {
                var c;
                User.findOne({}, function(err, data) {
                    if (data) {
                        console.log("if");
                        c = data.unique_id + 1;
                    } else {
                        c = 1;
                    }
                    var newUser = new User({
                        unique_id: c,
                        phone: userInfo.phone,
                        pass: md5(userInfo.pass),
                        username: userInfo.username,
                        address: userInfo.address,
                        useremail: userInfo.useremail
                    });

                    newUser.save(function(err, User) {
                        if (err)
                            console.log(err);
                        else
                            console.log('Success');
                    });

                }).sort({ _id: -1 }).limit(1);
                res.json({ message: "success" })
            } else {
                res.send({ "Success": "Phone number is already used." });
            }
        })
    }
    console.log();
})

// login user

router.post("/login", (req, res) => {
    var userInfo = req.body;
    User.findOne({ phone: userInfo.phone }, function(err, data) {
        if (data) {
            if (data.pass == md5(userInfo.pass)) {
                res.json({ message: "success" })
            } else {
                res.json({ message: "unsuccess" });
            }
        } else {
            res.json({ message: "fail" })
        }
    });
});

//get admin 
router.get('/admin', async(req, res) => {
        Admin.find({})
            .then(admin => { res.json(admin); })
            .catch(err => { res.json({ "Error": err.message }); })
    })
    // login admin

router.post("/login-admin", (req, res) => {
    var adminInfo = req.body;
    Admin.findOne({ email: adminInfo.email }, function(err, data) {
        if (data) {
            if (data.pass == md5(adminInfo.pass)) {
                res.json({ message: "success" })
            } else {
                res.json({ message: "unsuccess" });
            }
        } else {
            res.json({ message: "fail" })
        }
    });
});
//get phone 
router.get('/fgpw', async(req, res) => {
        Fgpw.find({})
            .then(fgpw => { res.json(fgpw); })
            .catch(err => { res.json({ "Error": err.message }); })
    })
    //post phone
router.post('/Fgpw', async(req, res, next) => {
        var userInfo = req.body;
        if (!userInfo.phone) {
            res.send();
        } else {
            Fgpw.findOne({ phone: userInfo.phone }, function(err, data) {
                if (!data) {
                    var c;
                    Fgpw.findOne({}, function(err, data) {
                        if (data) {
                            console.log("if");
                            c = data.unique_id + 1;
                        } else {
                            c = 1;
                        }
                        var newPhone = new Fgpw({
                            unique_id: c,
                            phone: userInfo.phone,

                        });

                        newPhone.save(function(err, Fgpw) {
                            if (err)
                                console.log(err);
                            else
                                console.log('Success');
                        });

                    }).sort({ _id: -1 }).limit(1);
                    res.json({ message: "success" })
                } else {
                    res.json({ message: "fail" })

                }
            })
        }

    })
    //get email 
router.get('/regisEmail', async(req, res) => {
        RegisEmail.find({})
            .then(regisEmail => { res.json(regisEmail); })
            .catch(err => { res.json({ "Error": err.message }); })
    })
    //post email
router.post('/RegisEmail', async(req, res, next) => {
        var userInfo = req.body;
        if (!userInfo.useremail) {
            res.send();
        } else {
            RegisEmail.findOne({ useremail: userInfo.useremail }, function(err, data) {
                if (!data) {
                    var c;
                    RegisEmail.findOne({}, function(err, data) {
                        if (data) {
                            console.log("if");
                            c = data.unique_id + 1;
                        } else {
                            c = 1;
                        }
                        var newEmail = new RegisEmail({
                            unique_id: c,
                            useremail: userInfo.useremail,

                        });

                        newEmail.save(function(err, RegisEmail) {
                            if (err)
                                console.log(err);
                            else
                                console.log('Success');
                        });

                    }).sort({ _id: -1 }).limit(1);
                    res.json({ message: "success" })
                } else {
                    res.json({ message: "fail" })
                }
            })
        }

    })
    //get feedback
router.get('/feedback', async(req, res) => {
        Feedback.find({})
            .then(feedback => { res.json(feedback); })
            .catch(err => { res.json({ "Error": err.message }); })
    })
    //post feedback
router.post('/Feedback', async(req, res) => {
    const feedback = new Feedback({
        username: req.body.username,
        useremail: req.body.useremail,
        usermessage: req.body.usermessage,
    })
    try {
        const saveFeedback = feedback.save();
        res.json({ message: "success" })
    } catch (error) {
        res.json({ message: error.message })
    }
})

// get blog
router.get('/blogs', async(req, res) => {
    Blog.find({})
        .then(blog => { res.json(blog); })
        .catch(err => { res.json({ "Error": err.message }); })
})


router.get('/blogsID', async(req, res) => {
    try {
        let blog = await Blog.findById(req.params.blogID);
        res.json(blog);
    } catch (error) {
        res.json({ message: error.message });
    }
})
module.exports = router