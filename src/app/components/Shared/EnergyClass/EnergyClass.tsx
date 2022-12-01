interface EnergyClassProps {
  energyClassName: string
}

export const EnergyClass = ({ energyClassName }: EnergyClassProps) => {
  return <img src={`/src/assets/EnergyClasses/class_${energyClassName}.png`} />
}
