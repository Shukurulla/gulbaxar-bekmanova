import PageNotFoundImg from '../assets/404.svg'

const PageNotFound = () => {
  return (
    <>
      <img className='w-3/4 lg:w-1/2 mx-auto' src={PageNotFoundImg} alt="404" />
    </>
  )
}

export default PageNotFound