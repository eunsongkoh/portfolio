export class WorkExperience {
  title;
  company;
  date;
  description;
  techstack;

  constructor(_title, _company, _date, _description, _techstack) {
    this.title = _title;
    this.company = _company;
    this.date = _date;
    this.description = _description;
    this.techstack = _techstack;
  }
}
