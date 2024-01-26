import { Schema, model } from "mongoose";

const cartaoSchema = new Schema({
    banco:{type:String, required:true},
    limite:{type:Number, unique:false, required:true},
    vencimento: String
});

export default model("cartao", cartaoSchema);
