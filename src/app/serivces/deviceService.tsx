import axios from 'axios'
const BASE_URL = 'https://localhost:7200/api'

const axiosClient = axios.create({
  baseURL: BASE_URL,
})

export const deviceInfo = async (data: any) => {
  // to remove after modal implementation
  const data1 = {
    modelIdentifier: ' F4WV508S2BS',
    energyPrice: 20,
    waterPrice: 20,
    weeklyCycles: 10,
  }

  return await axiosClient.post('/Calculation', data1)
}
