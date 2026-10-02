import { Link } from 'react-router-dom'
import { usePageTitle } from '@/hooks/usePageTitle'
import { pageLayout } from '@/styles/shared.css'
import { notFoundHeading, notFoundLink, notFoundText } from './NotFound.css'

const NotFound = () => {
  usePageTitle('Page not found')

  return (
    <section className={pageLayout}>
      <h2 className={notFoundHeading}>Page not found</h2>
      <p className={notFoundText}>Sorry, we couldn't find the page you were looking for.</p>
      <Link to="/" className={notFoundLink}>
        Go to the home page
      </Link>
    </section>
  )
}

export default NotFound
