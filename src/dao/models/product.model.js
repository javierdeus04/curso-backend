import mongoose from "mongoose";

const ProductScheme = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    thumbnail: { type: String, required: true },
    code: { type: String, required: true },
    stock: { type: Number , required: true },
    status: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.model('Product', ProductScheme);