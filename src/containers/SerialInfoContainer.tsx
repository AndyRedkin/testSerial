import * as React from 'react'
import { useSelector } from 'react-redux'

import { ApplicationState } from '../store'

interface SerialInfoContainerProps {
  serial: Object
}

interface SerialInfoContainerRenderProps {
  render?: (props: SerialInfoContainerProps) => React.ReactElement
  children?: (props: SerialInfoContainerProps) => React.ReactElement
}

const SerialInfoContainer: React.FC<SerialInfoContainerRenderProps> = ({ render, children }) => {
  const { data, serialId } = useSelector((state: ApplicationState) => state.layout)
  const serial = data.filter((item :any) => {
    return item.show.id === serialId
  })[0]
  if (render) {
    return render({ serial })
  }

  if (children) {
    return children({ serial })
  }

  return null
}

export default SerialInfoContainer
