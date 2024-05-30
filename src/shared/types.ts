export interface IFaculty {
  name: string;
  logo: string;
  info: string;
  departments: IDepartment[];
  deanery: IDeanery[];
}

export interface IDepartment {
  name: string;
  info: string;
  teachers: ITeacher[];
}

export interface ITeacher {
  name: string;
  logo: string;
  info: string;
}

export interface IDeanery {
  name: string;
  logo: string;
  info: string;
}

export interface IEvent {
  text: string;
  events: {
    year: string;
    name: string;
  }[];
  medias: string[];
}
