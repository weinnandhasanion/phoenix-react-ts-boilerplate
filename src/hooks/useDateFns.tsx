import dayjs from 'dayjs';
import { useCallback } from 'react';

export const useDateFns = () => {
  const DEFAULT_FORMAT = 'YYYY-MM-DD';

  const getSeconds = useCallback(
    (date: string) => new Date(date).getTime(),
    []
  );

  const getFormattedDate = useCallback(
    (
      date: Date | string | undefined | null,
      format: string = DEFAULT_FORMAT
    ) => {
      let data = date === undefined || date === null ? dayjs() : date;
      return dayjs(data).format(format);
    },
    []
  );

  const getAge = useCallback((date: string) => {
    let today = new Date();
    let birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }, []);

  return {
    getSeconds,
    getFormattedDate,
    getAge,
  };
};
