import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useCallback } from 'react'

export function Home() {
  const handleAdd = useCallback(async () => {
    const response = await window.api.fetchUsers()
    console.log(response)
  }, [])

  return (
    <div style={{ color: 'black', fontSize: '24px' }}>
      <h1>Página Home!</h1>

      <Button colorScheme="blue" onClick={handleAdd}>
        Testar
      </Button>

      <br />
      <br />
    </div>
  )
}
