interface ScrollButtonProps {
  title: string
  sectionId: string
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ title, sectionId }) => {
  const handleClick = () => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <button
      style={{ boxShadow: '3px 3px 5px #ccc' }}
      className="bg-white text-black py-3 px-6 rounded-lg font-semibold"
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default ScrollButton
