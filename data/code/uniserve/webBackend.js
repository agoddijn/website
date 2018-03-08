module.exports = "\
import * as express from 'express';\n\
import * as Authenticator from './auth/Authenticator';\n\
import * as path from 'path';\n\
import * as devicesAPI from './api/devices';\n\
import * as deviceAPI from './api/device';\n\
import * as devicehistoryAPI from './api/devicehistory';\n\
\n\
import {Log,DbTesting} from 'uniserve.m8s.utils';\n\
import {Company} from 'uniserve.m8s.types';\n\
import {DbInterface} from 'uniserve.m8s.web.db_interface';\n\
\n\
const app = express();\n\
\n\
\n\
app.get('/api/company/:company_recid/devices', Authenticator.authenticate, devicesAPI.devices);\n\
app.get('/api/company/:company_recid/device/:device_recid', Authenticator.authenticate, deviceAPI.device);\n\
app.get('/api/company/:company_recid/devicehistory/:device_recid', Authenticator.authenticate, devicehistoryAPI.devicehistory);\n\
\n\
app.listen(process.env.WEBBACKEND_PORT, ()=>{\n\
    Log.info('Web Backend is running on http://localhost:' + process.env.WEBBACKEND_PORT);\n\
})\n\
\n\
//needed for testing\n\
module.exports = app;\n\
"