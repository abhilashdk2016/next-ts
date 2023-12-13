interface CustomerProps {
  params: { id: number }
}
const Customers = ( { params: { id } } : CustomerProps) => {
  return (
    <div>Customer id: {id} </div>
  )
}

export default Customers