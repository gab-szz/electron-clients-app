import { conectar } from '@/main/config/oracle'

export async function consultaRCA() {
  const connection = await conectar()

  try {
    const result = await connection.execute(`SELECT codusur, nome FROM PCUSUARI`)
    console.log(result.rows)
  } finally {
    await connection.close()
  }
}
