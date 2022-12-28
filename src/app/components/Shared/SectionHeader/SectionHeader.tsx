import { useState } from 'react'
import './SectionHeader.scss'
type headerProps = {
  main: string
  sub: string
  secondary: boolean
}
export const SectionHeader = ({ main, sub, secondary }: headerProps) => {
  return (
    <div className="SectionHeader">
      <h2 className={secondary ? 'Title__Secondary' : 'Title'}>{main}</h2>
      <h4 className="SubTitle">{sub}</h4>
    </div>
  )
}
