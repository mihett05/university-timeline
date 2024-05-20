import {
  Faculty,
  Department,
  Deanery,
  Teacher,
  makeArchiveObjectFromPath,
  pathBase,
} from './factory';

const getArchiveObjects = () =>
  Object.entries(import.meta.glob(`/public/archive/**/*`)).map(([path]) =>
    makeArchiveObjectFromPath(path.replace(pathBase, '')),
  );

export const getFaculties = async (): Promise<Faculty[]> => {
  const objects = getArchiveObjects();
  const faculties: Record<string, Faculty> = {};
  objects.forEach((object) => {
    if (!faculties[object.faculty]) {
      faculties[object.faculty] = new Faculty(object.faculty);
    }
    faculties[object.faculty].handleFile(object);
  });
  return Object.values(faculties);
};

export const getFaculty = async (faculty: string): Promise<Faculty | undefined> => {
  const loader = (await getFaculties()).find((object) => object.name === faculty);
  if (!loader) return;
  await loader.loadInfo();
  return loader;
};

export const getDepartment = async (
  faculty: string,
  department: string,
): Promise<Department | undefined> => {
  const facultyLoader = await getFaculty(faculty);
  if (!facultyLoader) return;
  const departmentLoader = facultyLoader.departments.find(
    (departmentLoader) => departmentLoader.name === department,
  );
  if (!departmentLoader) return;
  await departmentLoader.loadInfo();
  return departmentLoader;
};

export const getTeacher = async (
  faculty: string,
  department: string,
  teacher: string,
): Promise<Teacher | undefined> => {
  const departmentLoader = await getDepartment(faculty, department);
  if (!departmentLoader) return;
  const teacherLoader = departmentLoader.teachers.find(
    (teacherLoader) => teacherLoader.name === teacher,
  );
  if (!teacherLoader) return;
  await teacherLoader.loadInfo();
  return teacherLoader;
};

export const getDeanery = async (
  faculty: string,
  deanery: string,
): Promise<Deanery | undefined> => {
  const facultyLoader = await getFaculty(faculty);
  if (!facultyLoader) return;
  const deaneryLoader = facultyLoader.deanery.find(
    (deaneryLoader) => deaneryLoader.name === deanery,
  );
  if (!deaneryLoader) return;
  await deaneryLoader.loadInfo();
  return deaneryLoader;
};
