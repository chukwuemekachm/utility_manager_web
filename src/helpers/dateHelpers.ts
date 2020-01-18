export function getCurrentDate(): string {
  const date = Date(),
    d = new Date(date),
    year = d.getFullYear();

  let month = String(d.getMonth() + 1),
    day = String(d.getDate());

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

export function dateJoinedMessageFileter(yearDifference, monthDifference, dayDifference): string {
  if (yearDifference == 1) {
    return `Joined ${yearDifference} year ago`;
  } else if (yearDifference > 1) {
    return `Joined ${yearDifference} years ago`;
  } else if (monthDifference == 1) {
    return `Joined ${monthDifference} month ago`;
  } else if (monthDifference > 1) {
    return `Joined ${monthDifference} months ago`;
  } else if (dayDifference == 1) {
    return `Joined ${dayDifference} day ago`;
  }
  return `Joined ${dayDifference} days ago`;
}

export function getDateJoinedMessage(dateCreated): string {
  const dateCreatedArray = dateCreated.split('T')[0].split('-');
  const currentDate = getCurrentDate().split('-');

  const yearDifference = parseInt(currentDate[0]) - parseInt(dateCreatedArray[0]),
    monthDifference = parseInt(currentDate[1]) - parseInt(dateCreatedArray[1]),
    dayDifference = parseInt(currentDate[2]) - parseInt(dateCreatedArray[2]);

  return dateJoinedMessageFileter(yearDifference, monthDifference, dayDifference);
}
