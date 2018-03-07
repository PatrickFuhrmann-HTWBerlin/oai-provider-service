/*
 *  Copyright 2018 Willamette University
 *
 *  This file is part of OAI-PHM Service.
 *  
 *  @author Michael Spalti
 *
 *  OAI-PHM Service is based on the Modular OAI-PMH Server, University of Helsinki, 
 *  The National Library of Finland.
 *
 *  OAI-PHM Service is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  OAI-PHM Service is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of 
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with OAI-PHM Service.  If not, see <http://www.gnu.org/licenses/>.
 */

import express = require('express');
import { Application } from 'express';
import bodyParser = require('body-parser');
import http = require('http');
import os = require('os');
import logger from './logger';
import config from "./host-config";

const app = express();


export default class ExpressServer {

  port: number = 0;

  constructor() {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    this.port = config.port;

  }

  router(routes: (app: Application) => void): ExpressServer {
    routes(app);
    return this;
  }


  listen(port: number): Application {
    const welcome = (port: number) => () => logger.info(`up and running in ${process.env.NODE_ENV || 
      'development'} @: ${os.hostname() } on port: ${port}}`);
    http.createServer(app).listen(port, welcome(port));
    return app;
  }


}