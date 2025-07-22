import { Box, Flex, IconButton, Text, VStack, Icon } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FiMenu, FiHome, FiInfo, FiPlusCircle, FiFileText } from 'react-icons/fi'
import { IconType } from 'react-icons'

type SidebarItem = {
  icon: IconType
  label: string
  route: string
}

const menuItems: SidebarItem[] = [
  { icon: FiHome, label: 'Início', route: '/' },
  { icon: FiPlusCircle, label: 'Criação', route: '/create' },
  { icon: FiInfo, label: 'Sobre', route: '/about' },
  { icon: FiFileText, label: 'Detalhes', route: '/detail' }
]

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true)
  const navigate = useNavigate()

  return (
    <Flex h="100vh">
      {/* Sidebar */}
      <Box w={isOpen ? '200px' : '60px'} bg="gray.900" color="white" transition="width 0.2s" p={4}>
        <IconButton
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
          variant="ghost"
          colorScheme="whiteAlpha"
          mb={6}
        >
          <FiMenu />
        </IconButton>

        <VStack align="stretch">
          {menuItems.map((item, idx) => (
            <Flex
              key={idx}
              align="center"
              p={2}
              borderRadius="md"
              _hover={{ bg: 'gray.700' }}
              cursor="pointer"
              onClick={() => navigate(item.route)}
            >
              <Icon as={item.icon} boxSize={5} />
              {isOpen && <Text ml={3}>{item.label}</Text>}
            </Flex>
          ))}
        </VStack>
      </Box>

      {/* Conteúdo */}
      <Box flex="1" bg="gray.100" p={6}>
        {children}
      </Box>
    </Flex>
  )
}
