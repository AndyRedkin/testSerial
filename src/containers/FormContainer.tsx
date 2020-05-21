import * as React from 'react'
import { useDispatch } from 'react-redux'

import * as layoutActions from '../store/layout/actions'

interface FormContainerProps {
  setData: (data: Array<Object>) => void
}

interface FormContainerRenderProps {
  render?: (props: FormContainerProps) => React.ReactElement
  children?: (props: FormContainerProps) => React.ReactElement
}

const FormContainer: React.FC<FormContainerRenderProps> = ({ render, children }) => {
  const dispatch = useDispatch()
  const setData = (data: Array<Object>) => dispatch(layoutActions.setData(data))
  if (render) {
    return render({ setData })
  }

  if (children) {
    return children({ setData })
  }

  return null
}

export default FormContainer
