import { Link } from 'react-router-dom'
import { usePageTitle } from '@/hooks/usePageTitle'
import { pageHeading, pageLayout } from '@/styles/shared.css'
import { notFoundLink, notFoundText } from './NotFound.css'

const NotFound = () => {
  usePageTitle('Page not found')

  return (
    <section className={pageLayout}>
      <h1 className={pageHeading}>Page not found</h1>
      <p className={notFoundText}>Sorry, we couldn't find the page you were looking for.</p>
      <Link to="/" className={notFoundLink}>
        Go to the home page
      </Link>
    </section>
  )
}

export default NotFound
