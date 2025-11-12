import type { FC } from "react"
import Badge from "./Badge"
interface SideHeaderProps {
    badgeText : string
    headingLeft: string,
    headingRight: string,
    body: string
}


const SideHeader: FC<SideHeaderProps> = (props) => {
  return (
      <div className="mb-12">
          <Badge className="mb-4 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">{props.badgeText}</Badge>
          <h1 className="text-5xl font-bold mb-4">
              {props.headingLeft} <span className="text-primary">{props.headingRight}</span>
          </h1>
          <p className="text-xl text-muted-foreground">
              {props.body}
          </p>
      </div>
  )
}

export default SideHeader