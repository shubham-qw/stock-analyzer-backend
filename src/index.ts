import dotenv from 'dotenv';
dotenv.config();
import App from './app';

App.listen(8090, function () {
    console.log(`Server running on port 8090`);
})