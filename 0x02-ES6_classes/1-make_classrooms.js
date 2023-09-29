import ClassRoom from './0-classroom';

/**
 * Creates an array of ClassRooms with sizes.
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}