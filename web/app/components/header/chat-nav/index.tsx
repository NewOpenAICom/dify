'use client'

import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import {
  RiChatAiFill,
  RiChatAiLine,
} from '@remixicon/react'
import classNames from '@/utils/classnames'
type ChatNavProps = {
  className?: string
}

const ChatNav = ({
  className,
}: ChatNavProps) => {
  const { t } = useTranslation()
  const selectedSegment = useSelectedLayoutSegment()
  const activated = selectedSegment === 'chat'

  return (
    <Link href="/chat/kO5AOu4gKFw6s1nM" target='_blank' className={classNames(
      className, 'group',
      activated && 'bg-components-main-nav-nav-button-bg-active shadow-md',
      activated ? 'text-components-main-nav-nav-button-text-active' : 'text-components-main-nav-nav-button-text hover:bg-components-main-nav-nav-button-bg-hover',
    )}>
      {
        activated
          ? <RiChatAiFill className='mr-2 w-4 h-4' />
          : <RiChatAiLine className='mr-2 w-4 h-4' />
      }
      {t('common.menus.chat')}
    </Link>
  )
}

export default ChatNav
