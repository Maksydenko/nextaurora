'use client'

import { type JSX } from 'react'

import { useRedirectToHomepage } from '../model'

import s from './NotFound.module.scss'

export const NotFound = (): JSX.Element => {
  const { time } = useRedirectToHomepage()

  return (
    <section className={s.notFound}>
      <div className={s.notFound__container}>
        <div className={s.notFound__body}>
          <div className={s.notFound__content}>
            <h1 className={s.notFound__title}>404</h1>

            <div className={s.notFound__box}>
              <h2 className={s.notFound__subTitle}>
                This page could not be found.
              </h2>

              <p className={s.notFound__description}>Redirect after {time}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
