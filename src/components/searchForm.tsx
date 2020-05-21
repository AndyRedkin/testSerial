import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'
import { makeSearch } from '../api/api'
import history from '../history'
import styled from '../utils/styled'

const Form = styled('form')`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`

interface SearchFormProps {
  setData: (data: Array<Object>) => void
}

const SearchForm: React.SFC<SearchFormProps> = ({setData}) => {
  const [value, setValue] = useState('')
  const onChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string)
  }
  const onClick = () => {
    if (value) {
      makeSearch(value)
        .then(data => {
          setData(data)
          history.push(`/serial_list`)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
  return (
    <Form noValidate autoComplete="off">
      <TextField id="search" label="Search" variant="outlined" onChange={onChange} />
      <Button variant="contained" onClick={onClick}>
        Search
      </Button>
    </Form>
  )
}

export default SearchForm
