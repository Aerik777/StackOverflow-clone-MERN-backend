import * as dotenv from 'dotenv';
dotenv.config();

import './db.js';


import app from "./app.js";

// const PORT = 5000;

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});