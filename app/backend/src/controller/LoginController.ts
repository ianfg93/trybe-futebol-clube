import { Request, Response } from 'express';
import LoginService from '../service/LoginService';
import generateToken from '../utils/JWT';

const messageInvalid = 'Invalid email or password';

export default class TeamController {
  constructor(private loginService = new LoginService()) { }

  public async login(req: Request, res: Response): Promise<Response | void> {
    try {
      const user = await this.loginService.login(req.body);
      if (user === null) return res.status(401).json({ message: messageInvalid });
      const token = await generateToken(user);
      res.status(200).json({ token });
    } catch (error) {
      const err = error as Error;
      if (err.message === messageInvalid) {
        return res.status(401).json({ message: messageInvalid });
      }
      return res.status(400).json({ message: err.message });
    }
  }
}
