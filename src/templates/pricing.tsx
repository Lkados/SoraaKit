import { CheckIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react';

import { plans } from '@/utils/constant';

import {
  CardBody,
  CardContainer,
  CardItem,
} from '../components/features/landing/3d-card';
import { LampComponent } from '../components/features/landing/lamp';

const Pricing = () => {
  const t = useTranslations('Pricing');
  return (
    <section className="mt-[-2000px]">
      <LampComponent title={t('title')} subtitle={t('subtitle')} />
      <div className="-mt-72 flex flex-col flex-wrap items-center justify-center gap-8 md:flex-row">
        {plans.map((plan) => (
          <CardContainer key={plan.id}>
            <CardBody
              className={`group/card relative bg-gray-50 dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] ${plan.id % 2 === 0 ? 'border-black/[0.1] dark:border-white/[0.2]' : 'border-white'} h-auto w-full rounded-xl border p-6 md:!w-[350px]`}
            >
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                {plan.title}
                <h2 className="text-6xl ">${plan.price}</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
              >
                {plan.description}
                <ul className="my-4 flex flex-col gap-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardItem>
              <div className="mt-8 flex items-center justify-between">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
                >
                  {t('try')}
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
                >
                  {t('button')}
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
