/**
 * Creates a new ArrayBuffer with an Int8 value at a specific position.
 *
 * @param {number} length - The length of the new ArrayBuffer.
 * @param {number} position - The position to set the Int8 value.
 * @param {number} value - The Int8 value to set.
 * @returns {DataView} - A DataView with the specified Int8 value at the given position.
 * @throws {Error} - Throws an error if the position is outside the range.
 */
export default function createInt8TypedArray(length, position, value) {
    if (position >= length) {
      throw new Error('Position outside range');
    }
    const buffer = new DataView(new ArrayBuffer(length), 0, length);
    buffer.setInt8(position, value);
    return buffer;
  }