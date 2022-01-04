import { format, parseISO } from 'date-fns';

export default function DateFormatter({ dateString }: { dateString: string }) {
  if (dateString == null) return "";
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
}
