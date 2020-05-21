import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ApplicationState } from '../store'
import * as layoutActions from '../store/layout/actions'

interface ListContainerProps {
  data: Array<Object>
  setSerialId: (id: number) => void
}

interface ListContainerRenderProps {
  render?: (props: ListContainerProps) => React.ReactElement
  children?: (props: ListContainerProps) => React.ReactElement
}

const ListContainer: React.FC<ListContainerRenderProps> = ({ render, children }) => {
  const { data } = useSelector((state: ApplicationState) => state.layout)
  const dispatch = useDispatch()
  const setSerialId = (id: number) => dispatch(layoutActions.setSerialId(id))
  if (render) {
    return render({ data, setSerialId })
  }

  if (children) {
    return children({ data, setSerialId })
  }

  return null
}

export default ListContainer
