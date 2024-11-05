const Footer = () => {
  return (
    <footer className="bg-stone-800 flex justify-center py-24 text-stone-300">
        <div className="flex flex-col items-center gap-4">
            <div className="logo font-bold text-5xl">BG</div>
            <p>&copy; {new Date().getFullYear()}</p>
            <p>Website developers: <span className="font-bold"><a href="#">IMAX Company</a></span></p>
        </div>
    </footer>
  )
}

export default Footer