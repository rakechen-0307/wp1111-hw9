import mongoose from 'mongoose';

export default {
    connect: () => {
         mongoose
            .connect("mongodb+srv://rakechen0307:92chen0307R@wp1111-hw6.k6z7ocx.mongodb.net/?retryWrites=true&w=majority", {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then((res) => console.log("mongo db connection created"));
    }
};