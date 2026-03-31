function FeatureCard({ icon, title }) {
  return (
    <div className="flex flex-col items-center text-center gap-2">
      <img src={icon} className="w-20 h-20 object-contain transform transition duration-300 hover:scale-110" />
      <p className="text-base font-bold uppercase">{title}</p>
    </div>
  )
}

export default FeatureCard