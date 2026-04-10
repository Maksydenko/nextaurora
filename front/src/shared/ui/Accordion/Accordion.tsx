'use client'

import { type JSX, type ReactNode } from 'react'

import clsx from 'clsx'
import { HiChevronDown } from 'react-icons/hi2'

import * as AccordionPrimitive from '@radix-ui/react-accordion'

import { type Option } from '@/shared/model'

import s from './Accordion.module.scss'

type AccordionProps = AccordionRootProps & {
  contentTextClassName?: string
  items: Option<ReactNode, ReactNode>[]
}

type AccordionRootProps =
  | (Omit<AccordionPrimitive.AccordionMultipleProps, 'children'> & {
      type: 'multiple'
    })
  | (Omit<AccordionPrimitive.AccordionSingleProps, 'children' | 'type'> & {
      type?: 'single'
    })

export const Accordion = ({
  className,
  contentTextClassName,
  items,
  ...props
}: AccordionProps): JSX.Element => {
  const rootProps =
    props.type === 'multiple'
      ? props
      : {
          collapsible: true,
          type: 'single' as const,
          ...props
        }

  return (
    <AccordionPrimitive.Root
      className={clsx(s.accordion, className)}
      {...rootProps}
    >
      {items.map(item => (
        <AccordionPrimitive.Item
          key={item.id}
          className={s.accordion__item}
          value={String(item.id)}
        >
          <AccordionPrimitive.Header className={s.accordion__header}>
            <AccordionPrimitive.Trigger className={s.accordion__trigger}>
              <span className={s.accordion__triggerText}>{item.label}</span>

              <HiChevronDown className={s.accordion__chevron} aria-hidden />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>

          <AccordionPrimitive.Content className={s.accordion__content}>
            <div className={contentTextClassName}>{item.value}</div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  )
}
