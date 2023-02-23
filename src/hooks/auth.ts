import { useContext } from 'react'

import { AuthContext } from '../providers/authProvider'

const useAuth = () => {
  const context = useContext(AuthContext)

  if(!context){
    throw new Error('useAuth error!')
  }

  return context
}

export default useAuth