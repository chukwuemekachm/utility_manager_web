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

export function convertISOtoDateObj(dateString) {
  // gotten from https://stackoverflow.com/questions/27012854/change-iso-date-string-to-date-object-javascript
  const b = dateString.split(/\D+/);
  const offsetMult = dateString.indexOf('+') !== -1 ? -1 : 1;
  const hrOffset = offsetMult * (+b[7] || 0);
  const minOffset = offsetMult * (+b[8] || 0);
  return new Date(Date.UTC(+b[0], +b[1] - 1, +b[2], +b[3] + hrOffset, +b[4] + minOffset, +b[5], +b[6] || 0));
}
