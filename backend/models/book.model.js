import mongoose, {Schema} from "mongoose";

const bookSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: Number
})

const book = mongoose.model('Book', bookSchema);

export default book;