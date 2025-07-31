function Container({name,desig}){
    return(
       
       <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:gap-6 sm:py-6">
  <img
    className="mx-auto block h-24 w-24 rounded-full sm:mx-0 sm:shrink-0"
    src={`/assets/${name}.jpg`}
    alt={name}
  />
  <div className="space-y-2 text-center sm:text-left">
    <div className="space-y-0.5">
      <p className="text-lg font-semibold text-black">{name}</p>
      <p className="text-sm text-gray-500">{desig}</p>
    </div>
    <button
      className="px-4 py-2 text-sm font-medium text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-600 hover:text-white hover:border-transparent active:bg-purple-700"
    >
      Message
    </button>
  </div>
</div>

    )
}
export default Container;