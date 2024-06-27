import React from "react";
import { LampComponent } from "../features/lamp";
import { CardBody, CardContainer, CardItem } from "../features/3d-card";
import { CheckIcon } from 'lucide-react'
import { useTranslations } from 'next-intl';
import { plans } from "@/lib/constant";

const Pricing = () => {
    const t = useTranslations('Pricing');
    return (
      <section className="mt-[-2000px]">
      <LampComponent title={t('title')} subtitle={t('subtitle')} />
      <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-72">
        {plans.map((plan, index) => (
          <CardContainer key={index} className="inter-var ">
          <CardBody className={`bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black ${index % 2 === 0 ? 'dark:border-white/[0.2] border-black/[0.1]' : 'border-white'} w-full md:!w-[350px] h-auto rounded-xl p-6 border`}>
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white "
            >
              {plan.title}
              <h2 className="text-6xl ">${plan.price}</h2>
            </CardItem>
            <CardItem
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {plan.description}
              <ul className="my-4 flex flex-col gap-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardItem>
            <div className="flex justify-between items-center mt-8">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                {t('try')}
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                {t('button')}
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        ))}
      </div>
    </section>
    )
}

export default Pricing;