import { memo, useState } from "react"

const Footer = memo(() => {
  const [str, setStr] = useState('qwer')

  return (
    <div>
      this is footer,测试memo, {str}
    </div>
  )
})

export default Footer