import { useRouteError } from 'react-router'

import Error404Page from './Error404Page'
import Error500Page from './Error500Page'

export default function ErrorIndexPage() {
  const error = useRouteError() as { status?: number; data: string }

  const errorPages: Record<number, React.ReactElement> = {
    404: <Error404Page message={error.data} />,
    500: <Error500Page />
  }

  if (error?.status && errorPages[error.status]) {
    return errorPages[error.status]
  }

  // TODO: Implement a default error page
  return <div>An unexpected error occurred.</div>
}
