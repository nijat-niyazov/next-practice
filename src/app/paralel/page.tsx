
const ParalelPage = async() => {
  await new Promise(resolve=>setTimeout(resolve,2000))

  return (
    <div>ParalelPage</div>
  )
}

export default ParalelPage