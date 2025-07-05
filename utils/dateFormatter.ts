// utils/dateFormatter.ts
export function formatDate(dateString?: string): string | null {
  if (!dateString) { return null; }

  const timeZoneCorrected = (isoDate: string) => {
    const dbDate = new Date(isoDate);
    // This timezone offset logic might need review.
    // If dates are stored in UTC and need to be displayed in local time, this might be okay.
    // If they are already local, this could double-offset.
    // Forcing UTC interpretation for consistency before formatting.
    // const timeOffsetInMS = dbDate.getTimezoneOffset() * 60000;
    // dbDate.setTime(dbDate.getTime() + timeOffsetInMS); // adjust to UTC from local
    return dbDate; // Return as is, new Date() will parse it based on ISO string or local if not full ISO
  };

  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  const dateNow = new Date();

  // Ensure the date string is in a format that new Date() can parse consistently, ideally ISO 8601.
  const parsedDateString = dateString.includes('T') ? dateString : dateString.replace(' ', 'T');
  const postedDate = timeZoneCorrected(parsedDateString);

  if (isNaN(postedDate.getTime())) { // Check for invalid date
    console.warn(`Invalid date string received: ${dateString}`);
    return 'Invalid Date';
  }

  const postedTime = `${String(postedDate.getHours()).padStart(2, '0')}:${String(postedDate.getMinutes()).padStart(2, '0')}`;
  const postedMnth = monthNames[postedDate.getMonth()];
  const postedYear = postedDate.getFullYear();
  const postedDay = postedDate.getDate();

  const secondsDiff = (dateNow.getTime() - postedDate.getTime()) / 1000;

  if (secondsDiff < 0) { // Future date
     return `${postedMnth} ${postedDay}, ${postedYear} ${postedTime}`;
  }

  if (secondsDiff < 60) { // if seconds
    return secondsDiff < 1 ? '1 sec ago' : `${Math.ceil(secondsDiff)} secs ago`;
  } else if (secondsDiff < 3600) { // if minutes
    return `${Math.round(secondsDiff / 60)} min ago`;
  } else if (secondsDiff < 86400) { // if hours
    return `${Math.round(secondsDiff / 3600)} hr ago`;
  } else { // if days
    // const daysDiff = Math.round(secondsDiff / 86400);
    // return daysDiff === 1 ? `Yesterday ${postedTime}` : `${postedMnth} ${postedDay}, ${postedYear} ${postedTime}`;
    // Simplified for now, "Yesterday" logic can be tricky with exact times and timezones.
    return `${postedMnth} ${postedDay}, ${postedYear} ${postedTime}`;
  }
}
