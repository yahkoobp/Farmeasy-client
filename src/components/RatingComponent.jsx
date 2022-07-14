import {Rating,Stack} from "@mui/material"
import React, {useState} from "react"


 export const RatingComponent = ({mode}) => {

  const [value , setValue] = useState(null)
  console.log(value)
  const handleChange = (e) =>{
    // console.log(e.target.value)
    setValue(e.target.value)
      //  setValue(newValue)
  }
  return (
    <Stack spacing={2}>
        <Rating value={value} onChange = {handleChange} precision={0.5} size="large"/>
    </Stack>
  )
}

export default RatingComponent