import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import CallbackModal from './CallbackModal'
import AnimatedButton from '../ui/AnimatedButton'

const CTAHelp = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-blue to-primary-dark p-8 md:p-12 text-white shadow-2xl">
      <div className="absolute inset-0 opacity-20 world-hero pointer-events-none"></div>
      <div className="relative">
        <h3 className="text-3xl font-bold mb-3">{t('contactPage.headerTitle')}</h3>
        <p className="text-white/90 mb-6 max-w-2xl">
          {t('contactPage.headerDesc')}
        </p>
        <AnimatedButton onClick={() => setIsOpen(true)}>
          {t('callbackModal.actions.requestCallback')}
        </AnimatedButton>
      </div>
      <CallbackModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  )
}

export default CTAHelp


