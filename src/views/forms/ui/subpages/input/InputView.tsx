import type { JSX } from 'react'

import { ShellView } from '@/shared/ui'

import { formsInputBreadcrumbs } from '../../../model'
import { InputViewForm } from './parts'

import s from './InputView.module.scss'

export const InputView = (): JSX.Element => (
  <ShellView
    breadcrumbs={formsInputBreadcrumbs}
    className={s.inputView}
    description={
      <>
        Basic text and textarea controls built on <code>react-hook-form</code>.
      </>
    }
    title="Input"
  >
    <div className={s.inputView__container}>
      <InputViewForm />
    </div>
  </ShellView>
)
