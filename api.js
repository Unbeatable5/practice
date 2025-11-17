const express = require("express");
const app = express();
const path = require(path);

app.use(express.static(path.join(__dirname("public")))) ;

app.get("", (req, res ) => {
    req.sendFile(__dirname, "")
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is runing at http://localhost:${PORT}`);
    
});


