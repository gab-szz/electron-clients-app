import { env } from '../config/env'
import oracledb from 'oracledb'

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT
oracledb.initOracleClient({ libDir: env.ORACLE_DIR })

export async function conectar() {
  return await oracledb.getConnection({
    user: env.USUARIO_BD,
    password: env.SENHA_BD,
    connectString: `${env.HOST_BD}:${env.PORTA_BD}/${env.NOME_BD}`
  })
}
