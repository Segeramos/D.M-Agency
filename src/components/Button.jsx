import React from 'react'
import { ArrowRight } from 'lucide-react'

const Button = ({label, path}) => {
  return (
    <button 
      path={path}
      className="border-2 border-neutral-800/10 px-6 py-2 rounded-md cursor-pointer bg-orange-600 hover:bg-orange-600/80 flex items-center gap-2 group" >
      {label}
      <ArrowRight 
        size={20}
        className="group-hover:translate-x-1 delay-200 transition-all"
      />
    </button>
  )
}

export default Button
