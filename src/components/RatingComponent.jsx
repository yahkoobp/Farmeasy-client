import {Rating,Stack} from "@mui/material"
import React, {useState} from "react"


 export const RatingComponent = ({value}) => {

  // const [value , setValue] = useState(null)
  // // console.log(value)
  // const handleChange = (e) =>{
  //   // console.log(e.target.value)
  //   setValue(e.target.value)
  //     //  setValue(newValue)
  //}
  return (
    <Stack spacing={2}>
        <Rating value={value} precision={0.5} size="large" readOnly/>
    </Stack>
  )
}

export default RatingComponent