import { useRouteError } from 'react-router'

import Error404Page from './Error404Page'
import Error500Page from './Error500Page'

const errorPages: Record<number, React.ReactElement> = {
  404: <Error404Page />,
  500: <Error500Page />
}

export default function ErrorIndexPage() {
  const error = useRouteError() as { status?: number }

  if (error?.status && errorPages[error.status]) {
    return errorPages[error.status]
  }

  // TODO: IMplement a default error page
  return <div>An unexpected error occurred.</div>
}
