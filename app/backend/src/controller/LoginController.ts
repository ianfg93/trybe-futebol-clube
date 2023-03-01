import { Request, Response } from 'express';
import LoginService from '../service/LoginService';

const messageInvalid = 'Invalid email or password';

export default class TeamController {
  constructor(private loginService = new LoginService()) { }

  public async login(req: Request, res: Response) {
    const user = await this.loginService.login(req.body);
    if (!user) return res.status(401).json({ message: messageInvalid });
    return res.status(200).json(user);
  }

  public async loginRole(_req: Request, res: Response) {
    const { email } = res.locals.token;
    const userEmail = await this.loginService.loginRole(email);
    if (!userEmail) return res.status(401).json({ message: 'Invalid email or password' });
    return res.status(200).json({ role: userEmail });
  }
}
