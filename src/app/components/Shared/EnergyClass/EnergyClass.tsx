import { useEffect } from 'react'

interface EnergyClassProps {
  energyClassName: string
}

export const EnergyClass = ({ energyClassName }: EnergyClassProps) => {
  const imgUrl = new URL(
    `../../../../assets/EnergyClasses/class_${energyClassName}.png`,
    import.meta.url
  ).href

  return <img src={imgUrl} />
}
