import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
  audience: process.env.BACKEND_URL,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  tokenSigningAlg: "RS256"
});

export default jwtCheck