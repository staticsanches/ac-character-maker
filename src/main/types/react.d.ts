import React from 'react'

declare module 'react' {
  // Redeclares forwardRef to allow generic types
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null
}

export type HandleClickProps = {
  readonly handleClick?: React.MouseEventHandler
}
