'use client';

import {ArchiveBoxIcon, ArrowPathIcon, BoltIcon, CircleStackIcon, CloudArrowUpIcon, CommandLineIcon, CubeIcon, EnvelopeIcon, GlobeAltIcon, PhoneIcon, XMarkIcon} from '@heroicons/react/24/outline';
import {useTranslations} from 'next-intl';
import {useEffect} from 'react';

type Props = {kind: 'node' | 'aws'; open: boolean; onClose: () => void};
const aws = [['AWS Lambda',BoltIcon],['AWS SAM',CommandLineIcon],['Amazon DynamoDB',CircleStackIcon],['Amazon S3',ArchiveBoxIcon],['Amazon SES',EnvelopeIcon],['Amazon Connect',PhoneIcon],['AWS Amplify',CloudArrowUpIcon],['Amazon Route 53',GlobeAltIcon]] as const;

export default function DetailsModal({kind, open, onClose}: Props) {
  const t = useTranslations(`skills.${kind === 'aws' ? 'awsDetails' : 'nodeDetails'}`);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    const key = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose(); };
    document.body.style.overflow='hidden'; addEventListener('keydown', key);
    return () => {document.body.style.overflow=previous; removeEventListener('keydown', key);};
  }, [open,onClose]);
  if (!open) return null;
  const nodeItems = [['versionTitle','versionDescription',ArrowPathIcon],['dockerTitle','dockerDescription',CubeIcon],['pnpmTitle','pnpmDescription',CommandLineIcon]] as const;
  return <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" onMouseDown={(e) => {if(e.target===e.currentTarget) onClose();}}><section role="dialog" aria-modal="true" aria-labelledby={`${kind}-details-title`} className="bg-base-100 border-base-300 relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border p-5 shadow-2xl sm:p-7"><button type="button" autoFocus onClick={onClose} aria-label={t('close')} className="btn btn-circle btn-ghost absolute top-3 right-3"><XMarkIcon className="h-5 w-5"/></button><p className="text-primary pr-10 text-xs font-semibold tracking-[0.2em] uppercase">{t('eyebrow')}</p><h2 id={`${kind}-details-title`} className="mt-2 pr-10 text-2xl font-semibold sm:text-3xl">{t('title')}</h2><p className="text-base-content/75 mt-4 leading-7">{t('intro')}</p>{kind==='aws'?<><h3 className="mt-7 text-lg font-semibold">{t('servicesTitle')}</h3><p className="text-base-content/65 mt-1 text-sm">{t('servicesDescription')}</p><div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">{aws.map(([name,Icon])=><article key={name} className="border-base-300 bg-base-200/55 flex min-h-28 flex-col items-center justify-center gap-3 rounded-xl border p-3 text-center"><Icon className="text-primary h-8 w-8"/><span className="text-sm font-semibold">{name}</span></article>)}</div><p className="border-primary/30 bg-primary/5 text-base-content/75 mt-7 rounded-xl border p-4 leading-6">{t('learning')}</p></>:<><div className="mt-7 grid gap-3 sm:grid-cols-3">{nodeItems.map(([title,desc,Icon])=><article key={title} className="border-base-300 bg-base-200/55 rounded-xl border p-4"><Icon className="text-primary h-7 w-7"/><h3 className="mt-3 font-semibold">{t(title)}</h3><p className="text-base-content/70 mt-2 text-sm leading-6">{t(desc)}</p></article>)}</div><div className="border-primary/30 bg-primary/5 mt-7 rounded-xl border p-4"><h3 className="font-semibold">{t('approachTitle')}</h3><p className="text-base-content/75 mt-1 leading-6">{t('approachDescription')}</p></div></>}</section></div>;
}
