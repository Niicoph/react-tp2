import { useTranslation } from 'react-i18next'

export default function Input({ value, onChange }) {
  const { t } = useTranslation();

  return (
    <input
      value={value}
      onChange={onChange}
      type="text"
      className="w-full h-full px-4 bg-[#252729] border border-[#323436] rounded-md focus:outline-none focus:ring-2 placeholder:text-sm"
      placeholder={t('search')}
    ></input>
  );
}
