import { api } from 'boot/axios'

export default function useApi () {
  const listEntries = async () => {
    try {
      const { data } = await api.get('/entries')
      if (data.entries) {
        return data.entries
      }
      return []
    } catch (error: any) {
      throw new Error(error)
    }
  }

  return {
    listEntries
  }
}
