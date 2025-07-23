import 'dotenv/config'
import z from 'zod'

const envSchema = z.object({
  PORTA: z.coerce.number().default(1521),
  USUARIO_BD: z.string(),
  HOST_BD: z.string(),
  NOME_BD: z.string(),
  SENHA_BD: z.string(),
  PORTA_BD: z.coerce.number().default(5432),
  ORACLE_DIR: z.string().min(1)
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error('Variáveis de Ambiente inválidas', _env.error.format())
  throw new Error('Variáveis de Ambiente inválidas')
}

export const env = _env.data
