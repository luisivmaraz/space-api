const C = console.log.bind(console.log)
import app from "./app.js";

app.listen(process.env.SERVER_PORT,()=>{
    C("Server on port: " + process.env.SERVER_PORT)
})
