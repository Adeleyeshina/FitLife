
import type React from 'react'
import Badge from './Badge'
interface HeaderProps  {
    badgeText : string,
    headingLeft : string,
    headingRight : string,
    body : string
}
const CenterTextHeader : React.FC<HeaderProps> = (props) => {
  return (
      <header className="text-center mb-12">
          <Badge className="mb-4 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">{props.badgeText}</Badge>
          <h1 className="text-5xl font-bold mb-4">
              Your <span className="text-primary">{props.headingLeft}</span> {props.headingRight}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {props.body}
          </p>
      </header>
  )
}

export default CenterTextHeader