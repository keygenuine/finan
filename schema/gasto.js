import { Schema, model } from "mongoose";

const gastoSchema = new Schema({
    gasto:{type:String, required:true},
    valor:{type:Number, unique:false, required:true},
});

export default model("gasto", gastoSchema);
