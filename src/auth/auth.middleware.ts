import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import * as firebase from 'firebase-admin';
import { Request, Response } from 'express';
import { timestamp } from 'rxjs';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  private readonly firebaseConfig = {
    type: process.env.FIREBASE_TYPE,
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKeyId: process.env.FIREBASE_PRIVATE_KEY_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    clientId: process.env.FIREBASE_CLIENT_ID,
    authUri: process.env.FIREBASE_AUTH_URI,
    tokenUri: process.env.FIREBASE_TOKEN_URI,
    authProviderX509CertUrl: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    clientX509CertUrl: process.env.FIREBASE_CLIENT_X509_CERT_URL,
    universeDomain: process.env.FIREBASE_UNIVERSE_DOMAIN,
  };

  private eSimApp: any;

  constructor() {
    this.eSimApp = firebase.initializeApp({
      credential: firebase.credential.cert(this.firebaseConfig),
      databaseURL: 'https://silas-esim-default-rtdb.firebaseio.com/',
    });
  }

  async use(req: Request, res: Response, next: () => void) {
    const token = req.headers.authorization;

    if (!token) {
      throw new UnauthorizedException('Missing authorization token');
    }

    try {
      const decodedToken = await this.eSimApp
        .auth()
        .verifyIdToken(token.replace('Bearer ', ''));
      req['user'] = { email: decodedToken.email };
      next();
    } catch (error) {
      console.error(error);
      throw new UnauthorizedException('Invalid authorization token');
    }
  }
}
