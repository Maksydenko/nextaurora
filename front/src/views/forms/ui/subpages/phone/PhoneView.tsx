import type { JSX } from 'react'

import { ShellView } from '@/shared/ui'

import { formsPhoneBreadcrumbs } from '../../../model'
import { PhoneViewForm } from './parts'

import s from './PhoneView.module.scss'

export const PhoneView = (): JSX.Element => (
  <ShellView
    breadcrumbs={formsPhoneBreadcrumbs}
    description={
      <>
        International phone field powered by{' '}
        <code>react-phone-number-input</code>.
      </>
    }
    title="Phone"
  >
    <div className={s.phoneView__container}>
      <PhoneViewForm />
    </div>
  </ShellView>
)
