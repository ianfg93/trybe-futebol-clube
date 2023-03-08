import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testanto login', () => {
  it('Testando rota login', async () => {
    const login = await chai
       .request(app).get('/login')
    expect(login.status).to.be.eq(200);
  });
});