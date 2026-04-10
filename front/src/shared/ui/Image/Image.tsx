'use client'

import { type JSX, type ReactNode, useRef, useState } from 'react'

import NextImage, { type ImageProps as NextImageProps } from 'next/image'

import { clsx } from 'clsx'

import s from './Image.module.scss'

interface ImageProps extends NextImageProps {
  customLoader?: ReactNode
}

export const Image = ({
  className,
  customLoader,
  fill = true,
  height,
  quality = 75,
  sizes = '(min-width: 0) 100vw',
  src,
  style,
  width,
  ...props
}: ImageProps): JSX.Element => {
  const imgRef = useRef<HTMLImageElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={clsx(s.image, className)} style={style}>
      {src && (
        <>
          {isLoading && <div className={s.image__loader}>{customLoader}</div>}

          <NextImage
            quality={quality}
            src={src}
            {...(width && height
              ? {
                  height,
                  width
                }
              : {
                  fill,
                  sizes
                })}
            ref={imgRef}
            onLoad={() => {
              setIsLoading(false)
            }}
            {...props}
          />
        </>
      )}
    </div>
  )
}
