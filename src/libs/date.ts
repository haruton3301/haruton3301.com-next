import { format } from "date-fns"
import { ja } from "date-fns/locale"

export const getDateTimeText = (date: string) =>
  format(new Date(date), `yyyy-MM-dd'T'HH:mm:ss'Z'`)

export const getDateText = (date: string) =>
  format(new Date(date), "yyyy年MM月dd日", {
    locale: ja,
  })
