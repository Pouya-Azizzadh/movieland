import React, { FC, PropsWithChildren } from "react"
// material
import { Dna } from "react-loader-spinner"

interface Props {
  className?: string
  progress?: boolean
}

const ButtonSubmit: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  progress,
}) => {
  return (
    <button
      type="submit"
      className={`w-full rounded-r-full rounded-l-full hover:shadow-inner  my-4  p-2  font-bold flex items-center justify-center ${className}`}
    >
      {progress ? (
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      ) : (
        children
      )}
    </button>
  )
}

export default ButtonSubmit
