import { LSType } from '@/services/model'
import React, { useEffect, useState } from 'react'

const useLocalStored = (obj: LSType) => {
  const [gameData, setGameData] = useState<LSType>()

  useEffect(() => {
    const get_data: LSType = JSON.parse(localStorage.getItem("data") || "[]").filter((e: LSType) => e.id_game === obj.id_game && e.id_guide === obj.id_guide && e.id_adventure === obj.id_adventure);
    if (get_data) {
      setGameData(get_data)
    } else {
      setGameData(obj)
    }
  }, [])

  return { gameData } 
}

export default useLocalStored