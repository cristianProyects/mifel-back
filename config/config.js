require('dotenv').config();
const isProduction = process.env.NODE_ENV === "production";

const config = {
	env: process.env.NODE_ENV || 'dev',
	port: process.env.PORT || 8080,
	dbUser: process.env.DB_USER,
	dbPassword: process.env.DB_PASSWORD,
	dbHost: isProduction ? "localhost" : process.env.DB_HOST,
	dbPort: process.env.DB_PORT,
	dbName: process.env.DB_NAME,
	dbSocketPath: process.env.DB_SOCKET_PATH,
	googleID: process.env.GOOGLE_CLIENT_ID,
	googleSecret: process.env.GOOGLE_CLIENT_SECRET,
	jwtSecret: process.env.JWT_SECRET
};


module.exports = { config };