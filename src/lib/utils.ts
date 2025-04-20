export const getYear =(date:string)=>new Date(date).getFullYear()
export const getDateDifference=(dateString: string): string=> {
    const givenDate = new Date(dateString);
    console.log(givenDate)
    const now = new Date();
  
    const diffInMs = now.getTime() - givenDate.getTime();
    const diffInMonths = diffInMs / (1000 * 60 * 60 * 24 * 30.44); 
    const diffInYears = diffInMonths / 12;
  
    if (diffInYears < 1) {
      const months = Math.floor(diffInMonths);
      return `${months <= 0 ? "Less than a month" : months + " month" + (months > 1 ? "s" : "")} ago`;
    } else {
      const years = Math.floor(diffInYears);
      return `${years} year${years > 1 ? "s" : ""} ago`;
    }
  }
  