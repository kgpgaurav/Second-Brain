import express, { urlencoded } from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { z } from "zod";
import bcrypt from "bcrypt";
import { ContentModel, LinkModel, UserModel } from "./db";
import { userMiddleware } from "./middleware";
import { JWT_secret } from "./config";
import { random } from "./utils";
import cors from "cors";

mongoose.connect("mongodb+srv://kgp:bgI0Qdc2LlyGmJPM@cluster0.udvik.mongodb.net/brainly")
const app = express();
app.use(express.json());
// app.use()
app.use(cors());
// const JWT_secret = "gauravisgood";

app.post("/api/v1/signup", async (req, res) => {
    // TODO: zod validation , hash the password
    const username = req.body.username;
    const password = req.body.password;

    try {
        await UserModel.create({
            username: username,
            password: password
        }) 

        res.json({
            message: "User signed up"
        })
    } catch(e) {
        res.status(411).json({
            message: "User already exists"
        })
    }
})


app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await UserModel.findOne({ username: username });

    if (!user) {
        res.status(403).json({
            message: "User not found"
        })
        return;
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_secret);
        res.json({
            token: token
        })
    } else {
        res.status(403).json({
            message: "Invalid credentials"
        })

    }
})

app.post("/api/v1/content", userMiddleware, async (req, res) => {
    const link = req.body.link;
    const type = req.body.type;

    await ContentModel.create({
        link,
        type,
        //@ts-ignore
        userId: req.userId,
        tags: []
    })
    res.json({
        message: "Content Added"
    })

})

app.get("/api/v1/content", userMiddleware, async (req, res) => {
    //@ts-ignore
    const userId = req.userId;
    const content = await ContentModel.find({
        userId: userId
    }).populate("userId", "username")
    res.json({
        content
    })
})

app.delete("/api/v1/content", userMiddleware, async (req, res) => {
    const contentId = req.body.contentId

    await ContentModel.deleteMany({
        contentId,
        //@ts-ignore
        userId: req.userId
    })
    res.json({
        message: "Deleted"
    })
})

app.post("/api/v1/brain/share", userMiddleware, async (req, res): Promise<any> => {
    const share = req.body.share;
    if (share) {
        

        const existingLink= await LinkModel.findOne({
            //@ts-ignore
            userId:req.userId
        })

        if(existingLink){
            res.json({
                hash: existingLink.hash
            })
            return
        }

        const hash = random(10);

        await LinkModel.create({
            //@ts-ignore
            userId: req.userId,
            hash: hash
        })
        res.json({
            message: "/share" + hash
        })
    }
    else {
        await LinkModel.deleteOne({
            //@ts-ignore
            userId: req.userId
        });

        res.json({
            message: "Link deleted"
        })
    }
    return;
})

app.get("/api/v1/brain/:shareLink", async (req, res) => {
    const hash = req.params.shareLink;
    const link = await LinkModel.findOne({
        hash
    });
    if (!link) {
        res.json({
            message: "Sorry incorrect input"
        });
        return
    }
    const content = await ContentModel.findOne({
        userId: link.userId
    })
    const user = await UserModel.findOne({
        _id: link.userId
    })
    if (!user) {
        res.json({
            message: "User not found, ideally there shoudln't be errror here"
        });
        return
    }
    res.json({
        username: user.username,
        content:content
    })
})

app.listen(3000);