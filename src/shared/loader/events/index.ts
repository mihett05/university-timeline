import { EventLoader, makeEventObjectFromPath } from './factory';

const getEventObjects = () =>
  Object.entries(import.meta.glob('/public/events/**/*')).map(([path]) =>
    makeEventObjectFromPath(path.replace('/public/events/', '')),
  );

export const getEvents = () => {
  const objects = getEventObjects();
  const events: Record<string, EventLoader> = {};
  objects.forEach((object) => {
    if (!events[object.name]) {
      events[object.name] = new EventLoader(object.name);
    }
    events[object.name].handleFile(object);
  });

  return events;
};
