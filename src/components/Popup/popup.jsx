import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/Popup/card"
import { Button } from "../Button/button"

export function CardWithForm({title,description,content,buttons=[]}) {
  return (
    <Card className="min-w-[200px] max-w-[70%]">
      <CardHeader className="w-full text-left">
        <CardTitle>{title}</CardTitle>
        <br></br>
        <hr></hr>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="flex text-center max-w-[200px]">
        {content}
      </CardContent>
      <CardFooter className="flex justify-center gap-[10px]">
        {
            buttons.map(button=>{
                return(
                    <Button variant={button.variant} className="max-w-[30%]"
                    size={button.size} type={button.type}>{button.children}
                    </Button>
                )
            })
        }
      </CardFooter>
    </Card>
  )
}
