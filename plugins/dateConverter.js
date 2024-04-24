import Vue from 'vue'

Vue.filter('dateConverter', function (date) {
  if (!date) { return }
  const timeZone = (date) => {
    const dbDate = new Date(date)
    const timeOffsetInMS = dbDate.getTimezoneOffset() * 60000
    dbDate.setTime(dbDate.getTime() - timeOffsetInMS)
    return date
  }
  const MonthDays = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

  const DateNow = new Date() // current date
  const postedDate = new Date(timeZone(date.replace(' ', 'T'))) // date posted
  const postedTime = date.includes('T') ? date.substr(date.indexOf('T') + 1, 5) : '' // get the time
  const postedMnth = MonthDays[postedDate.getMonth()] // get the month
  const postedYear = postedDate.getFullYear() // get the year
  const postedDay = postedDate.getDate() // get the date of the month
  let rDate = null
  const sDate = ((DateNow - postedDate) / 1000) // get the seconds of in the date
  let outputDate = null
  if (sDate >= 86400) { // if days
    rDate = parseInt(Math.round(sDate / 86400))
    outputDate = rDate === 1 ? 'Yesterday ' + postedTime : `${postedMnth} ${postedDay}, ${postedYear} ${postedTime}`
  } else if (sDate >= 3600) { // if hours
    rDate = parseInt(Math.round(sDate / 3600))
    outputDate = rDate + ' hr ago'
  } else if (sDate >= 60) { // if minuntes
    rDate = parseInt(Math.round(sDate / 60))
    outputDate = rDate + ' min ago'
  } else { // if seconds
    rDate = Math.ceil(sDate)
    outputDate = sDate < 1 ? '1 sec ago' : rDate + ' sec ago'
  }
  return outputDate
})
