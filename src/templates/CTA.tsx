import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';

import { CTABanner } from '@/components/features/landing/CTABanner';
import { Section } from '@/components/features/landing/Section';
import { buttonVariants } from '@/components/ui/button';

const CTA = () => {
  const t = useTranslations('CTA');

  return (
    <Section>
      <CTABanner
        title={t('title')}
        description={t('description')}
        buttons={
          <a
            className={buttonVariants({ variant: 'outline', size: 'lg' })}
            href="https://github.com/ixartz/SaaS-Boilerplate"
          >
            <GitHubLogoIcon className="mr-2 size-5" />
            {t('button_text')}
          </a>
        }
      />
    </Section>
  );
};

export { CTA };
