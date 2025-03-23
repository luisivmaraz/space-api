import { Schema,model } from "mongoose";

const productSchema = new Schema({
    espacio:String,
    area:String,
    estado:String,
},{
    timestamps:true,
    versionKey:false
}

)

export default model('espacios', productSchema);